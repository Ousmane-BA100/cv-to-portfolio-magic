import { MapPin, Mail, Phone, Github, Linkedin, Link as LinkIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          
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
              className="bg-black rounded-lg p-3 hover:bg-gray-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-3 hover:bg-gray-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-3 hover:bg-gray-900 transition-colors"
            >
              <LinkIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8">
          <form className="space-y-6">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-gray-200"
            />
            <Input
              type="text"
              placeholder="Subject"
              className="bg-transparent border-gray-200"
            />
            <Textarea
              placeholder="Your message"
              className="bg-transparent border-gray-200 min-h-[200px]"
            />
            <Button className="w-full bg-black text-white hover:bg-gray-900">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}