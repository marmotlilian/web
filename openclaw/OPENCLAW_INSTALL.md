# OpenClaw 快速安装

## 一行命令安装
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

## 配置 PATH
```bash
echo 'export PATH="/Users/yahao/.npm-global/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

## 启动
```bash
openclaw setup
openclaw dashboard
```

## 常用命令
```bash
openclaw status      # 状态
openclaw tui        # 终端对话
openclaw gateway start   # 启动网关
```
