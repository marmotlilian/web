# OpenClaw 飞书机器人 - 最简部署指南

## 核心优势

- **无需域名**
- **无需 ngrok 内网穿透**
- **无需公网 IP**
- 使用飞书长连接模式，服务器主动连接飞书

## 部署步骤

### 一、安装 OpenClaw（腾讯云服务器）

```bash
# 登录服务器
ssh your_server_ip

# 安装
curl -fsSL https://openclaw.ai/install.sh | bash

# 配置 PATH
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
```

### 二、配置 MiniMax API（国内使用）

```bash
# 修改 API 地址
nano ~/.openclaw/openclaw.json
# 将 baseUrl 从 api.minimax.io 改为 api.minimaxi.com
```

### 三、配置飞书

1. 飞书开放平台 → 应用权限 → 添加：
   - `contact:contact.base:readonly`
   - `contact:contact:readonly`

2. 回调配置：
   - **订阅方式：选择"使用长连接接收事件/回调"**
   - 无需填写回调地址，配置自动生效

3. 发布应用

### 四、启动服务

```bash
# 在服务器上运行（建议使用 screen 保持后台运行）
screen -S openclaw
openclaw gateway
```

### 五、飞书配对

```bash
# 飞书@机器人，获取配对码，然后在服务器上执行：
openclaw pairing approve feishu <配对码>
```

## 常用命令

```bash
openclaw status          # 查看状态
openclaw logs           # 查看日志
screen -r openclaw      # 恢复后台运行的 gateway
```

## 常见问题

- **401 invalid api key** → 检查 baseUrl 是否为 `api.minimaxi.com`
- **99991672 权限错误** → 添加飞书联系人权限
- **503 No available channels** → 切换模型：`openclaw config set agents.defaults.model.primary "minimax/MiniMax-M2.5"`
