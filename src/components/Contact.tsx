import { MapPin, Mail, Phone, Github, Linkedin, Link as LinkIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the email using a backend service
    console.log("Form submitted:", { email, subject, message });
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });

    // Reset form
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <img 
              src="/lovable-uploads/ea77dc57-d261-45b9-8a8f-63a4c6e8365c.png"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white"
            />
            <div>
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <Button 
                variant="outline" 
                className="mt-4 border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.open('/CV_Ousmane_BA.pdf', '_blank')}
              >
                Télécharger CV
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Paris, France</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:bousmane733@gmail.com" className="hover:text-primary">
                bousmane733@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+33758675936" className="hover:text-primary">
                07 58 67 59 36
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/Ousmane-BA100"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-lg p-3 hover:bg-gray-200 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-lg p-3 hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black rounded-lg p-3 hover:bg-gray-200 transition-colors"
            >
              <LinkIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-gray-200 text-black"
            />
            <Input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-transparent border-gray-200 text-black"
            />
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-transparent border-gray-200 text-black min-h-[200px]"
            />
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}