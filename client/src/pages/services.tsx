import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Users, Smile, FlaskConical, Radiation, Pill, Scissors, Heart, UserCheck } from "lucide-react";

export default function Services() {
  const allServices = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary healthcare services including consultations, health screenings, preventive care, and treatment of common illnesses. Our general practitioners provide personalized care for patients of all ages.",
      features: ["Health consultations", "Preventive care", "Health screenings", "Chronic disease management"],
      color: "bg-medical-green"
    },
    {
      icon: Scissors,
      title: "General Surgery",
      description: "Advanced surgical procedures performed by experienced surgeons using modern techniques and equipment. We specialize in both emergency and elective surgical procedures.",
      features: ["Emergency surgery", "Elective procedures", "Minimally invasive surgery", "Post-operative care"],
      color: "bg-trust-blue"
    },
    {
      icon: FlaskConical,
      title: "Laboratory Services",
      description: "State-of-the-art diagnostic testing facility providing accurate results with quick turnaround times. Our lab offers comprehensive testing services for various medical conditions.",
      features: ["Blood tests", "Urine analysis", "Microscopy", "Rapid diagnostic tests"],
      color: "bg-medical-green"
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "Full-service pharmacy providing prescription medications, over-the-counter drugs, and health consultations. Our pharmacists ensure proper medication management.",
      features: ["Prescription medications", "OTC drugs", "Medication counseling", "Drug interactions check"],
      color: "bg-dark-green"
    },
    {
      icon: Smile,
      title: "Dental Surgery",
      description: "Complete dental care including routine cleanings, oral surgery, and cosmetic dentistry. Our dental team provides comprehensive oral health services.",
      features: ["Dental cleanings", "Tooth extractions", "Oral surgery", "Preventive dentistry"],
      color: "bg-trust-blue"
    },
    {
      icon: Users,
      title: "Maternity & Antenatal Care",
      description: "Complete maternal healthcare from pregnancy through delivery with experienced obstetric care. We provide comprehensive support for expecting mothers.",
      features: ["Prenatal checkups", "Delivery services", "Postnatal care", "Breastfeeding support"],
      color: "bg-medical-green"
    },
    {
      icon: Heart,
      title: "Family Planning",
      description: "Comprehensive family planning services including contraceptive counseling, reproductive health education, and fertility guidance for couples.",
      features: ["Contraceptive counseling", "Fertility guidance", "Reproductive health", "Family planning education"],
      color: "bg-trust-blue"
    },
    {
      icon: Radiation,
      title: "Radiology",
      description: "Advanced imaging services including X-rays, ultrasounds, and diagnostic imaging using modern equipment for accurate diagnoses.",
      features: ["X-ray imaging", "Ultrasound scans", "Diagnostic imaging", "Image interpretation"],
      color: "bg-dark-green"
    },
    {
      icon: UserCheck,
      title: "Specialist Clinics",
      description: "Specialized medical consultations and treatments by expert physicians in various medical specialties for complex health conditions.",
      features: ["Cardiology", "Dermatology", "Orthopedics", "Internal medicine"],
      color: "bg-medical-green"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-mint to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-professional-dark mb-6">
            Our <span className="text-medical-green">Medical Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services across 9 specialized departments, ensuring all your medical needs are met with professional excellence and compassionate care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl text-professional-dark mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-professional-dark mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-medical-green rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="border-medical-green text-medical-green hover:bg-medical-green hover:text-white">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-mint">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-4xl text-professional-dark mb-6">
            Need Medical <span className="text-medical-green">Assistance?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our medical professionals are ready to help you. Contact us today to schedule an appointment or for emergency services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-medical-green hover:bg-dark-green text-white px-8 py-4 rounded-full text-lg h-auto">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-medical-green text-medical-green hover:bg-medical-green hover:text-white px-8 py-4 rounded-full text-lg h-auto">
              Emergency Contact
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
