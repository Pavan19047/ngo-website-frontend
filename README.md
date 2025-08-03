# 🌍 NGO Website - Making a Difference Together

<div align="center">
  <img src="public/placeholder-logo.png" alt="NGO Logo" width="120" height="120" />
  
  <p align="center">
    <strong>A modern, responsive website for non-profit organizations</strong>
    <br />
    Built with Next.js, TypeScript, and Tailwind CSS
  </p>

  <p align="center">
    <a href="#-demo">Demo</a> •
    <a href="#-features">Features</a> •
    <a href="#-installation">Installation</a> •
    <a href="#-usage">Usage</a> •
    <a href="#-contributing">Contributing</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react" alt="React" />
  </p>
</div>

---

## 🚀 Demo

Visit our live demo: [NGO Website Demo](#) *(Replace with your deployed URL)*

## ✨ Features

### 🎯 Core Features
- **Modern Design**: Clean, professional, and mobile-responsive design
- **Volunteer Management**: Easy volunteer registration and management system
- **Mission Showcase**: Dedicated pages to highlight your organization's mission and impact
- **Dark/Light Theme**: Built-in theme switching with next-themes
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

### 🛠️ Technical Features
- **TypeScript**: Fully typed for better development experience
- **Component Library**: Comprehensive UI components with Radix UI
- **Form Handling**: Robust form validation with React Hook Form and Zod
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Icon System**: Beautiful icons with Lucide React
- **Animation**: Smooth animations with Tailwind CSS animations

### 📱 Pages Included
- **Homepage**: Hero section with call-to-actions and mission overview
- **About**: Detailed information about the organization
- **Volunteer**: Registration and information for volunteers
- **Contact**: Contact forms and information

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.2.4](https://nextjs.org/) - React framework for production
- **Language**: [TypeScript 5.9.2](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4.1.11](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) - Form handling and validation

### Development Tools
- **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
- **Linting**: ESLint with Next.js configuration
- **Fonts**: [Geist](https://vercel.com/font) - Modern font family by Vercel

## 📦 Installation

### Prerequisites
- Node.js 18.0 or later
- pnpm (recommended) or npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pavan19047/ngo-website-frontend.git
   cd ngo-website-frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Usage

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

### Project Structure

```
ngo-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   └── volunteer/         # Volunteer page
├── components/            # Reusable components
│   ├── ui/                # UI components (Radix UI based)
│   ├── navigation.tsx     # Navigation component
│   ├── footer.tsx         # Footer component
│   └── theme-provider.tsx # Theme provider
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional stylesheets
```

### Customization

1. **Update Branding**
   - Replace logo in `public/placeholder-logo.png`
   - Update organization name and content in page components
   - Modify color scheme in `tailwind.config.js`

2. **Add New Pages**
   - Create new folders in the `app/` directory
   - Follow the existing page structure

3. **Customize Components**
   - Modify existing components in `components/`
   - Create new reusable components as needed

## 🎨 Design System

The project uses a consistent design system based on:

- **Colors**: Blue and purple gradient theme with dark/light mode support
- **Typography**: Geist font family with semantic sizing
- **Spacing**: Tailwind's consistent spacing scale
- **Components**: Accessible components built with Radix UI primitives

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use semantic commit messages
- Ensure responsive design
- Test across different devices and browsers
- Follow accessibility guidelines

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: [Pavan19047](https://github.com/Pavan19047)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Lucide](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment platform

## 📞 Support

If you have any questions or need help:

- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/Pavan19047/ngo-website-frontend/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/Pavan19047/ngo-website-frontend/discussions)

---

<div align="center">
  <p>Made with ❤️ for making a difference in the world</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
