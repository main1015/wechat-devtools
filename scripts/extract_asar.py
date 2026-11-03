#!/usr/bin/env python3
import struct
import json
import os
import shutil
import sys

def main():
    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    asar_path = os.path.join(project_root, 'build/unpack/resources/app.asar')
    unpacked_path = os.path.join(project_root, 'build/unpack/resources/app.asar.unpacked')
    out_dir = os.path.join(project_root, 'src')
    vsext_path = os.path.join(project_root, 'build/unpack/resources/vsextensions')
    extensions_dest = os.path.join(project_root, 'extensions')

    os.makedirs(out_dir, exist_ok=True)
    os.makedirs(extensions_dest, exist_ok=True)

    print(f"Reading {asar_path} ...")
    with open(asar_path, 'rb') as f:
        header = f.read(16)
        size_int, header_size, header_obj_size, json_size = struct.unpack('<IIII', header)
        json_bytes = f.read(json_size)
        manifest = json.loads(json_bytes.decode('utf-8'))
        data_start = 16 + json_size

        total_extracted = [0]

        def extract_node(node, current_dir):
            for name, item in node.items():
                target_path = os.path.join(current_dir, name)
                if 'files' in item:
                    os.makedirs(target_path, exist_ok=True)
                    extract_node(item['files'], target_path)
                else:
                    if item.get('unpacked'):
                        continue
                    if 'offset' in item:
                        offset = data_start + int(item['offset'])
                        size = item['size']
                        f.seek(offset)
                        content = f.read(size)
                        with open(target_path, 'wb') as out_f:
                            out_f.write(content)
                        total_extracted[0] += 1
                        if total_extracted[0] % 5000 == 0:
                            print(f"Extracted {total_extracted[0]} files...")

        print("Extracting files from asar to src/ ...")
        extract_node(manifest.get('files', {}), out_dir)
        print(f"Extraction complete! Total {total_extracted[0]} files extracted from asar.")

    if os.path.exists(unpacked_path):
        print("Merging app.asar.unpacked into src/ ...")
        unpacked_count = 0
        for root, dirs, files in os.walk(unpacked_path):
            rel = os.path.relpath(root, unpacked_path)
            dest_dir = os.path.join(out_dir, rel) if rel != '.' else out_dir
            os.makedirs(dest_dir, exist_ok=True)
            for file in files:
                src_file = os.path.join(root, file)
                dest_file = os.path.join(dest_dir, file)
                shutil.copy2(src_file, dest_file)
                unpacked_count += 1
        print(f"Merged {unpacked_count} unpacked files into src/.")

    if os.path.exists(vsext_path):
        print("Syncing vsextensions into extensions/ ...")
        ext_count = 0
        for item in os.listdir(vsext_path):
            s = os.path.join(vsext_path, item)
            d = os.path.join(extensions_dest, item)
            if os.path.isdir(s):
                if os.path.exists(d):
                    shutil.rmtree(d)
                shutil.copytree(s, d)
                ext_count += 1
            else:
                shutil.copy2(s, d)
                ext_count += 1
        print(f"Copied {ext_count} extensions into extensions/.")

if __name__ == '__main__':
    main()
