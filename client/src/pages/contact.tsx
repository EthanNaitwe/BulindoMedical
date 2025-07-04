import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-light-mint to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-professional-dark mb-6">
            Contact <span className="text-medical-green">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Bulindo Medical Centre for appointments, inquiries, or emergency medical services. We're here to help with all your healthcare needs.
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
