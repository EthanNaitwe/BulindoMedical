import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Award, Target, Clock } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, respect, and understanding, ensuring comfort throughout their healthcare journey."
    },
    {
      icon: Shield,
      title: "Medical Excellence",
      description: "We maintain the highest standards of medical practice, continuously improving our services and staying current with medical advances."
    },
    {
      icon: Users,
      title: "Patient-Centered Approach",
      description: "Our patients are at the center of everything we do. We listen, understand, and tailor our care to meet individual needs."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We are committed to delivering quality healthcare services through continuous monitoring and improvement of our processes."
    }
  ];

  const stats = [
    { number: "10+", label: "Years of Service" },
    { number: "9", label: "Medical Departments" },
    { number: "500+", label: "Patients Served" },
    { number: "24/7", label: "Emergency Care" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-mint to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-professional-dark mb-6">
            About <span className="text-medical-green">Bulindo Medical Centre</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services with compassion, expertise, and modern medical technology for over a decade.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-bold text-4xl text-professional-dark mb-8">
                Our <span className="text-medical-green">Story</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Bulindo Medical Centre was established with a vision to provide comprehensive, quality healthcare services to our community. For over a decade, we have been committed to delivering exceptional medical care that combines modern technology with the human touch.
                </p>
                
                <p>
                  Our facility houses nine specialized departments, each staffed by experienced healthcare professionals who are passionate about patient care. From general medicine to specialized surgical procedures, we offer a complete range of medical services under one roof.
                </p>
                
                <p>
                  We believe that healthcare is not just about treating illness, but about promoting wellness, preventing disease, and supporting our patients through every stage of their health journey. This philosophy guides everything we do at Bulindo Medical Centre.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="bg-medical-green hover:bg-dark-green text-white px-8 py-4 rounded-full h-auto">
                  Contact Us <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
                alt="Bulindo Medical Centre facility" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-medical-green">Excellence</div>
                  <div className="text-sm text-gray-600">in Healthcare</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light-mint">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-medical-green mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl text-professional-dark mb-6">
              Our <span className="text-medical-green">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide our approach to healthcare and define who we are as a medical institution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex items-start p-8 bg-light-mint rounded-2xl">
                  <div className="bg-medical-green text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-professional-dark mb-3">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-professional-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="text-center lg:text-left">
              <div className="bg-medical-green text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-3xl mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To provide comprehensive, quality healthcare services with compassion and excellence, ensuring every patient receives personalized care that promotes healing, wellness, and dignity.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <div className="bg-trust-blue text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-3xl mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the leading healthcare provider in our community, recognized for medical excellence, innovative care, and our commitment to improving the health and well-being of all those we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-mint">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bold text-4xl text-professional-dark mb-6">
            Ready to Experience <span className="text-medical-green">Quality Healthcare?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust Bulindo Medical Centre for their healthcare needs. Schedule an appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-medical-green hover:bg-dark-green text-white px-8 py-4 rounded-full text-lg h-auto">
              Book Appointment
            </Button>
            <Button variant="outline" className="border-medical-green text-medical-green hover:bg-medical-green hover:text-white px-8 py-4 rounded-full text-lg h-auto">
              <Clock className="w-5 h-5 mr-3" />
              Emergency Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
