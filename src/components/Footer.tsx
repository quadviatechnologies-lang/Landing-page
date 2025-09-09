import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, MapPin, Phone, Mail, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Quadvia */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                QUADVIA TECHNOLOGIES
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering dependable, state-of-the-art solutions to enhance
              enterprise efficiency and productivity.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Career", path: "/contact" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Telecom Services",
                "Networking Solutions",
                "Security Surveillance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  1st floor, 02/90-N, Cherur Road, Vengara, Oorakam, Malappuram,
                  Kerala, Pin-676519
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <p className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm">
                  {" "}
                  +91 949 705 5010
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:info@quadvia.com"
                  target="_blank"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                >
                  info@quadvia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Quadvia Technologies. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;