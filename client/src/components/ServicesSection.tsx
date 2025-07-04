import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Users, Smile, FlaskConical, Radiation, Pill } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary healthcare services including consultations, health screenings, and preventive care.",
      color: "bg-medical-green"
    },
    {
      icon: Users,
      title: "Maternity & Antenatal",
      description: "Complete maternal healthcare from pregnancy through delivery with experienced obstetric care.",
      color: "bg-trust-blue"
    },
    {
      icon: Smile,
      title: "Dental Surgery",
      description: "Complete dental care including routine cleanings, oral surgery, and cosmetic dentistry.",
      color: "bg-dark-green"
    },
    {
      icon: FlaskConical,
      title: "Laboratory Services",
      description: "State-of-the-art diagnostic testing with accurate results and quick turnaround times.",
      color: "bg-medical-green"
    },
    {
      icon: Radiation,
      title: "Radiology",
      description: "Advanced imaging services including X-rays, ultrasounds, and diagnostic imaging.",
      color: "bg-trust-blue"
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "Full-service pharmacy with prescription medications and health consultations.",
      color: "bg-dark-green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-professional-dark mb-6">
            Our <span className="text-medical-green">Medical Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services across 9 specialized departments, ensuring all your medical needs are met under one roof.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-light-mint rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-2xl text-professional-dark mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <a href="#" className="text-medical-green font-semibold hover:text-dark-green transition-colors">
                  Learn More <ArrowRight className="inline w-4 h-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>

        {/* All Services Button */}
        <div className="text-center">
          <Button className="bg-medical-green hover:bg-dark-green text-white px-8 py-4 rounded-full text-lg h-auto">
            View All 9 Departments <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}
