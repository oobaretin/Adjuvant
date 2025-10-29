import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Ambulance, 
  HeartPulse, 
  ShieldCheck,
  Clock,
  Stethoscope,
  UserCheck,
  Accessibility,
  Calendar,
  Home,
  Star,
  CheckCircle,
  Truck
} from 'lucide-react';

const serviceGroups = [
  {
    id: 'emergency',
    title: 'Emergency Services',
    description: '24/7 emergency medical transport with fully equipped ambulances and certified paramedics',
    icon: Ambulance,
    color: 'red',
    services: [
      {
        id: 'emergency-response',
        title: 'Emergency Response',
        description: '24/7 emergency medical transport with fully equipped ambulances, advanced life support, and certified paramedics.',
        icon: Ambulance,
        color: 'red',
        features: [
          'Advanced Life Support (ALS)',
          'Basic Life Support (BLS)',
          'Cardiac monitoring',
          'Oxygen therapy',
          'IV therapy'
        ]
      },
      {
        id: 'critical-care',
        title: 'Critical Care Transport',
        description: 'Specialized transport for patients requiring intensive care during transportation between medical facilities.',
        icon: HeartPulse,
        color: 'blue',
        features: [
          'ICU-level monitoring',
          'Ventilator support',
          'Medication management',
          'Specialized equipment',
          'Critical care nurses'
        ]
      },
      {
        id: 'trauma',
        title: 'Trauma Transport',
        description: 'Rapid response for trauma patients with specialized equipment and highly trained medical personnel.',
        icon: ShieldCheck,
        color: 'orange',
        features: [
          'Trauma assessment',
          'Spinal immobilization',
          'Bleeding control',
          'Pain management',
          'Rapid transport protocols'
        ]
      }
    ]
  },
  {
    id: 'non-emergency',
    title: 'Non-Emergency Services',
    description: 'Safe, comfortable, and reliable transportation for scheduled medical appointments and healthcare needs',
    icon: Stethoscope,
    color: 'green',
    services: [
      {
        id: 'medical-appointments',
        title: 'Medical Appointments',
        description: 'Reliable transportation to and from doctor visits, specialist appointments, and routine medical check-ups.',
        icon: Stethoscope,
        color: 'green',
        features: [
          'Doctor appointments',
          'Specialist visits',
          'Routine check-ups',
          'Follow-up appointments',
          'Medical consultations'
        ]
      },
      {
        id: 'scheduled-transports',
        title: 'Scheduled Transports',
        description: 'Pre-scheduled medical transportation for planned procedures, treatments, and appointments with guaranteed pickup times.',
        icon: Calendar,
        color: 'teal',
        features: [
          'Surgery transport',
          'Chemotherapy appointments',
          'Physical therapy sessions',
          'Diagnostic procedures',
          'Rehabilitation visits'
        ]
      },
      {
        id: 'discharge-transport',
        title: 'Discharge Transport',
        description: 'Safe transport home from hospitals, rehabilitation centers, and other medical facilities following treatment or procedures.',
        icon: Home,
        color: 'pink',
        features: [
          'Hospital discharge',
          'Rehabilitation discharge',
          'Post-surgery transport',
          'Nursing home transport',
          'Home care setup'
        ]
      }
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    description: 'Additional services to meet specific medical transportation needs and ensure comprehensive care',
    icon: Accessibility,
    color: 'purple',
    services: [
      {
        id: 'dialysis',
        title: 'Dialysis Transport',
        description: 'Specialized transport for dialysis patients with trained staff who understand the unique needs of renal care.',
        icon: Clock,
        color: 'purple',
        features: [
          'Regular dialysis appointments',
          'Comfortable seating',
          'Punctual service',
          'Specialized equipment',
          'Experienced drivers'
        ]
      },
      {
        id: 'wheelchair',
        title: 'Wheelchair Transport',
        description: 'Accessible transportation for wheelchair users with properly equipped vehicles and trained assistance staff.',
        icon: Accessibility,
        color: 'indigo',
        features: [
          'Wheelchair-accessible vehicles',
          'Lift assistance',
          'Secure wheelchair restraints',
          'Trained staff',
          'Comfortable seating'
        ]
      }
    ]
  }
];

const whyChooseUs = [
  {
    title: '24/7 Availability',
    description: 'Round-the-clock service for emergencies and scheduled transports',
    icon: Clock
  },
  {
    title: 'Licensed & Insured',
    description: 'Fully licensed medical transport with comprehensive insurance coverage',
    icon: ShieldCheck
  },
  {
    title: 'Certified Staff',
    description: 'Trained paramedics, EMTs, and medical professionals',
    icon: UserCheck
  },
  {
    title: 'Modern Fleet',
    description: 'Well-maintained vehicles with latest medical equipment',
    icon: Truck
  }
];

const getColorClasses = (color: string) => {
  const colorMap = {
    red: 'bg-red-50 text-red-600',
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    indigo: 'bg-indigo-50 text-indigo-600',
    teal: 'bg-teal-50 text-teal-600',
    pink: 'bg-pink-50 text-pink-600'
  };
  return colorMap[color as keyof typeof colorMap] || 'bg-blue-50 text-blue-600';
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Medical Transport Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical transportation solutions for every healthcare need, from emergency response to scheduled appointments
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceGroups.map((group) => {
              const GroupIconComponent = group.icon;
              const groupColorClasses = getColorClasses(group.color);
              
              return (
                <div key={group.id} className="space-y-8">
                  {/* Group Header */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-full ${groupColorClasses}`}>
                        <GroupIconComponent className="h-10 w-10" />
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {group.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                      {group.description}
                    </p>
                  </div>

                  {/* Services in Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.services.map((service) => {
                      const IconComponent = service.icon;
                      const colorClasses = getColorClasses(service.color);
                      
                      return (
                        <div
                          key={service.id}
                          className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-full ${colorClasses}`}>
                              <IconComponent className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 ml-3">
                              {service.title}
                            </h3>
                          </div>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                            {service.description}
                          </p>
                          
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-xs text-gray-600">
                                <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality medical transportation with features that set us apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full">
                      <IconComponent className="h-10 w-10 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Transport?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to schedule your medical transportation service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/emergency"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Book Transport
            </a>
            <a
              href="tel:979-633-8437"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 touch-manipulation min-h-[48px] flex items-center justify-center"
            >
              Call 979-633-8437
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}