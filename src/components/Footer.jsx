import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex space-x-6">
          <a
            href="mailto:babajideoluwaferanmi301@gmail.com"
            className="hover:text-blue-300 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/babaj301"
            className="hover:text-blue-300 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/babaj301"
            className="hover:text-blue-300 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-blue-200">
          © 2025 Babajide Oluwaferanmi. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
