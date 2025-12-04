import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import Footer from '@/components/layout/Footer';
import { reviews } from '@/data/constants';
import { StarIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      
      {/* Quick Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Medical Transportation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency response to scheduled appointments, we provide complete medical transportation solutions for Houston, Texas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Response</h3>
              <p className="text-gray-600 text-sm">24/7 emergency medical transport with ALS/BLS support</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Critical Care</h3>
              <p className="text-gray-600 text-sm">ICU-level monitoring and specialized equipment</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled Transport</h3>
              <p className="text-gray-600 text-sm">Reliable transport for appointments and treatments</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wheelchair Accessible</h3>
              <p className="text-gray-600 text-sm">Specialized vehicles and trained assistance staff</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/emergency"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Book Transport
            </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className={`h-5 w-5 ${
                        index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-center mb-4 leading-relaxed">
                  "{review.text}"
                </blockquote>
                <div className="text-center">
                  <cite className="text-gray-600 font-medium italic">
                    - {review.name}
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}