# Mohammed Yunus - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with HTML5, CSS3, and JavaScript, featuring smooth animations and a clean, professional design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout optimized for all devices
- **Interactive Elements**:
  - Typewriter animation for name display
  - Smooth scroll animations
  - Progress bar animations for skills
  - Interactive project cards with hover effects
- **Modern UI Components**:
  - Mobile-friendly navigation with smooth transitions
  - Contact form modal with Formspree integration
  - Dynamic skill progress bars
  - Project showcase with expandable details
- **Performance Optimized**:
  - Lazy loading for images
  - Smooth animations with minimal impact
  - Optimized asset loading
- **SEO Ready**:
  - Optimized meta tags
  - Semantic HTML structure
  - Proper heading hierarchy
  - Mobile-friendly design

## 🛠️ Technologies Used

- **Frontend**:
  - HTML5 (Semantic markup)
  - CSS3 (with Tailwind CSS for utility-first styling)
  - JavaScript (Vanilla JS for interactions)
- **UI/UX**:
  - Tailwind CSS (Responsive design)
  - Google Fonts
    - Space Grotesk (Headings)
    - DM Sans (Body text)
  - Custom animations
- **Integrations**:
  - Formspree (Contact form handling)
  - Chart.js (Skills visualization)

## 🚀 Setup and Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/Yunus4600/portfolio.git
   cd portfolio
   ```

2. **Development Options**:
   - Use VS Code with Live Server extension
   - Use Python's built-in server:
     ```bash
     python -m http.server 8000
     ```
   - Use Node.js serve:
     ```bash
     npx serve
     ```

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css         # Custom CSS styles
├── images/            # Image assets
│   ├── email-assistant.jpg
│   ├── vms.png
│   └── profile_photo1.png
└── README.md          # Project documentation
```

## 🌐 Deployment

The site is optimized for deployment on various platforms:

- **GitHub Pages**
  - Perfect for personal portfolio hosting
  - Automatic builds from main branch
- **Netlify**
  - Drag and drop deployment
  - Automatic SSL certificates
- **Vercel**
  - One-click deployment
  - Excellent performance metrics

## ⚙️ Configuration

Key animations and timings can be modified through the `CONFIG` object in `script.js`:

```javascript
const CONFIG = {
  animations: {
    typing: { duration: 3, steps: 40 },
    scroll: { offset: 100, delay: 500 },
    // ... other settings
  },
};
```

## 🎯 Future Improvements

- [ ] Dark mode implementation
- [ ] Blog section integration
- [ ] Project filtering capabilities
- [ ] Language localization
- [ ] Performance analytics
- [ ] Additional project showcases
- [ ] Enhanced SEO optimization
- [ ] Automated testing setup

## 📞 Contact

- **Email**: mohammedyunus4t6@gmail.com
- **Phone**: +91 6361419024
- **Location**: Bengaluru, India
- **LinkedIn**: [Mohammed Yunus](https://www.linkedin.com/in/mohammed-yunus-4t6)
- **GitHub**: [Yunus4600](https://github.com/Yunus4600)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Mohammed Yunus
