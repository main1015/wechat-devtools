#!/usr/bin/env bash
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DESKTOP_FILE="$PROJECT_ROOT/wechat-devtools.desktop"
USER_APPS_DIR="$HOME/.local/share/applications"

echo "=== 安装微信开发者工具桌面快捷方式 ==="
echo "工程目录: $PROJECT_ROOT"

cat > "$DESKTOP_FILE" <<EOF
[Desktop Entry]
Name=微信开发者工具
GenericName=微信开发者工具
Comment=WeChat DevTools
Exec=$PROJECT_ROOT/scripts/dev.sh
Icon=$PROJECT_ROOT/src/static/image/logo.png
Terminal=false
Type=Application
Categories=Development;
StartupWMClass=wechat-devtools
EOF

chmod +x "$DESKTOP_FILE"
mkdir -p "$USER_APPS_DIR"
cp "$DESKTOP_FILE" "$USER_APPS_DIR/"

echo "快捷方式已成功生成并安装至: $USER_APPS_DIR/wechat-devtools.desktop"
echo "您现在可以在系统应用菜单中直接搜索并启动「微信开发者工具」。"

