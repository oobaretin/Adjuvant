import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-20 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About Us
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are a comprehensive medical transportation provider in Houston, Texas, offering 
                a full range of emergency and non-emergency medical transport services. From critical 
                care transport to scheduled medical appointments, our team of trained medical 
                professionals ensures the highest standard of care for every patient.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With years of experience in emergency medical services, we understand the diverse 
                needs of our community. Our modern fleet includes emergency ambulances, wheelchair-accessible 
                vehicles, and specialized critical care units, all operated by our highly trained EMTs, 
                paramedics, and medical professionals who are ready to respond 24/7.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide exceptional medical transportation services that save lives and ensure 
                    the safety and comfort of our patients during their most critical moments, while 
                    also offering reliable non-emergency transport for all healthcare needs.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                  <p className="text-gray-700">
                    We are committed to professionalism, compassion, reliability, and excellence in 
                    every aspect of our medical transportation services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
