import { Button } from "@/components/ui/button";
import { CalendarCheck, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-light-mint to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-bold text-5xl lg:text-6xl text-professional-dark leading-tight mb-6">
              Your Health, <span className="text-medical-green">Our Priority</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Bulindo Medical Centre provides comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals dedicated to your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-medical-green hover:bg-dark-green text-white px-8 py-4 rounded-full text-lg h-auto">
                <CalendarCheck className="w-5 h-5 mr-3" />
                Book Appointment
              </Button>
              <Button variant="outline" className="border-2 border-medical-green text-medical-green hover:bg-medical-green hover:text-white px-8 py-4 rounded-full text-lg h-auto">
                <Phone className="w-5 h-5 mr-3" />
                Emergency Contact
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green">9</div>
                <div className="text-sm text-gray-600">Medical Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green">24/7</div>
                <div className="text-sm text-gray-600">Emergency Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green">500+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern hospital corridor" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center">
                <div className="bg-trust-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-professional-dark">Expert Doctors</div>
                  <div className="text-sm text-gray-600">Experienced Medical Team</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center">
                <div className="bg-medical-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-professional-dark">Quality Care</div>
                  <div className="text-sm text-gray-600">Certified Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
