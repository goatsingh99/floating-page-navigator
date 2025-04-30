
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              Feel free to reach out if you have a project in mind, want to collaborate, 
              or simply want to connect. I'm always open to discussing new opportunities 
              and ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-400">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 text-primary" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-secondary border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-secondary border-gray-700"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  required
                  className="bg-secondary border-gray-700"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Let me know how I can help..."
                  rows={5}
                  required
                  className="resize-none bg-secondary border-gray-700"
                />
              </div>
              
              <Button type="submit" className="w-full py-6 text-lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
