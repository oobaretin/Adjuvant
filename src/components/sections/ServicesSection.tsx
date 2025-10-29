import { services } from '@/data/constants';
import { Ambulance, HeartPulse, Hospital } from 'lucide-react';

const iconMap = {
  ambulance: Ambulance,
  heartbeat: HeartPulse,
  hospital: Hospital,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-blue-50 rounded-full">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
