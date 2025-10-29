import { reviews } from '@/data/constants';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`h-6 w-6 ${
                      index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 text-center mb-6 leading-relaxed">
                "{review.text}"
              </blockquote>

              {/* Reviewer Name */}
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
  );
}
