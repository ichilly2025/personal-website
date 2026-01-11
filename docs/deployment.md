# 个人网站部署指南

本文档提供了将个人网站部署到不同平台的详细步骤。

## 部署选项

### 1. GitHub Pages (免费)

GitHub Pages 是最简单且免费的部署方式，适合静态网站。

#### 部署步骤：

1. **准备仓库**
   ```bash
   # 初始化Git仓库（如果尚未初始化）
   git init
   
   # 添加所有文件
   git add .
   
   # 提交更改
   git commit -m "Initial commit"
   ```

2. **创建GitHub仓库**
   - 登录 [GitHub](https://github.com)
   - 点击右上角 "+" → "New repository"
   - 仓库名建议使用：`username.github.io`（username为你的GitHub用户名）
   - 选择 "Public"
   - 点击 "Create repository"

3. **推送到GitHub**
   ```bash
   # 添加远程仓库
   git remote add origin https://github.com/username/username.github.io.git
   
   # 推送到GitHub
   git branch -M main
   git push -u origin main
   ```

4. **启用GitHub Pages**
   - 进入仓库页面
   - 点击 "Settings" → "Pages"
   - 在 "Source" 部分，选择 "Deploy from a branch"
   - 分支选择 "main"，文件夹选择 "/ (root)"
   - 点击 "Save"

5. **访问网站**
   - 等待几分钟后，访问：`https://username.github.io`
   - 如果使用自定义域名，请参考下面的自定义域名部分

### 2. Netlify (免费)

Netlify 提供更强大的功能，包括自动部署、HTTPS、表单处理等。

#### 部署步骤：

1. **准备网站文件**
   - 确保所有文件都在项目根目录
   - 确认 `index.html` 在根目录

2. **通过Git部署**
   - 登录 [Netlify](https://app.netlify.com)
   - 点击 "Add new site" → "Import an existing project"
   - 选择你的Git提供商（GitHub、GitLab或Bitbucket）
   - 授权Netlify访问你的仓库
   - 选择要部署的仓库
   - 配置部署设置：
     - Build command: 留空（静态网站）
     - Publish directory: `.`（根目录）
   - 点击 "Deploy site"

3. **通过拖拽部署**
   - 登录 Netlify
   - 将整个项目文件夹拖拽到Netlify的部署区域
   - Netlify会自动处理部署

4. **配置网站**
   - 部署完成后，点击 "Site settings"
   - 在 "Site information" 中可修改站点名称
   - 在 "Domain management" 中可设置自定义域名

5. **访问网站**
   - Netlify会提供一个类似 `sitename.netlify.app` 的URL
   - 网站会自动启用HTTPS

### 3. Vercel (免费)

Vercel 专注于前端部署，提供极快的全球CDN。

#### 部署步骤：

1. **安装Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **通过CLI部署**
   ```bash
   # 在项目根目录执行
   vercel
   
   # 首次部署会提示登录和配置
   # 按提示操作，选择默认配置即可
   ```

3. **通过Git部署**
   - 登录 [Vercel](https://vercel.com)
   - 点击 "Add New..." → "Project"
   - 导入你的Git仓库
   - 配置项目：
     - Framework Preset: "Other"
     - Build Command: 留空
     - Output Directory: `.`
   - 点击 "Deploy"

4. **访问网站**
   - Vercel会提供一个类似 `sitename.vercel.app` 的URL
   - 自动启用HTTPS和全球CDN

### 4. 传统服务器部署

如果你有自己的服务器，可以按以下步骤部署：

#### 部署步骤：

1. **准备服务器**
   ```bash
   # 安装Nginx
   sudo apt update
   sudo apt install nginx
   
   # 启动Nginx
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

2. **上传网站文件**
   ```bash
   # 使用SCP上传文件
   scp -r * user@your-server-ip:/var/www/html/
   
   # 或者使用SFTP客户端
   ```

3. **配置Nginx**
   ```bash
   # 编辑Nginx配置文件
   sudo nano /etc/nginx/sites-available/default
   
   # 确保配置包含以下内容
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
   }
   
   # 测试配置
   sudo nginx -t
   
   # 重启Nginx
   sudo systemctl restart nginx
   ```

4. **配置防火墙**
   ```bash
   # 允许HTTP和HTTPS
   sudo ufw allow 'Nginx Full'
   ```

## 自定义域名配置

### GitHub Pages 自定义域名

1. **购买域名**
   - 从域名注册商（如Namecheap、GoDaddy等）购买域名

2. **配置DNS**
   - 添加A记录：
     - 类型：A
     - 主机：@
     - 值：185.199.108.153
     - TTL：自动
   - 添加其他A记录（GitHub推荐）：
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **在GitHub中配置**
   - 仓库 Settings → Pages
   - 在 "Custom domain" 中输入你的域名
   - 点击 "Save"
   - 勾选 "Enforce HTTPS"

### Netlify 自定义域名

1. **添加自定义域名**
   - Netlify控制台 → Site settings → Domain management
   - 点击 "Add custom domain"
   - 输入你的域名

2. **配置DNS**
   - Netlify会提供DNS记录
   - 在域名注册商处添加CNAME记录：
     - 类型：CNAME
     - 主机：www
     - 值：your-site.netlify.app
   - 或者使用Netlify DNS

### Vercel 自定义域名

1. **添加自定义域名**
   - Vercel控制台 → Project → Settings → Domains
   - 点击 "Add"
   - 输入你的域名

2. **配置DNS**
   - 按照Vercel提供的DNS记录配置
   - 通常需要添加A记录或CNAME记录

## HTTPS配置

### 自动HTTPS（推荐）

- **GitHub Pages**: 自动提供HTTPS，需在设置中启用
- **Netlify**: 自动提供HTTPS，无需配置
- **Vercel**: 自动提供HTTPS，无需配置

### 手动配置HTTPS（传统服务器）

1. **安装Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   ```

2. **获取SSL证书**
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

3. **自动续期**
   ```bash
   # 测试自动续期
   sudo certbot renew --dry-run
   ```

## 性能优化

### 1. 图片优化
- 使用WebP格式图片
- 压缩图片大小
- 使用懒加载

### 2. 代码优化
- 压缩CSS和JavaScript
- 使用CDN加载外部资源
- 启用Gzip压缩

### 3. 缓存策略
```nginx
# Nginx缓存配置示例
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 监控与分析

### 1. Google Analytics
```html
<!-- 在index.html的<head>中添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. 错误监控
- 使用Sentry进行错误跟踪
- 配置Google Search Console

## 故障排除

### 常见问题

1. **网站无法访问**
   - 检查DNS配置是否正确
   - 确认服务器运行状态
   - 检查防火墙设置

2. **HTTPS证书问题**
   - 确保证书已正确安装
   - 检查证书是否过期
   - 使用SSL Labs测试：https://www.ssllabs.com/ssltest/

3. **资源加载失败**
   - 检查CDN链接是否有效
   - 确认文件路径正确
   - 检查浏览器控制台错误

4. **表单提交问题**
   - 检查Netlify表单配置（如果使用Netlify）
   - 确认表单action URL正确
   - 测试表单提交功能

### 调试工具

1. **浏览器开发者工具**
   - 检查Console错误
   - 查看Network请求
   - 调试JavaScript

2. **在线测试工具**
   - PageSpeed Insights: https://pagespeed.web.dev/
   - WebPageTest: https://www.webpagetest.org/
   - Lighthouse: Chrome内置工具

## 维护与更新

### 1. 定期更新
- 更新依赖库版本
- 检查安全漏洞
- 更新内容

### 2. 备份策略
- 定期备份网站文件
- 使用Git进行版本控制
- 备份数据库（如果有）

### 3. 安全措施
- 定期更新服务器软件
- 使用强密码
- 启用防火墙
- 监控异常访问

## 支持与帮助

如果遇到问题，可以参考以下资源：

1. **官方文档**
   - GitHub Pages: https://docs.github.com/en/pages
   - Netlify: https://docs.netlify.com/
   - Vercel: https://vercel.com/docs

2. **社区支持**
   - Stack Overflow
   - GitHub Discussions
   - 官方论坛

3. **联系作者**
   - 通过网站联系表单
   - GitHub Issues

---

**最后更新**: 2024年1月  
**版本**: 1.0.0  
**作者**: 个人网站项目团队