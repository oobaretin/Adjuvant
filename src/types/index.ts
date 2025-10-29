export interface Service {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface ContactInfo {
  address: string;
  building: string;
  hours: string;
  phone: string;
  accessibility: string;
}

export interface EmergencyInfo {
  phone: string;
  features: {
    icon: string;
    text: string;
  }[];
}

export interface SlideImage {
  id: string;
  src: string;
  alt: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}
