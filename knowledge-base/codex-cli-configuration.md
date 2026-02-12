# Codex CLI 配置指南

## 概述

Codex CLI 是一个基于 OpenAI API 的交互式命令行工具，提供类似 ChatGPT 的对话体验。它支持自定义 API 端点，可以连接到本地代理服务器或其他兼容 OpenAI API 的服务。

**项目信息：**
- 版本：0.98.0
- 项目位置：`/Users/yahao/codex-cli`
- 主要功能：交互式聊天、会话历史、彩色终端输出、自定义 API 端点

## 问题描述

在使用 `codex` 命令启动 CLI 时，可能会遇到以下错误：

```
Error: Configuration error:
- OPENAI_API_KEY environment variable is not set

Please check your environment variables and try again.
```

这个错误表明程序无法找到必需的 API key 配置。

## 原因分析

Codex CLI 通过读取环境变量来获取配置信息。配置读取逻辑位于 `/Users/yahao/codex-cli/src/config.js`：

```javascript
const config = {
  version: '0.98.0',
  model: process.env.OPENAI_MODEL || 'gpt-4',
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || 'http://127.0.0.1:15721/v1',
  workingDirectory: process.cwd(),
};
```

程序启动时会验证 `OPENAI_API_KEY` 是否存在，如果不存在则报错退出。

**常见原因：**
1. 环境变量未设置
2. 环境变量设置在错误的配置文件中
3. 配置文件未被正确加载（如 `.zshrc` 未生效）
4. API key 已过期或无效

## 解决方案

### 步骤 1: 配置环境变量

编辑 shell 配置文件（根据你使用的 shell 选择）：

**对于 Zsh（macOS 默认）：**
```bash
vim ~/.zshrc
# 或使用其他编辑器
nano ~/.zshrc
```

**对于 Bash：**
```bash
vim ~/.bash_profile
# 或
vim ~/.bashrc
```

### 步骤 2: 添加配置

在配置文件中添加以下内容：

```bash
# OpenAI API Configuration
export OPENAI_API_KEY='your-api-key-here'
export OPENAI_BASE_URL='http://127.0.0.1:15721/v1'

# Codex CLI Path
export PATH="$PATH:/Users/yahao/codex-cli/bin"
```

**配置说明：**
- `OPENAI_API_KEY`：你的 OpenAI API key（必需）
- `OPENAI_BASE_URL`：API 端点地址（可选，默认为 `http://127.0.0.1:15721/v1`）
- `OPENAI_MODEL`：使用的模型（可选，默认为 `gpt-4`）
- `PATH`：将 codex-cli 的 bin 目录添加到系统路径

### 步骤 3: 使配置生效

保存文件后，重新加载配置：

```bash
source ~/.zshrc
# 或对于 bash
source ~/.bash_profile
```

### 步骤 4: 验证配置

检查环境变量是否正确设置：

```bash
echo $OPENAI_API_KEY
echo $OPENAI_BASE_URL
echo $PATH | grep codex-cli
```

如果输出正确的值，说明配置已生效。

### 步骤 5: 启动 Codex CLI

```bash
codex
```

如果配置正确，应该能看到欢迎界面并开始使用。

## 配置详解

### 环境变量说明

| 变量名 | 必需 | 默认值 | 说明 |
|--------|------|--------|------|
| `OPENAI_API_KEY` | 是 | 无 | OpenAI API 密钥 |
| `OPENAI_BASE_URL` | 否 | `http://127.0.0.1:15721/v1` | API 端点地址 |
| `OPENAI_MODEL` | 否 | `gpt-4` | 使用的模型名称 |

### API 端点配置

Codex CLI 支持连接到不同的 API 端点：

**1. 本地代理服务器（默认）：**
```bash
export OPENAI_BASE_URL='http://127.0.0.1:15721/v1'
```

**2. OpenAI 官方 API：**
```bash
export OPENAI_BASE_URL='https://api.openai.com/v1'
```

**3. 其他兼容服务：**
```bash
export OPENAI_BASE_URL='https://your-custom-endpoint.com/v1'
```

### 模型配置

如果需要使用不同的模型：

```bash
export OPENAI_MODEL='gpt-3.5-turbo'
# 或
export OPENAI_MODEL='gpt-4-turbo'
```

## 验证步骤

### 1. 检查配置文件

```bash
cat ~/.zshrc | grep OPENAI
```

应该能看到你设置的环境变量。

### 2. 检查环境变量

在新的终端窗口中运行：

```bash
env | grep OPENAI
```

应该显示：
```
OPENAI_API_KEY=your-api-key-here
OPENAI_BASE_URL=http://127.0.0.1:15721/v1
```

### 3. 测试 Codex CLI

```bash
codex
```

成功启动后，尝试发送一条消息测试功能。

### 4. 检查命令可用性

```bash
which codex
```

应该显示：`/Users/yahao/codex-cli/bin/codex`

## 常见问题

### Q1: 配置后仍然报错 "OPENAI_API_KEY environment variable is not set"

