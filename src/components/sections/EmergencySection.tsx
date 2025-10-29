import { emergencyInfo } from '@/data/constants';
import { Phone, Ambulance, Clock, ShieldCheck } from 'lucide-react';

const iconMap = {
  'phone-volume': Phone,
  ambulance: Ambulance,
  clock: Clock,
  wheelchair: ShieldCheck,
};

export default function EmergencySection() {
  return (
    <section id="emergency" className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Emergency Contact
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            {/* Emergency Number */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-full">
                  <Phone className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                24/7 Emergency Hotline
              </h3>
              <a
                href={`tel:${emergencyInfo.phone}`}
                className="text-4xl md:text-5xl font-bold text-red-600 hover:text-red-700 transition-colors duration-200"
              >
                {emergencyInfo.phone}
              </a>
            </div>

            {/* Emergency Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyInfo.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="p-3 bg-blue-50 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-medium">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
