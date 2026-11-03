#!/usr/bin/env bash
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_NODE_MODULES="$PROJECT_ROOT/src/node_modules"

echo "=== 微信开发者工具 (Linux) 原生依赖本地重编译脚本 ==="
echo "目标 Node_Modules 目录: $SRC_NODE_MODULES"
echo ""

# 1. 检查基础编译工具
echo "--- [1/3] 检查系统编译依赖 ---"
MISSING_PKGS=()
for cmd in gcc g++ make python3; do
    if ! command -v "$cmd" &> /dev/null; then
        MISSING_PKGS+=("$cmd")
    fi
done

if [ ${#MISSING_PKGS[@]} -ne 0 ]; then
    echo "警告: 检测到缺少必要构建工具: ${MISSING_PKGS[*]}"
    echo "请在 Ubuntu 上运行: sudo apt-get install -y build-essential libsecret-1-dev libx11-dev"
else
    echo "系统编译工具就绪: gcc, g++, make, python3"
fi

# 2. 针对各模块说明与重编译入口
echo ""
echo "--- [2/3] 准备重编译开源原生模块 ---"
TARGET_MODULES=(
    "@vscode/sqlite3"
    "@vscode/spdlog"
    "node-pty"
    "keytar"
    "native-keymap"
    "native-watchdog"
    "nodegit"
)

for mod in "${TARGET_MODULES[@]}"; do
    MOD_PATH="$SRC_NODE_MODULES/$mod"
    if [ -d "$MOD_PATH" ]; then
        echo "发现模块: $mod ($MOD_PATH)"
        if [ -f "$MOD_PATH/binding.gyp" ]; then
            echo "  -> 包含 binding.gyp，可直接执行: (cd '$MOD_PATH' && npx node-gyp rebuild)"
        else
            echo "  -> 未内嵌 binding.gyp，可通过官方 npm 包拉取源码后重编译: npm install --no-save $mod"
        fi
    fi
done

echo ""
echo "--- [3/3] Windows 专有模块处理 ---"
echo "以下 Windows 专属模块无需在 Linux 编译，已配置跨平台适配/自动忽略:"
echo "  - vscode-windows-registry"
echo "  - vscode-windows-ca-certs"
echo "  - spawn-as-admin"
echo "  - windows-process-tree"
echo ""
echo "=== 检查完毕！==="
