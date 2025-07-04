import { Link } from "wouter";
import { Hospital, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  const medicalServices = [
    "General Medicine",
    "General Surgery",
    "Laboratory",
    "Dental Surgery",
    "Maternity Care",
    "Family Planning",
  ];

  return (
    <footer className="bg-professional-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-medical-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <Hospital className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Bulindo Medical Centre</h3>
                <p className="text-sm text-gray-400">Healthcare Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Providing comprehensive healthcare services with compassion, expertise, and modern medical technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-medical-green w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-medical-green w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-medical-green w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-medical-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-300 hover:text-medical-green transition-colors">Emergency</a>
              </li>
            </ul>
          </div>

          {/* Medical Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Medical Services</h4>
            <ul className="space-y-3">
              {medicalServices.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-medical-green transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="text-medical-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">0757300713</p>
                  <p className="text-gray-300">0779049342</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-medical-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <p className="text-gray-300">bulindomedicals@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="text-medical-green mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24/7 Emergency Services</p>
                  <p className="text-gray-300">Regular: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Bulindo Medical Centre. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-medical-green transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-medical-green transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-medical-green transition-colors">Patient Rights</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