**解决方法：**
1. 确认你在新的终端窗口中测试（旧窗口不会自动加载新配置）
2. 检查配置文件是否有语法错误（如引号不匹配）
3. 确认使用的是正确的 shell 配置文件（zsh 用 `.zshrc`，bash 用 `.bash_profile`）
4. 手动运行 `source ~/.zshrc` 重新加载配置

### Q2: API key 无效或过期

**解决方法：**
1. 检查 API key 是否正确复制（没有多余空格）
2. 如果使用本地代理，确认代理服务器正在运行
3. 如果使用 OpenAI 官方 API，登录 OpenAI 平台检查 key 状态
4. 生成新的 API key 并更新配置

### Q3: 命令找不到 "command not found: codex"

**解决方法：**
1. 检查 PATH 是否包含 codex-cli 的 bin 目录：
   ```bash
   echo $PATH | grep codex-cli
   ```
2. 如果没有，添加到配置文件：
   ```bash
   export PATH="$PATH:/Users/yahao/codex-cli/bin"
   ```
3. 重新加载配置：`source ~/.zshrc`

### Q4: 连接本地代理失败

**解决方法：**
1. 确认本地代理服务器正在运行（端口 15721）
2. 检查端口是否被占用：
   ```bash
   lsof -i :15721
   ```
3. 如果代理未运行，启动代理服务器
4. 如果使用不同端口，更新 `OPENAI_BASE_URL`

## 在新电脑上安装

### 前置要求

- Node.js >= 14.0.0
- npm 或 yarn
- OpenAI API key 或本地代理服务器

### 完整安装流程

#### 1. 安装 Node.js

**macOS（使用 Homebrew）：**
```bash
brew install node
```

**验证安装：**
```bash
node --version
npm --version
```

#### 2. 克隆或下载 Codex CLI

如果有 Git 仓库：
```bash
git clone <repository-url> ~/codex-cli
cd ~/codex-cli
```

如果是手动复制：
```bash
# 将 codex-cli 文件夹复制到 ~/codex-cli
```

#### 3. 安装依赖

```bash
cd ~/codex-cli
npm install
```

#### 4. 创建全局链接

```bash
npm link
```

这会创建一个全局可用的 `codex` 命令。

#### 5. 配置环境变量

编辑 shell 配置文件：

**对于 Zsh（macOS 默认）：**
```bash
vim ~/.zshrc
```

**对于 Bash：**
```bash
vim ~/.bash_profile
```

添加以下内容：

```bash
# OpenAI API Configuration
export OPENAI_API_KEY='your-api-key-here'
export OPENAI_BASE_URL='http://127.0.0.1:15721/v1'

# Codex CLI Path (如果 npm link 不工作)
export PATH="$PATH:$HOME/codex-cli/bin"
```

#### 6. 使配置生效

```bash
source ~/.zshrc
# 或
source ~/.bash_profile
```

#### 7. 验证安装

```bash
# 检查命令是否可用
which codex

# 检查环境变量
env | grep OPENAI

# 启动 Codex CLI
codex
```

### 可选：设置本地代理

如果需要使用本地代理服务器：

1. 安装并配置你的代理服务器
2. 确保代理运行在 `http://127.0.0.1:15721`
3. 或者修改 `OPENAI_BASE_URL` 指向你的代理地址

## 使用技巧

### 基本命令

启动后可以使用以下命令：

- `/exit` 或 `/quit` - 退出程序
- `/clear` - 清屏
- `/help` - 显示帮助信息

### 会话管理

- 会话历史在程序运行期间保持
- 退出后会话历史会丢失
- 每次启动都是新的会话

### 故障排查

如果遇到问题，按以下顺序检查：

1. **检查环境变量**：`env | grep OPENAI`
2. **检查配置文件**：`cat ~/.zshrc | grep OPENAI`
3. **检查命令路径**：`which codex`
4. **检查 Node.js**：`node --version`
5. **查看详细错误**：直接运行 `node /Users/yahao/codex-cli/bin/codex`

## 更新和维护

### 更新 API Key

1. 编辑配置文件：`vim ~/.zshrc`
2. 修改 `OPENAI_API_KEY` 的值
3. 保存并重新加载：`source ~/.zshrc`
4. 在新终端窗口中测试

### 更新 Codex CLI

```bash
cd ~/codex-cli
git pull  # 如果使用 Git
npm install  # 更新依赖
```

### 卸载

```bash
npm unlink  # 移除全局链接
rm -rf ~/codex-cli  # 删除项目文件
# 从 ~/.zshrc 中删除相关配置
```

## 安全建议

1. **不要将 API key 提交到版本控制系统**
2. **定期轮换 API key**
3. **使用环境变量而不是硬编码**
4. **限制 API key 的权限和使用范围**
5. **监控 API 使用情况和费用**

## 参考资源

- Codex CLI 项目目录：`~/codex-cli`
- 配置文件：`~/codex-cli/src/config.js`
- README：`~/codex-cli/README.md`
- Shell 配置：`~/.zshrc` 或 `~/.bash_profile`

---

**文档版本：** 1.0
**最后更新：** 2026-02-12
**适用版本：** Codex CLI 0.98.0
