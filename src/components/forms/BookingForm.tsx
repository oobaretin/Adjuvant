'use client';

import { useState, FormEvent } from 'react';

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      phone: formData.get('phone'),
      email: formData.get('email') || '',
      pickupLocation: formData.get('pickupLocation'),
      destination: formData.get('destination'),
      transportDate: formData.get('transportDate'),
      transportTime: formData.get('transportTime'),
      serviceType: formData.get('serviceType'),
      specialRequirements: formData.get('specialRequirements') || '',
    };

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your transport request has been submitted. We will contact you shortly to confirm your booking.',
        });
        (e.target as HTMLFormElement).reset();
      } else {
        const errorMsg = result.details || result.error || 'Failed to submit booking request. Please try again or call us directly.';
        setSubmitStatus({
          type: 'error',
          message: errorMsg,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Request Transport
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
              placeholder="John"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
              placeholder="Doe"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
              placeholder="(281) 123-4567"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-2">
            Pickup Location *
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
            placeholder="123 Main St, Houston, TX"
            required
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
            Destination *
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
            placeholder="Houston Methodist Hospital"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="transportDate" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date *
            </label>
            <input
              type="date"
              id="transportDate"
              name="transportDate"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="transportTime" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Time *
            </label>
            <input
              type="time"
              id="transportTime"
              name="transportTime"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
            Service Type *
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
            required
            disabled={isSubmitting}
          >
            <option value="">Select service type</option>
            <option value="emergency">Emergency Transport</option>
            <option value="scheduled">Scheduled Transport</option>
            <option value="hospital-transfer">Hospital Transfer</option>
            <option value="discharge">Discharge Transport</option>
            <option value="dialysis">Dialysis Transport</option>
            <option value="appointment">Medical Appointment</option>
          </select>
        </div>

        <div>
          <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-2">
            Special Requirements
          </label>
          <textarea
            id="specialRequirements"
            name="specialRequirements"
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation resize-none"
            placeholder="Wheelchair accessible, oxygen required, etc."
            disabled={isSubmitting}
          ></textarea>
        </div>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 sm:py-4 px-6 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 touch-manipulation min-h-[48px] text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Request Transport'}
        </button>
      </form>
    </div>
  );
}

