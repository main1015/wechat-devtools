#!/usr/bin/env bash
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$PROJECT_ROOT/src"

echo "=== 启动微信开发者工具 (开发模式 / Linux) ==="
echo "工程根目录: $PROJECT_ROOT"
echo "应用源码目录: $APP_DIR"

# 1. 提升文件监听描述符上限，防止 inotify 打开文件过多
ulimit -n 65535 2>/dev/null || true

# 清理意外崩溃残留的 SingletonLock
rm -f "$HOME/.config/wechat-devtools/Singleton"* 2>/dev/null || true
rm -f "$HOME/.config/微信开发者工具/Singleton"* 2>/dev/null || true

# 检查并确保 node-pty 为 Linux 原生兼容版本
if [ -d "$APP_DIR/node_modules/node-pty" ]; then
    if file "$APP_DIR/node_modules/node-pty/build/Release/pty.node" 2>/dev/null | grep -q "PE32+"; then
        echo "检测到 Windows 版本的 node-pty，尝试寻找 Linux 兼容版本..."
        if [ -d "/usr/share/code/resources/app/node_modules/node-pty" ]; then
            cp -r /usr/share/code/resources/app/node_modules/node-pty "$APP_DIR/node_modules/node-pty"
        elif [ -d "/usr/share/cursor/resources/app/node_modules/node-pty" ]; then
            cp -r /usr/share/cursor/resources/app/node_modules/node-pty "$APP_DIR/node_modules/node-pty"
        fi
    fi
fi

# 检查并确保 @swc/core 为 Linux 原生兼容版本
SWC_NODE="$APP_DIR/node_modules/@swc/core/swc.linux-x64-gnu.node"
if [ ! -f "$SWC_NODE" ]; then
    FOUND_CACHE=$(find "$HOME/.cache" -name "swc.linux-x64-gnu.node" 2>/dev/null | head -n 1)
    if [ -n "$FOUND_CACHE" ] && [ -f "$FOUND_CACHE" ]; then
        echo "从本地缓存补全 @swc/core Linux 原生绑定..."
        cp "$FOUND_CACHE" "$SWC_NODE" 2>/dev/null || true
    fi
fi

export NODE_ENV="development"
export DEV_MODE="1"
export ELECTRON_ENABLE_LOGGING="1"

# 2. 寻找最快的本地或缓存 Electron v36.6.0，避免每次通过 npx 联网校验耗时
ELECTRON_BIN=""
if [ -x "$PROJECT_ROOT/node_modules/.bin/electron" ]; then
    ELECTRON_BIN="$PROJECT_ROOT/node_modules/.bin/electron"
elif command -v electron &> /dev/null; then
    ELECTRON_BIN="electron"
else
    CACHED_ELECTRON=$(find "$HOME/.npm/_npx" -name "electron" -type f -executable 2>/dev/null | head -n 1)
    if [ -n "$CACHED_ELECTRON" ]; then
        ELECTRON_BIN="$CACHED_ELECTRON"
    else
        ELECTRON_BIN="npx --yes electron@36.6.0"
    fi
fi

# 3. 注入小游戏 WebGL/Canvas 与本地私有网络通信所需的核心 Chromium 参数
ELECTRON_FLAGS=(
    "--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,BlockInsecurePrivateNetworkRequests,VaapiVideoDecoder"
    "--enable-experimental-web-platform-features"
    "--allow-insecure-localhost"
    "--ignore-gpu-blocklist"
    "--ignore-gpu-blacklist"
    "--enable-webgl"
    "--enable-features=SharedArrayBuffer"
    "--enable-experimental-webassembly-features"
    "--disable-gpu-sandbox"
    "--no-sandbox"
)

echo "使用 Electron 内核: $ELECTRON_BIN"
echo "正在极速启动应用..."
exec "$ELECTRON_BIN" "$APP_DIR" "${ELECTRON_FLAGS[@]}" "$@"
