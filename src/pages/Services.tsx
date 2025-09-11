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
    <div className="min-h-screen pt-16">
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
                Our <span className="text-[#008080]">Integrated Solutions</span>
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
          {servicesData.map((service) => (
            <div
              key={service.title}
              id={slugify(service.title)}
              className="mb-20"
            >
              <ScrollAnimation>
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-[#008080]/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    {/* Placeholder for dynamic icons if needed */}
                    <Radio className="w-10 h-10 text-[#008080]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.subServices.map((sub, index) => (
                  <ScrollAnimation key={index} delay={(index % 3) + 1}>
                    <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-[#008080] transition-all duration-300 group">
                      <div className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-[#008080] mt-1 group-hover:translate-x-1 transition-transform" />
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-white">
                            {sub}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
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
                Our <span className="text-[#008080]">Process</span>
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
