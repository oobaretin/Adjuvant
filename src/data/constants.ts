// Navigation items
export const navigationItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'book-transport', label: 'Book Transport', href: '/emergency' },
  { id: 'contact', label: 'Contact', href: '/contact' },
] as const;

// Services data
export const services = [
  {
    id: 'emergency-transport',
    title: 'Emergency Transport',
    icon: 'ambulance',
    description: '24/7 emergency medical transportation with trained professionals'
  },
  {
    id: 'medical-support',
    title: 'Medical Support',
    icon: 'heartbeat',
    description: 'Comprehensive medical support during transport'
  },
  {
    id: 'hospital-transfer',
    title: 'Hospital Transfer',
    icon: 'hospital',
    description: 'Safe and reliable hospital-to-hospital transfers'
  }
] as const;

// Customer reviews
export const reviews = [
  {
    id: 'claudia-arrindel',
    name: 'Claudia Arrindel',
    rating: 5,
    text: 'Outstanding service with very caring staff. They made our transport comfortable and stress-free. We couldn\'t be more grateful for their professionalism.'
  },
  {
    id: 'deandre-brown',
    name: 'Deandre Brown',
    rating: 5,
    text: 'The EMTs were incredibly skilled and compassionate. They arrived promptly and took excellent care of my mother during her transfer. Thank you for your exceptional service!'
  },
  {
    id: 'lyons-wade',
    name: 'Lyons Wade',
    rating: 5,
    text: 'Reliable, professional, and truly caring. The team went above and beyond to ensure a smooth and comfortable transport. Would highly recommend their services.'
  }
] as const;

// Contact information
export const contactInfo = {
  address: '6776 Southwest Fwy # 532, Houston, TX 77074',
  building: 'Located in: Southwest Atrium Offices Ltd',
  hours: 'Open 24 hours',
  phone: '979-633-8437',
  accessibility: 'Wheelchair accessible'
} as const;

// Emergency information
export const emergencyInfo = {
  phone: '979-633-8437',
  features: [
    { icon: 'ambulance', text: 'Immediate Response Available' },
    { icon: 'clock', text: '24/7 Service' },
    { icon: 'wheelchair', text: 'Wheelchair Accessible Transport' }
  ]
} as const;

// Slide images for hero section
export const slideImages = [
  { id: 'slide-1', src: '/attached_assets/IMG_3381.jpeg', alt: 'Ambulance service vehicle' },
  { id: 'slide-2', src: '/attached_assets/IMG_3384.jpeg', alt: 'Medical transport equipment' },
  { id: 'slide-3', src: '/attached_assets/IMG_3379.jpeg', alt: 'Professional medical team' },
  { id: 'slide-4', src: '/attached_assets/IMG_3382.jpeg', alt: 'Emergency response vehicle' },
  { id: 'slide-5', src: '/attached_assets/IMG_3378.jpeg', alt: 'Medical transport service' },
  { id: 'slide-6', src: '/attached_assets/IMG_3383.jpeg', alt: 'Ambulance transport' },
  { id: 'slide-7', src: '/attached_assets/IMG_3380.jpeg', alt: 'Emergency medical services' }
] as const;

// Social media links
export const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Twitter', href: '#', icon: 'twitter' },
  { name: 'LinkedIn', href: '#', icon: 'linkedin' }
] as const;
