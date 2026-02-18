# OpenClaw 飞书机器人配置指南

## 一、安装 OpenClaw

```bash
# 安装
curl -fsSL https://openclaw.ai/install.sh | bash

# 配置 PATH
echo 'export PATH="/Users/yahao/.npm-global/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

## 二、修改 MiniMax API 地址（国内使用）

**关键：使用 minimaxi（不是 minimax）**

修改以下两个文件中的 baseUrl：

1. `~/.openclaw/openclaw.json`
2. `~/.openclaw/agents/main/agent/models.json`

将 `https://api.minimax.io/anthropic` 改为 `https://api.minimaxi.com/anthropic`

## 三、配置模型

```bash
# 设置默认模型为 MiniMax
openclaw config set agents.defaults.model.primary "minimax/MiniMax-M2.5"
```

## 四、配置飞书

### 1. 飞书应用权限
在飞书开放平台添加权限：
- `contact:contact.base:readonly`
- `contact:contact:readonly`

### 2. 配置回调
- 事件回调URL: `https://你的服务器公网IP/feishu`
- 订阅方式: 使用长连接接收事件/回调

## 五、启动服务

### 1. 在腾讯云服务器上安装 OpenClaw

```bash
# 登录腾讯云服务器后执行
ssh your_server_ip

# 安装 OpenClaw
curl -fsSL https://openclaw.ai/install.sh | bash

# 配置 PATH
echo 'export PATH="/Users/yahao/.npm-global/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
```

### 2. 启动 OpenClaw Gateway

```bash
# 在服务器上运行（建议使用 screen 或 systemd 保持后台运行）
openclaw gateway
```

### 3. 打开 Dashboard
```bash
openclaw dashboard
```

## 六、飞书配置检查清单

- [ ] 事件回调URL 已配置（指向腾讯云服务器公网 IP）
- [ ] 订阅方式选择"使用长连接接收事件/回调"
- [ ] 已添加联系人权限
- [ ] 应用已发布

## 七、常用命令

```bash
openclaw status          # 查看状态
openclaw gateway start   # 启动网关
openclaw gateway stop    # 停止网关
openclaw logs           # 查看日志
openclaw channels list   # 查看频道
```

## 八、常见问题

### 1. 401 invalid api key
- 检查 baseUrl 是否为 `api.minimaxi.com`（不是 minimax）
- 检查 API key 是否正确

### 2. 99991672 权限错误
- 需要在飞书开放平台添加联系人权限

### 3. 503 No available channels
- 切换到可用的模型：`openclaw config set agents.defaults.model.primary "minimax/MiniMax-M2.5"`

### 4. 回调无法接收消息
- 确保 OpenClaw Gateway 已在服务器上运行
- 确保回调URL正确配置（使用服务器公网 IP 或域名）

---

## 九、飞书配对（首次使用）

```bash
openclaw pairing approve feishu <配对码>
```

配对码由 Claude Code 返回，格式如 `5EQ6GQWJ`
