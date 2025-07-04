import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
              alt="Dedicated medical team" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-green">10+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-4xl text-professional-dark mb-8">
              About <span className="text-medical-green">Bulindo Medical Centre</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Bulindo Medical Centre stands as a beacon of healthcare excellence, dedicated to providing comprehensive medical services with compassion and expertise. Our facility combines modern medical technology with personalized patient care.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With nine specialized departments and a team of experienced healthcare professionals, we are committed to being your trusted healthcare partner, ensuring every patient receives the highest quality medical care in a comfortable and caring environment.
            </p>

            {/* Mission Values */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-light-mint rounded-2xl">
                <div className="bg-medical-green text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-professional-dark mb-2">Compassionate Care</h3>
                <p className="text-sm text-gray-600">Patient-centered approach with empathy and understanding</p>
              </div>

              <div className="text-center p-6 bg-light-mint rounded-2xl">
                <div className="bg-trust-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-professional-dark mb-2">Medical Excellence</h3>
                <p className="text-sm text-gray-600">Highest standards of medical practice and patient safety</p>
              </div>
            </div>

            <Button className="bg-medical-green hover:bg-dark-green text-white px-8 py-4 rounded-full h-auto">
              Learn More About Us <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
