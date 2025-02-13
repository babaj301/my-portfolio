import { ChevronDown } from "lucide-react";

const Hero = () => (
  <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-2xl mb-4 text-blue-300">Hi, my name is</h2>
      <h1 className="text-6xl lg:text-7xl font-bold mb-6">
        Babajide Oluwaferanmi
      </h1>
      <p className="text-3xl lg:text-4xl text-blue-200 mb-8">
        I build things for the web.
      </p>
      <p className="text-xl max-w-2xl mx-auto text-blue-200">
        I'm a Front-End Developer specializing in building exceptional digital
        experiences with modern web technologies.
      </p>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-blue-300" />
      </div>
    </div>
  </header>
);

export default Hero;
