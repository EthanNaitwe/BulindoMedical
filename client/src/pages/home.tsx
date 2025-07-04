import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-light-mint">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bold text-4xl text-professional-dark mb-8">
              Why Choose <span className="text-medical-green">Bulindo Medical Centre</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-medical-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-professional-dark mb-2">Expert Medical Professionals</h3>
                  <p className="text-gray-700">Our team of experienced doctors and healthcare professionals are committed to providing exceptional care.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-medical-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-professional-dark mb-2">Modern Medical Equipment</h3>
                  <p className="text-gray-700">State-of-the-art medical technology ensures accurate diagnosis and effective treatment options.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-medical-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-professional-dark mb-2">24/7 Emergency Services</h3>
                  <p className="text-gray-700">Round-the-clock emergency care ensures you receive immediate medical attention when needed.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-medical-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-professional-dark mb-2">Comprehensive Care</h3>
                  <p className="text-gray-700">Nine specialized departments under one roof for complete healthcare solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Medical professionals consultation" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Advanced medical equipment" 
              className="rounded-2xl shadow-lg w-full h-auto mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Modern hospital patient room" 
              className="rounded-2xl shadow-lg w-full h-auto -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Healthcare team collaboration" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-medical-green hover:bg-dark-green text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      size="icon"
    >
      <ArrowUp className="w-6 h-6" />
    </Button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
