import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, Clock, Hospital } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "General Medicine",
    "General Surgery",
    "Laboratory",
    "Pharmacy",
    "Dental Surgery",
    "Maternity & Antenatal",
    "Family Planning",
    "Radiology",
    "Specialist Clinics",
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-medical-green text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              0757300713 | 0779049342
            </span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              bulindomedicals@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Emergency Services
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="bg-medical-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
              <Hospital className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-2xl text-medical-green">Bulindo Medical Centre</h1>
              <p className="text-sm text-gray-600">Comprehensive Healthcare Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold transition-colors ${
                  location === item.href
                    ? "text-medical-green"
                    : "text-professional-dark hover:text-medical-green"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-trust-blue hover:bg-blue-600 text-white rounded-full px-6">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-semibold transition-colors ${
                      location === item.href
                        ? "text-medical-green"
                        : "text-professional-dark hover:text-medical-green"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-trust-blue hover:bg-blue-600 text-white mt-4">
                  Book Appointment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
