# 微信开发者工具 (Ubuntu / Linux 开发模式工程)

本项目由官方安装包 `wechat_devtools_2.02.2608080_win32_x64.exe` 完整解构重构而成，保留了全部上层前端、主进程、渲染进程源码以及扩展体系，专为在 **Ubuntu / Linux 环境下以源码开发模式运行、调试与按需自主编译** 而设计。

---

## 一、 内核环境与版本信息

- **微信开发者工具版本**：`2.02.2608080` (Stable)
- **匹配 Electron 版本**：`v36.6.0`
- **匹配 Chromium 内核**：`136.0.7103.177`
- **逆向与分析工具链**：`REA (Reverse Engineering Assistant) v6.7.0` (Node.js 24)

---

## 二、 工程目录结构

```text
wechat_devtools/
├── src/                               # 微信开发者工具完整源码树 (共 30,830+ 文件)
│   ├── js/electron/main.js            # Electron 主进程入口文件
│   ├── js/                            # 业务逻辑、编译器调度、多任务管理
│   ├── html/                          # 窗口 UI、模拟器、设置、登录面板
│   ├── node_modules/                  # 包含各模块源码及待编译的原生 C++ 依赖
│   └── package.json                   # 微信开发者工具核心运行配置
├── extensions/                        # 内置 60 个微信/VSCode 专用扩展组件
├── scripts/
│   ├── dev.sh                         # 开发模式启动脚本 (支持调试参数)
│   ├── setup-desktop.sh               # 一键安装系统桌面快捷方式脚本
│   ├── audit_native.py                # 原生 C/C++ 模块扫描与状态审计脚本
│   ├── rebuild-native.sh              # Linux 本地原生依赖构建指导脚本
│   └── extract_asar.py                # asar 与解包自动化处理脚本
├── package.json                       # 顶层开发工程配置文件
└── README.md                          # 本文档
```

---

## 三、 快速上手

### 1. 查看原生依赖审计结果
在工程根目录下执行：
```bash
python3 scripts/audit_native.py
```
该脚本会盘点所有包含 `.node` 的依赖项并分类展示：
- **通用/开源模块**（如 `@vscode/sqlite3`、`node-pty`、`keytar` 等）：支持在 Linux 环境下直接使用 `node-gyp rebuild` 或对应 Linux npm 包替换编译。
- **Windows 专有模块**（如 `vscode-windows-registry`、`vscode-windows-ca-certs` 等）：已在开发模式中做跨平台判断与静默处理，Linux 环境下无需编译。
- **小程序私有模块**（如 `wcc-electron`、`skyline-addon`）：保留了原生调用接口与执行体。

### 2. 本地依赖安装（推荐安装匹配的 Electron）
```bash
npm install --save-dev electron@36.6.0
```

### 3. 以开发模式启动
```bash
# 方式一：通过 npm 脚本启动
npm run dev

# 方式二：直接执行启动脚本
bash scripts/dev.sh

# 开启主进程调试端口 (9222)
bash scripts/dev.sh --inspect=9222
```

---

## 四、 本地编译指导 (后续自主编译原生模块)

对于需要在 Linux 环境下获得完整原生能力的开源依赖项（如内置终端 `node-pty`、本地数据库 `@vscode/sqlite3`）：
1. 确保安装 Ubuntu 基础开发工具：
   ```bash
   sudo apt-get install -y build-essential libsecret-1-dev libx11-dev
   ```
2. 运行构建引导：
   ```bash
   bash scripts/rebuild-native.sh
   ```
3. 对指定模块重新编译示例：
   ```bash
   cd src/node_modules/node-pty
   npx @electron/rebuild -v 36.6.0
   ```

---

## 五、 REA (Reverse Engineering Assistant) MCP 集成

本工程已在 `.antigravity/mcp.json` 中配置了 REA MCP 服务，指定使用环境中的 Node 24 运行时拉起：
```json
{
  "mcpServers": {
    "rea": {
      "command": "node",
      "args": [
        "path/to/rea-agents/scripts/rea.mjs",
        "mcp"
      ]
    }
  }
}
```
通过 REA 可以直接对代码调用链、原生函数边界（如 `wcc` / `wcsc` 编译调用）进行深度跟踪与 AST 分析。
