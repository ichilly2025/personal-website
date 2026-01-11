# Personal Website - Senior Full Stack Engineer

一个为资深全栈工程师打造的极简高端单页个人网站，采用深色主题和现代交互效果。

## 🌟 项目特点

- **极简设计**：专注于内容展示，无冗余元素
- **深色主题**：采用现代深色配色方案，保护视力
- **响应式布局**：完美适配各种设备尺寸
- **高性能**：原生JavaScript实现，无框架依赖
- **现代交互**：包含3D浮动效果、磨砂玻璃效果等
- **SEO友好**：语义化HTML结构，良好的可访问性

## 🛠️ 技术栈

### 核心技术
- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **Vanilla JavaScript** - 原生交互逻辑

### 第三方库
- **Tailwind CSS** - 通过CDN引入，用于快速样式开发
- **Lucide Icons** - 通过CDN引入，提供现代化图标
- **EmailJS** - 用于表单提交（可选集成）

### 开发工具
- **Git** - 版本控制
- **VS Code** - 推荐开发环境
- **Live Server** - 本地开发服务器

## 📁 项目结构

```
personal-website/
├── index.html          # 主HTML文件
├── app.css            # 自定义CSS样式
├── app.js             # JavaScript交互逻辑
├── README.md          # 项目说明文档
├── .gitignore         # Git忽略文件配置
├── assets/
│   ├── images/        # 图片资源目录
│   │   ├── avatar.jpg # 个人头像
│   │   └── projects/  # 项目截图
│   └── icons/         # 图标资源目录
└── docs/
    └── deployment.md  # 部署文档
```

## 🚀 功能特性

### 1. 固定导航栏
- 磨砂玻璃效果
- 平滑滚动导航
- 响应式汉堡菜单（移动端）

### 2. Hero区域
- 巨大的文字排版标题
- 淡入动画效果
- 职业标签展示
- 社交链接

### 3. 项目展示
- 响应式卡片网格布局
- 鼠标悬停3D浮动效果
- 项目分类筛选
- 技术栈标签

### 4. 技能展示
- 自动滚动的技能图标墙
- 无限循环动画
- 悬停暂停功能
- 技能分类展示

### 5. 联系表单
- 现代简约设计
- 表单验证
- 提交反馈动画
- 防重复提交机制

### 6. 页脚
- 版权信息
- 返回顶部按钮
- 社交链接

## 🎨 设计规范

### 配色方案
- **背景色**: `#0f172a` (深蓝灰)
- **文字色**: `#f1f5f9` (Slate-100)
- **主色调**: `#3b82f6` (蓝色)
- **次要色**: `#10b981` (绿色)
- **强调色**: `#8b5cf6` (紫色)

### 字体
- **主要字体**: Inter, system-ui, sans-serif
- **代码字体**: 'JetBrains Mono', monospace

### 动画
- 页面加载淡入效果
- 滚动触发动画
- 悬停交互反馈
- 平滑过渡效果

## 📱 响应式断点

- **移动端**: < 640px
- **平板**: 640px - 1024px
- **桌面端**: > 1024px

## 🔧 安装与使用

### 本地开发

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. **启动开发服务器**
   - 使用VS Code的Live Server扩展
   - 或使用Python简单HTTP服务器：
     ```bash
     python -m http.server 8000
     ```
   - 访问 `http://localhost:8000`

### 自定义配置

1. **更新个人信息**
   - 修改 `index.html` 中的个人资料
   - 更新项目数据（在 `app.js` 中）
   - 替换头像图片（`assets/images/avatar.jpg`）

2. **修改配色**
   - 在 `app.css` 中更新CSS变量
   - 或在 `index.html` 中修改Tailwind类名

3. **添加新项目**
   - 在 `app.js` 的 `projects` 数组中添加新项目
   - 准备项目截图到 `assets/images/projects/`

## 📄 文件说明

### index.html
- 网站主结构
- Tailwind CSS和Lucide Icons CDN引用
- 语义化HTML标记
- SEO优化元标签

### app.css
- 自定义动画效果
- 磨砂玻璃效果实现
- 3D浮动效果
- 响应式调整
- 打印样式优化

### app.js
- 导航栏交互
- 技能图标墙自动滚动
- 项目卡片交互
- 表单验证和提交
- 滚动动画触发
- 错误处理和性能优化

## 🚢 部署指南

### GitHub Pages
1. 将代码推送到GitHub仓库
2. 进入仓库设置 > Pages
3. 选择部署分支（通常是main）
4. 选择根目录或/docs文件夹
5. 保存后访问 `https://username.github.io/repository`

### Netlify
1. 注册Netlify账号
2. 连接GitHub仓库
3. 配置构建设置（本项目无需构建）
4. 设置自定义域名（可选）
5. 部署完成

### Vercel
1. 注册Vercel账号
2. 导入GitHub仓库
3. 框架预设选择"Other"
4. 构建命令留空
5. 输出目录设置为 `.`
6. 部署完成

## 🔒 安全考虑

1. **表单安全**
   - 前端验证
   - 防XSS攻击
   - 推荐使用EmailJS等第三方服务处理邮件

2. **性能优化**
   - 图片懒加载
   - 资源压缩
   - 缓存策略

3. **可访问性**
   - ARIA标签
   - 键盘导航支持
   - 屏幕阅读器优化

## 📈 SEO优化

- 语义化HTML结构
- 合理的标题层级
- 元标签优化
- Open Graph协议支持
- 结构化数据（可选）

## 🐛 故障排除

### 常见问题

1. **图标不显示**
   - 检查网络连接
   - 验证CDN链接是否有效
   - 检查控制台错误

2. **表单不工作**
   - 检查JavaScript控制台错误
   - 验证EmailJS配置（如果使用）
   - 检查网络请求

3. **动画不流畅**
   - 检查浏览器兼容性
   - 禁用硬件加速的扩展
   - 更新浏览器版本

### 浏览器兼容性
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看LICENSE文件了解详情

## 📞 支持

如有问题或建议，请：
1. 查看[Issues](https://github.com/yourusername/personal-website/issues)
2. 提交新的Issue
3. 或通过网站联系表单联系

## 🔄 更新日志

### v1.0.0 (2024-01-15)
- 初始版本发布
- 基础功能实现
- 响应式设计完成
- 文档完善

---

**提示**: 部署前请确保：
1. 更新个人信息和项目数据
2. 替换示例图片
3. 配置表单提交服务（如使用）
4. 测试所有功能在不同设备上的表现

祝您部署顺利！ 🚀