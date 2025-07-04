import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, Clock, AlertTriangle, Send } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll respond to your inquiry within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitMutation.mutate(data);
  };

  const departments = [
    "General Medicine",
    "General Surgery",
    "Laboratory",
    "Pharmacy",
    "Dental Surgery",
    "Maternity & Antenatal Care",
    "Family Planning",
    "Radiology",
    "Specialist Clinics",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-professional-dark mb-6">
            Get In <span className="text-medical-green">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help with your healthcare needs. Contact us for appointments, inquiries, or emergency services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-2xl text-professional-dark mb-8">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-medical-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-professional-dark mb-2">Phone Numbers</h4>
                  <p className="text-gray-700">0757300713</p>
                  <p className="text-gray-700">0779049342</p>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-trust-blue text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-professional-dark mb-2">Email Address</h4>
                  <p className="text-gray-700">bulindomedicals@gmail.com</p>
                  <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-dark-green text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-professional-dark mb-2">Operating Hours</h4>
                  <p className="text-gray-700">24/7 Emergency Services</p>
                  <p className="text-gray-700">Regular Hours: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600 mt-1">Monday through Sunday</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-center">
                <AlertTriangle className="text-red-500 mr-3 w-6 h-6" />
                <div>
                  <h4 className="font-bold text-red-700 mb-1">Emergency Contact</h4>
                  <p className="text-red-600">Call 0757300713 for immediate medical emergencies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-mint p-8 rounded-2xl">
            <h3 className="font-bold text-2xl text-professional-dark mb-6">Send Us a Message</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-professional-dark font-semibold">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your first name" 
                            className="border-gray-300 focus:ring-medical-green focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-professional-dark font-semibold">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your last name" 
                            className="border-gray-300 focus:ring-medical-green focus:border-transparent"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-professional-dark font-semibold">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your email" 
                          className="border-gray-300 focus:ring-medical-green focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-professional-dark font-semibold">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="border-gray-300 focus:ring-medical-green focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-professional-dark font-semibold">Department</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:ring-medical-green focus:border-transparent">
                            <SelectValue placeholder="Select a department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-professional-dark font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          placeholder="Tell us how we can help you" 
                          className="border-gray-300 focus:ring-medical-green focus:border-transparent"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-medical-green hover:bg-dark-green text-white py-4 rounded-lg text-lg h-auto"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"} 
                  <Send className="w-5 h-5 ml-3" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
