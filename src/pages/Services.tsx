import React, { useEffect } from "react";
import { Radio, Network, Shield, ChevronRight } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import service_hero_image from "../assets/Service-head-image.jpeg";
import { CheckCircle } from "lucide-react";
import Security_Surveillance_logo from "../assets/Security-Surveillance-Logo.jpg";
import Networking_Solutions_logo from "../assets/Networking-Solutions-logo.jpg";
import Telecom_Services_logo from "../assets/Telecom-Services-logo.jpg";
import { useLocation } from "react-router-dom";

// Helper function to create a URL-friendly ID from a title
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

const Services: React.FC = () => {
  const location = useLocation();

  // This effect runs when the page loads or the URL hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  // Services data...
  const servicesData = [
    {
      title: "Telecom Services",
      description:
        "We deliver comprehensive telecom infrastructure services, from initial site planning to final commissioning, ensuring a robust and reliable communication backbone for your enterprise.",
      imageUrl: Telecom_Services_logo, // Placeholder Image
      // You can add a dedicated icon component or string here if you want to replace Radio
      iconComponent: Radio,
      subServices: [
        "RF Site Survey and Planning",
        "RF Installation and Commissioning",
        "MW Antenna Installation",
        "Infrastructure Installation",
        "Decommissioning Services",
        "Network Optimization",
      ],
    },
    {
      title: "Networking Solutions",
      description:
        "From structured LAN cabling to advanced SD-WAN solutions, we design and deploy secure, high-speed networks that power your business's productivity and connectivity.",
      imageUrl: Networking_Solutions_logo, // Placeholder Image
      iconComponent: Network, // Changed to Network icon
      subServices: [
        "Router and Switch Installation",
        "Structured Cabling (LAN)",
        "Wireless LAN (W-LAN)",
        "SD-WAN Solutions",
        "Wireless Access Points",
        "24/7 Network Monitoring",
      ],
    },
    {
      title: "Security Surveillance",
      description:
        "We provide end-to-end security solutions, from advanced CCTV to access control, designed to protect your assets and ensure complete peace of mind.",
      imageUrl: Security_Surveillance_logo, // Placeholder Image
      iconComponent: Shield, // Changed to Shield icon
      subServices: [
        "CCTV Installation & Maintenance",
        "Access Control Systems",
        "Intrusion Alarm Systems",
        "Intercom & Video Door Phones",
        "Cybersecurity Services",
        "Annual Maintenance Contracts",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900 text-white">
      {" "}
      {/* Added bg-gray-900 to ensure consistent background */}
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service_hero_image}
            alt="Server room background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Integrated Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology services designed to power your
                enterprise infrastructure with reliability, security, and
                innovation.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* Services Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mapping over servicesData to create sections */}
          {servicesData.map((service, serviceIndex) => (
            <div
              key={service.title}
              id={slugify(service.title)}
              className={`mb-20 last:mb-0  ${
                serviceIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`} // Alternating image side
            >
              <ScrollAnimation>
                <div className="text-center lg:text-center mb-12">
                  {" "}
                  {/* Adjusted text alignment */}
                  <div className="w-20 h-20 bg-[#008080]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    {" "}
                    {/* Adjusted icon alignment */}
                    {/* Render dynamic icon based on service data, fallback to Radio if not specified */}
                    {React.createElement(service.iconComponent || Radio, {
                      className: "w-10 h-10 text-[#008080]",
                    })}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-lg max-w-3xl lg:max-w-full mx-auto lg:mx-0 leading-relaxed">
                    {" "}
                    {/* Adjusted max-width */}
                    {service.description}
                  </p>
                </div>
              </ScrollAnimation>

              {/* New structure for image and sub-services */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image for the service */}
                <ScrollAnimation delay={0.2}>
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-80 object-cover" // Fixed height for consistency, adjust as needed
                    />
                    <div className="absolute inset-0 bg-gray-900/30" />
                  </div>
                </ScrollAnimation>

                {/* Sub-services list */}
                <div className="grid md:grid-cols-2 gap-6">
                  {service.subServices.map((sub, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1 + 0.3}>
                      <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-[#008080] transition-all duration-300 group flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#008080] mt-1 flex-shrink-0" />{" "}
                        {/* Changed to CheckCircle for a bullet effect */}
                        <p className="text-white font-medium">{sub}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
                from concept to completion.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understanding your requirements and challenges through detailed analysis.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creating customized solutions tailored to your specific business needs.",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Professional deployment with minimal disruption to your operations.",
              },
              {
                step: "04",
                title: "Support",
                description:
                  "Ongoing maintenance and support to ensure optimal performance.",
              },
            ].map((process, index) => (
              <ScrollAnimation key={index} delay={index + 1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
