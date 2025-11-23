import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      business: "La Cocina Food Truck",
      location: "Austin, TX",
      rating: 5,
      quote:
        "SnapTrack paid for itself in 4 days. I was throwing away $400-500 worth of produce every week. Now I catch everything before it expires. Game changer.",
      savings: "$1,800/month saved",
    },
    {
      name: "James Chen",
      business: "Wok on Wheels",
      location: "Portland, OR",
      rating: 5,
      quote:
        "I'm not tech-savvy, but this was so easy. Just point and shoot. The alerts saved me from using expired chicken last week—could've been a disaster.",
      savings: "$2,100/month saved",
    },
    {
      name: "Sarah Johnson",
      business: "Sweet Street Bakery Truck",
      location: "Denver, CO",
      rating: 5,
      quote:
        "The predictive ordering is incredible. It tells me exactly how much flour, eggs, and butter to order based on my patterns. No more over-ordering.",
      savings: "$950/month saved",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Food Truck{" "}
            <span className="text-primary-600">Operators</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real operators, real savings, real results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-6">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600 mb-3">
                  {testimonial.business} • {testimonial.location}
                </p>
                <div className="inline-flex items-center px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-semibold">
                  {testimonial.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg text-gray-900 font-semibold">
            4.9/5 average rating
          </p>
          <p className="text-gray-600">Based on 500+ reviews</p>
        </div>
      </div>
    </section>
  );
}
