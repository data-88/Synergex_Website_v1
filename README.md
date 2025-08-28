# Synergex Website

A modern, responsive website for Synergex — a universal systems-of-systems meta language (USSML) hosted at synergex.org.

## 🌟 Features

- **Modern Design**: Clean, minimalist, academic yet futuristic aesthetic
- **Responsive**: Mobile, tablet, and desktop optimized
- **Interactive**: Hover tooltips on Synergex symbols, live editor with Mermaid.js
- **Comprehensive**: 8 main pages covering all aspects of Synergex
- **SEO Optimized**: Full metadata, Open Graph, and accessibility features
- **Vercel Ready**: Optimized for deployment with zero config issues

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Diagrams**: Mermaid.js integration
- **Fonts**: Inter (UI), Fira Code (code blocks)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
synergex-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page
│   ├── syntax/            # Syntax guide page
│   ├── examples/          # Examples page
│   ├── learn/             # Learning path page
│   ├── tools/             # Tools page
│   ├── community/         # Community page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── Navbar.js          # Navigation component
│   ├── Footer.js          # Footer component
│   ├── InteractivePreview.js # Interactive Synergex preview
│   ├── SyntaxAccordion.js # Syntax section accordions
│   ├── LiveEditor.js      # Live editor with Mermaid.js
│   └── ExampleCard.js     # Example display cards
├── public/                # Static assets
│   ├── favicon.ico        # Site favicon
│   └── og-image.png       # Open Graph image
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
- **Background**: `#0d1b2a` (deep navy)
- **Text**: `#e0e1dd` (light gray)
- **Accent**: `#00a896` (teal)
- **Code**: `#f77f00` (orange)

### Typography
- **UI Font**: Inter (Google Fonts)
- **Code Font**: Fira Code (Google Fonts)

### Components
- **Buttons**: Primary and secondary button styles
- **Cards**: Hover effects and borders
- **Code Blocks**: Styled with custom Synergex theme
- **Tooltips**: Interactive hover information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/synergex/website.git
   cd synergex-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Pages Overview

### 1. Home (`/`)
- Hero section with tagline
- Interactive preview of Synergex expressions
- Three-column grid explaining core concepts
- Call-to-action sections

### 2. Syntax Guide (`/syntax`)
- Complete Synergex v1.1 syntax reference
- Expandable accordions for each section
- Live editor with Mermaid.js integration
- Interactive symbol tooltips

### 3. Examples (`/examples`)
- Real-world Synergex models
- Climate systems, banking defense, AI alignment
- Interactive diagrams with export functionality
- Complexity levels and domain categorization

### 4. Learn (`/learn`)
- Structured learning path (Level 1-4)
- Progressive difficulty from beginner to expert
- Lesson previews and duration estimates
- Additional learning resources

### 5. Tools (`/tools`)
- Synergex tool ecosystem
- Parser, visualizer, validator, kernel matcher
- GitHub links and development status
- Live editor integration

### 6. Community (`/community`)
- Community channels (Discord, GitHub, Reddit)
- Upcoming events and workshops
- Contribution guidelines
- Community principles

### 7. About (`/about`)
- Synergex mission and vision
- Core principles and research areas
- Creator information
- Open source license details

### 8. Contact (`/contact`)
- Contact form with validation
- Direct email addresses
- Social media links
- FAQ section

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `app/`
2. Add `page.js` with proper metadata
3. Update navigation in `components/Navbar.js`

### Modifying Styles
- Edit `tailwind.config.js` for theme customization
- Modify `app/globals.css` for custom CSS
- Use Tailwind utility classes for component styling

### Adding Components
- Create new components in `components/` directory
- Follow the established naming conventions
- Use the design system colors and typography

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with `git push`

### Other Platforms
The site is built with standard Next.js and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Node.js

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## 🔍 SEO Features

- Comprehensive metadata for all pages
- Open Graph and Twitter Card support
- Structured data markup
- Optimized for search engines
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the Creative Commons Attribution 4.0 International License.

## 🆘 Support

- **Documentation**: [https://synergex.org/syntax](https://synergex.org/syntax)
- **Community**: [https://discord.gg/synergex](https://discord.gg/synergex)
- **Issues**: [GitHub Issues](https://github.com/synergex/website/issues)
- **Email**: hello@synergex.org

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Mermaid.js for diagram rendering
- The Synergex community for inspiration and feedback

---

**Built with ❤️ by the Synergex Team**

*"To model reality, we must speak its grammar."*

