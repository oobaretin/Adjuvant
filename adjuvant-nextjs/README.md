# Adjuvant Ambulance Transport - Next.js Website

A modern, responsive 5-page website for Adjuvant Ambulance Transport, built with Next.js 14, TypeScript, and Tailwind CSS. This project converts the original HTML/CSS/JavaScript website into a scalable, maintainable multi-page React application.

## 🚀 Features

- **5-Page Website**: Home, About, Services, Emergency, and Contact pages
- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Image optimization, lazy loading, and efficient rendering
- **SEO Ready**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Component Architecture**: Modular, reusable components following best practices

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   │   └── page.tsx
│   ├── contact/           # Contact page
│   │   └── page.tsx
│   ├── emergency/         # Emergency page
│   │   └── page.tsx
│   ├── services/          # Services page
│   │   └── page.tsx
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── common/           # Shared components
│   │   ├── ErrorBoundary.tsx
│   │   └── LoadingSpinner.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/         # Reusable sections
│       └── HeroSection.tsx
├── data/                 # Static data and constants
│   └── constants.ts
└── types/               # TypeScript type definitions
    └── index.ts
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Poppins)
- **Image Optimization**: Next.js Image component
- **Performance**: Built-in Next.js optimizations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/oobaretin/Adjuvant.git
cd adjuvant-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- **Hero Section**: Image slideshow with company branding
- **Quick Overview**: Key services and features
- **Customer Reviews**: Testimonials from satisfied customers
- **Call-to-Action**: Direct links to emergency and services pages

### ℹ️ About Page (`/about`)
- **Company Mission**: Detailed company information and values
- **Mission & Values**: What drives the organization
- **Professional Team**: Information about staff and expertise

### 🚑 Services Page (`/services`)
- **Service Offerings**: Detailed list of medical transportation services
- **Why Choose Us**: Key differentiators and benefits
- **Service Features**: 24/7 availability, rapid response, expert staff, modern fleet

### 🚨 Emergency Page (`/emergency`)
- **Emergency Hotline**: Prominent display of emergency contact number
- **When to Call**: Guidelines for emergency situations
- **What to Expect**: Process and response information
- **Service Features**: Immediate response, 24/7 availability, accessibility

### 📞 Contact Page (`/contact`)
- **Contact Information**: Address, phone, hours, and accessibility info
- **Contact Form**: Interactive form for inquiries
- **Google Maps**: Embedded location map
- **Customer Reviews**: Selected testimonials

## 📱 Features Overview

### Navigation
- **Multi-Page Routing**: Next.js App Router for seamless navigation
- **Active Page Highlighting**: Dynamic navigation state
- **Mobile Menu**: Hamburger menu for mobile devices
- **Accessibility**: Keyboard navigation support

### Performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Static Generation**: Pre-rendered pages for optimal performance
- **Code Splitting**: Automatic route-based splitting

## 🎨 Design System

### Colors
- **Primary**: Blue (#007bff)
- **Secondary**: Gray (#6b7280)
- **Accent**: Red (#ef4444)
- **Background**: White/Gray-50

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Fluid typography scaling

### Spacing
- **Consistent**: Tailwind's spacing scale
- **Responsive**: Mobile-first approach
- **Accessible**: Proper touch targets

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to `src/app/page.tsx`
3. Update navigation in `src/data/constants.ts`

### Modifying Content
1. Update data in `src/data/constants.ts`
2. Modify component props as needed
3. Update TypeScript types if necessary

### Styling Changes
1. Use Tailwind classes in components
2. Add custom styles to `src/app/globals.css`
3. Create new utility classes as needed

## 📈 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **Bundle Optimization**: Tree shaking and minification
- **Caching**: Static generation where possible
- **SEO**: Meta tags and structured data

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Deploy the `out` folder to your hosting provider

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please contact:
- **Phone**: (281) 704-1077
- **Email**: [Contact through website]

---

Built with ❤️ by TenQdesign LLC