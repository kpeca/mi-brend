import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-stone-400 text-sm">
          &copy; {new Date().getFullYear()} MI Brend. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
