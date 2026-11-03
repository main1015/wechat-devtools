#!/usr/bin/env python3
import os
import json

def audit():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    node_modules_dir = os.path.join(base_dir, 'src', 'node_modules')
    
    print("=" * 80)
    print("微信开发者工具 (Linux 开发模式) - 原生 C/C++ 模块审计清单")
    print("=" * 80)
    
    native_modules = {}
    for root, dirs, files in os.walk(node_modules_dir):
        node_files = [f for f in files if f.endswith('.node')]
        gyp_files = [f for f in files if f == 'binding.gyp']
        if node_files or gyp_files:
            rel = os.path.relpath(root, node_modules_dir)
            parts = rel.split(os.sep)
            mod_name = parts[0]
            if mod_name.startswith('@') and len(parts) > 1:
                mod_name = f"{parts[0]}/{parts[1]}"
            
            if mod_name not in native_modules:
                mod_dir = os.path.join(node_modules_dir, mod_name)
                pkg = {}
                pkg_file = os.path.join(mod_dir, 'package.json')
                if os.path.exists(pkg_file):
                    try:
                        with open(pkg_file, 'r', encoding='utf-8') as pf:
                            pkg = json.load(pf)
                    except:
                        pass
                native_modules[mod_name] = {
                    'dir': mod_dir,
                    'version': pkg.get('version', 'N/A'),
                    'scripts': list(pkg.get('scripts', {}).keys()),
                    'node_files': [],
                    'has_gyp': os.path.exists(os.path.join(mod_dir, 'binding.gyp'))
                }
            for nf in node_files:
                native_modules[mod_name]['node_files'].append(os.path.join(rel, nf))

    # Categorize
    categories = {
        '通用/开源 (可在 Linux 本地标准编译)': [
            '@vscode/sqlite3', '@vscode/spdlog', 'node-pty', 'keytar', 
            'native-keymap', 'native-watchdog', 'nodegit', '@swc/core'
        ],
        'Windows 专用模块 (Linux 下可安全 Mock / 忽略)': [
            'vscode-windows-registry', 'vscode-windows-registry-node', 
            'vscode-windows-ca-certs', 'spawn-as-admin', 'windows-process-tree', 'extract-file-icon'
        ],
        '微信私有专用模块 (涉及小程序/小游戏核心)': [
            'wcc-electron', 'node-float-pigment-css', 'sharedMemory', 'skyline-addon'
        ]
    }

    for cat_name, cat_list in categories.items():
        print(f"\n### {cat_name}:")
        for item in sorted(native_modules.keys()):
            # check match
            matches = any(item == c or item.startswith(c + '/') or item.startswith(c + '-') for c in cat_list)
            if matches:
                info = native_modules[item]
                print(f"  - [{item}] (v{info['version']})")
                print(f"      .node 文件: {', '.join(info['node_files']) if info['node_files'] else '无'}")
                print(f"      含 binding.gyp: {'是' if info['has_gyp'] else '否'}")
                if 'rebuild' in info['scripts'] or 'install' in info['scripts']:
                    print(f"      可用构建命令: {[s for s in info['scripts'] if s in ['build', 'rebuild', 'install']]}")

    print("\n" + "=" * 80)
    print(f"共扫描检测到 {len(native_modules)} 个包含原生构件的依赖包。")
    print("=" * 80)

if __name__ == '__main__':
    audit()
