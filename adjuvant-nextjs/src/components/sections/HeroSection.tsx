export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />
        {/* Subtle dots pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
          Welcome to Adjuvant Ambulance Transport
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal max-w-4xl mx-auto drop-shadow-lg leading-relaxed mb-6 sm:mb-8 px-2">
          Comprehensive Medical Transportation Services - Emergency Response, Critical Care, Scheduled Transport & More in Houston, Texas
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-2">
          <a
            href="/emergency"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl touch-manipulation min-h-[48px] flex items-center justify-center"
          >
            Book Transport
          </a>
          <a
            href="/services"
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 active:bg-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 backdrop-blur-sm border border-white/30 touch-manipulation min-h-[48px] flex items-center justify-center"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
