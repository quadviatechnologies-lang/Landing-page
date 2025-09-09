import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Quadvia-logo.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true); // State for the new banner
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" // Added shadow for better depth
          : "bg-transparent"
      }`}
    >
      {/* --- NEW CONTACT BANNER --- */}
      {isBannerVisible && (
        <div className="bg-black text-white px-4 sm:px-6 py-2 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex-grow text-center">
            <span className="whitespace-nowrap">
              Contact Us: <strong>info@quadvia.com</strong> |{" "}
              <strong>+91 987 654 3210</strong>
            </span>
          </div>
          <button
            onClick={() => setIsBannerVisible(false)}
            aria-label="Dismiss contact banner"
            className="p-1 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      )}
      {/* --- END OF BANNER --- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img src={logo} alt="Quadvia Logo" className="w-10 h-10" />
            </div>
            <span className="text-xl font-bold text-white font-['Comfortaa']">
              Quadvia Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-teal-400"
                    : "text-gray-300 hover:text-teal-400"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-teal-400 bg-gray-700"
                      : "text-gray-300 hover:text-teal-400 hover:bg-gray-700"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg font-medium text-center transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
