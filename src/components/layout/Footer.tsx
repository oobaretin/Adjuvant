import { socialLinks, contactInfo, emergencyInfo } from '@/data/constants';
import { 
  Facebook, 
  Twitter, 
  Linkedin,
  Phone,
  MapPin,
  Clock3,
  HeartPulse
} from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Adjuvant Ambulance Transport</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Professional emergency medical transportation services in Houston, Texas. 
              Committed to saving lives and providing exceptional care 24/7.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Book Transport
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Emergency</p>
                  <a 
                    href={`tel:${emergencyInfo.phone}`}
                    className="text-white font-semibold hover:text-blue-400 transition-colors duration-200"
                  >
                    {emergencyInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Address</p>
                  <p className="text-white text-sm">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock3 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Hours</p>
                  <p className="text-white text-sm">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Services</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <HeartPulse className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartPulse className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">Licensed EMTs & Paramedics</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartPulse className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">Wheelchair Accessible</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartPulse className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">Modern Medical Equipment</span>
              </div>
            </div>
            
            {/* Book Transport CTA */}
            <div className="mt-6">
              <Link
                href="/emergency"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
              >
                Book Transport
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Adjuvant Ambulance Transport. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed by TenQdesign LLC
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/hipaa" className="text-gray-400 hover:text-white transition-colors duration-200">
                HIPAA Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
