# 🚀 Vercel 快速部署指南

## ✅ 已修复的问题
- TypeScript 类型冲突已修复
- 所有敏感信息已移除
- 环境变量已配置为占位符

## 📋 部署步骤

### 1. 推送到 GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. 在 Vercel 导入项目

访问 https://vercel.com 并登录

点击 **"Add New Project"**

选择你的 GitHub 仓库

### 3. 配置项目设置

**Framework Preset**: Next.js

**Root Directory**: `frontend` ⚠️ 重要！

**Build Command**: `npm run build` (自动检测)

**Output Directory**: `.next` (自动检测)

**Install Command**: `npm install` (自动检测)

### 4. 添加环境变量

在 "Environment Variables" 部分添加：

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUI_NETWORK` | `testnet` |
| `NEXT_PUBLIC_PACKAGE_ID` | 你的 Package ID |
| `NEXT_PUBLIC_GAME_STATE_ID` | 你的 GameState ID |

**获取你的 ID:**
- Package ID: 从部署输出或 `Move.toml` 中获取
- GameState ID: 从部署后的对象列表中获取 `GameState` 类型的对象

### 5. 部署

点击 **"Deploy"** 按钮

等待 2-3 分钟完成构建

## 🎉 完成！

部署成功后，你会得到一个 URL，例如：
```
https://your-project.vercel.app
```

## 🔍 验证部署

访问你的网站并测试：
- ✅ 页面加载正常
- ✅ 钱包可以连接
- ✅ 铸造塔 NFT 功能
- ✅ 游戏功能
- ✅ 市场功能

## 🐛 常见问题

### 构建失败？
检查 Vercel 日志，确保：
- Root Directory 设置为 `frontend`
- 环境变量正确配置

### 网站打开但功能不工作？
- 打开浏览器控制台查看错误
- 确认环境变量已正确设置
- 确认 Package ID 和 GameState ID 正确

### 如何更新部署？
只需推送代码到 GitHub：
```bash
git add .
git commit -m "Update"
git push
```
Vercel 会自动重新部署！

## 📱 绑定自定义域名（可选）

1. 在 Vercel Dashboard 进入项目
2. 点击 "Settings" → "Domains"
3. 添加你的域名
4. 按提示配置 DNS

## 💡 提示

- Vercel 免费计划足够使用
- 每次 push 都会自动部署
- 可以在 Dashboard 查看部署历史
- 支持预览部署（PR 自动部署）

---

祝部署顺利！🎮✨
