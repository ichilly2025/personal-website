# Personal Website - Senior Full Stack Engineer

## Overview

A minimalist, high-end single-page personal website designed for senior full stack engineers. This website features a dark theme, responsive design, 3D animations, and modern interactive elements to showcase professional expertise in an elegant manner.

## Live Demo

[Add your live demo URL here]

## Features

### 🎨 Design & UI
- **Dark Theme**: Sophisticated dark color scheme (#0f172a background) with slate-100 text and blue (#3b82f6) accents
- **Responsive Design**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Glassmorphism Effects**: Frosted glass navigation bar and UI elements
- **Modern Typography**: Clean, professional typography with proper hierarchy

### ✨ Interactive Elements
- **3D Card Hover Effects**: Projects section cards with 3D floating animations on hover
- **Auto-scrolling Tech Stack**: Animated skill icon wall with automatic scrolling
- **Smooth Animations**: Fade-in effects, smooth transitions, and scroll-based animations
- **Form Validation**: Modern contact form with real-time validation

### 📱 Technical Features
- **Single Page Application**: All content on a single page with smooth scrolling navigation
- **Performance Optimized**: Minimal dependencies, optimized assets, and efficient code
- **Accessibility**: Semantic HTML, proper ARIA labels, and keyboard navigation support
- **Cross-browser Compatibility**: Tested on modern browsers

## Tech Stack

### Core Technologies
- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Custom animations, transitions, and Tailwind CSS extensions
- **Vanilla JavaScript**: No frameworks, pure JavaScript for optimal performance

### Libraries & Tools
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Lucide Icons**: Beautiful & consistent icon toolkit (via CDN)
- **Vite**: Build tool for development (optional)

### Development Tools
- **Git**: Version control
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting

## Project Structure

```
personal-website/
├── index.html              # Main HTML file
├── app.css                 # Custom CSS with animations
├── app.js                  # JavaScript interactions
├── README.md               # This documentation
├── .gitignore              # Git ignore file
├── site.webmanifest        # PWA manifest
└── assets/
    ├── images/
    │   ├── avatar.jpg      # Profile picture
    │   ├── project1.jpg    # Project 1 screenshot
    │   ├── project2.jpg    # Project 2 screenshot
    │   └── project3.jpg    # Project 3 screenshot
    └── favicon/
        ├── favicon.ico
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── apple-touch-icon.png
        ├── android-chrome-192x192.png
        └── android-chrome-512x512.png
```

## Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Git (for version control)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-website.git
   cd personal-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     ```

3. **Development server (optional)**
   ```bash
   # Install dependencies (if using build tools)
   npm install
   
   # Start development server
   npm run dev
   ```

## Customization

### Personal Information
1. **Profile Information**: Update personal details in `index.html`
   - Name, title, bio
   - Social media links
   - Contact information

2. **Projects**: Replace project details in `index.html`
   - Project titles and descriptions
   - Project images in `assets/images/`
   - Project links and technologies

3. **Skills**: Update tech stack in `index.html`
   - Add/remove skill icons
   - Update skill names and proficiency levels

### Styling
1. **Colors**: Modify color scheme in `app.css`
   - Primary colors in CSS variables
   - Accent colors and gradients

2. **Animations**: Adjust animation parameters in `app.css`
   - Timing and easing functions
   - 3D effect intensities
   - Scroll animation thresholds

### Images & Assets
1. **Profile Picture**: Replace `assets/images/avatar.jpg`
   - Recommended size: 400x400px
   - Format: JPG or WebP

2. **Project Images**: Replace project screenshots
   - Recommended size: 800x600px
   - Format: JPG or WebP

3. **Favicons**: Generate new favicons using tools like:
   - [Favicon Generator](https://realfavicongenerator.net/)
   - [Favicon.io](https://favicon.io/)

## Deployment

### Static Hosting Options

1. **GitHub Pages**
   ```bash
   # Push to GitHub repository
   git push origin main
   
   # Enable GitHub Pages in repository settings
   # Set source to main branch
   ```

2. **Netlify**
   - Drag and drop the folder to Netlify
   - Or connect GitHub repository for continuous deployment

3. **Vercel**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

4. **AWS S3 + CloudFront**
   - Upload files to S3 bucket
   - Configure CloudFront distribution
   - Set up custom domain (optional)

### Build Optimization (Optional)

For production deployment, consider:
- Minifying CSS and JavaScript
- Optimizing images with compression
- Adding cache headers
- Implementing lazy loading

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Opera 47+

## Performance

### Lighthouse Scores
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization Techniques
- Lazy loading for images
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Proper asset caching

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Screen reader compatibility

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for the beautiful icon set
- Inspiration from modern portfolio designs and developer communities

## Support

For support, email [your-email@example.com] or create an issue in the GitHub repository.

---

**Built with ❤️ by [Your Name]**