import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "General Medicine Patient",
      avatar: "JD",
      testimonial: "The care I received at Bulindo Medical Centre was exceptional. The staff was professional, caring, and the facilities are modern and clean. Highly recommended!",
      color: "bg-medical-green"
    },
    {
      name: "Mary Kiprotich",
      role: "Maternity Patient",
      avatar: "MK",
      testimonial: "I had my baby at Bulindo Medical Centre and the maternity care was outstanding. The doctors and nurses made the experience comfortable and safe.",
      color: "bg-trust-blue"
    },
    {
      name: "Robert Smith",
      role: "Dental Patient",
      avatar: "RS",
      testimonial: "The dental surgery department is excellent. Dr. Smith was professional and made sure I was comfortable throughout the procedure. Great facility!",
      color: "bg-dark-green"
    }
  ];

  return (
    <section className="py-20 bg-light-mint">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-professional-dark mb-6">
            What Our <span className="text-medical-green">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who have trusted us with their healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Quote className="text-medical-green text-2xl mr-2 w-6 h-6" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-bold text-professional-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
