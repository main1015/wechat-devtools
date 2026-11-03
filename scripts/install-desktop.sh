#!/usr/bin/env bash
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DESKTOP_SRC="$PROJECT_ROOT/wechat-devtools.desktop"
TARGET_DIR="$HOME/.local/share/applications"

echo "=== 安装微信开发者工具桌面图标与 Dock 关联 ==="
mkdir -p "$TARGET_DIR"
cp "$DESKTOP_SRC" "$TARGET_DIR/wechat-devtools.desktop"
chmod +x "$TARGET_DIR/wechat-devtools.desktop"

if command -v update-desktop-database &> /dev/null; then
    update-desktop-database "$TARGET_DIR" 2>/dev/null || true
fi

echo "成功安装桌面快捷方式至: $TARGET_DIR/wechat-devtools.desktop"
echo "已绑定 StartupWMClass=wechat-devtools，Dock 栏图标与中文名称即刻生效！"
