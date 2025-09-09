import React from "react";
import { Radio, Network, Shield, ChevronRight } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import service_hero_image from "../assets/Service-head-image.jpeg";
import { CheckCircle } from "lucide-react";
import Security_Surveillance_logo from "../assets/Security-Surveillance-Logo.jpg"
import Networking_Solutions_logo from "../assets/Networking-Solutions-logo.jpg"
import Telecom_Services_logo from "../assets/Telecom-Services-logo.jpg"

const Services: React.FC = () => {
  // A cleaner way to manage your services data
  const servicesData = [
    {
      title: "Telecom Services",
      description:
        "We deliver comprehensive telecom infrastructure services, from initial site planning to final commissioning, ensuring a robust and reliable communication backbone for your enterprise.",
      imageUrl:Telecom_Services_logo, // Placeholder Image
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
                Our <span className="text-teal-400">Integrated Solutions</span>
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

          {/* Telecom Services */}

          <div className="mb-20">

            <ScrollAnimation>

              <div className="text-center mb-12">

                <div className="w-20 h-20 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">

                  <Radio className="w-10 h-10 text-teal-400" />

                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">Telecom Services</h2>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

                  We deliver comprehensive telecom infrastructure services, from initial site planning

                  to final commissioning, ensuring a robust and reliable communication backbone for your enterprise.

                </p>

              </div>

            </ScrollAnimation>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[

                {

                  title: 'RF Site Survey and Planning',

                  description: 'Comprehensive radio frequency analysis and strategic site planning for optimal coverage and performance.',

                },

                {

                  title: 'RF Installation and Commissioning',

                  description: 'Professional installation and commissioning of radio frequency equipment and systems.',

                },

                {

                  title: 'MW Antenna Installation',

                  description: 'Microwave antenna installation and alignment for high-capacity point-to-point communications.',

                },

                {

                  title: 'Infrastructure Installation',

                  description: 'Complete telecom infrastructure setup including towers, cabinets, and power systems.',

                },

                {

                  title: 'Decommissioning Services',

                  description: 'Safe and environmentally responsible decommissioning of legacy telecom equipment.',

                },

                {

                  title: 'Network Optimization',

                  description: 'Ongoing optimization services to ensure peak performance and reliability.',

                },

              ].map((service, index) => (

                <ScrollAnimation key={index} delay={index % 3 + 1}>

                  <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-teal-400 transition-all duration-300 group">

                    <div className="flex items-start space-x-3">

                      <ChevronRight className="w-5 h-5 text-teal-400 mt-1 group-hover:translate-x-1 transition-transform" />

                      <div>

                        <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>

                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                      </div>

                    </div>

                  </div>

                </ScrollAnimation>

              ))}

            </div>

          </div>



          {/* Networking Solutions */}

          <div className="mb-20">

            <ScrollAnimation>

              <div className="text-center mb-12">

                <div className="w-20 h-20 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">

                  <Network className="w-10 h-10 text-teal-400" />

                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">Networking Solutions</h2>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

                  From structured LAN cabling to advanced SD-WAN solutions, we design and deploy secure,

                  high-speed networks that power your business's productivity and connectivity.

                </p>

              </div>

            </ScrollAnimation>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[

                {

                  title: 'Router and Switch Installation',

                  description: 'Enterprise-grade router and switch deployment with advanced configuration and optimization.',

                },

                {

                  title: 'Structured Cabling (LAN)',

                  description: 'Professional structured cabling solutions for reliable and scalable network infrastructure.',

                },

                {

                  title: 'Wireless LAN (W-LAN)',

                  description: 'High-performance wireless network design and implementation for seamless connectivity.',

                },

                {

                  title: 'SD-WAN Solutions',

                  description: 'Software-defined wide area network solutions for optimized and secure branch connectivity.',

                },

                {

                  title: 'Wireless Access Points',

                  description: 'Strategic placement and configuration of wireless access points for maximum coverage.',

                },

                {

                  title: 'Network Monitoring',

                  description: '24/7 network monitoring and management services to ensure optimal performance.',

                },

              ].map((service, index) => (

                <ScrollAnimation key={index} delay={index % 3 + 1}>

                  <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-teal-400 transition-all duration-300 group">

                    <div className="flex items-start space-x-3">

                      <ChevronRight className="w-5 h-5 text-teal-400 mt-1 group-hover:translate-x-1 transition-transform" />

                      <div>

                        <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>

                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                      </div>

                    </div>

                  </div>

                </ScrollAnimation>

              ))}

            </div>

          </div>



          {/* Security Surveillance */}

          <div>

            <ScrollAnimation>

              <div className="text-center mb-12">

                <div className="w-20 h-20 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">

                  <Shield className="w-10 h-10 text-teal-400" />

                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Surveillance</h2>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

                  We provide end-to-end security solutions, from advanced CCTV to access control,

                  designed to protect your assets and ensure complete peace of mind.

                </p>

              </div>

            </ScrollAnimation>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[

                {

                  title: 'CCTV Installation & Maintenance',

                  description: 'Advanced video surveillance systems with high-definition cameras and intelligent analytics.',

                },

                {

                  title: 'Access Control Systems',

                  description: 'Sophisticated access control solutions with biometric and card-based authentication.',

                },

                {

                  title: 'Alarm Systems',

                  description: 'Comprehensive alarm systems for intrusion detection and emergency response.',

                },

                {

                  title: 'Intercom & Video Door Phones',

                  description: 'Communication and visitor management systems for enhanced security and convenience.',

                },

                {

                  title: 'Cybersecurity Services',

                  description: 'Firewall configuration, network security assessment, and cybersecurity consulting.',

                },

                {

                  title: 'Annual Maintenance Contract',

                  description: 'Comprehensive maintenance and support services to ensure continuous system reliability.',

                },

              ].map((service, index) => (

                <ScrollAnimation key={index} delay={index % 3 + 1}>

                  <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-teal-400 transition-all duration-300 group">

                    <div className="flex items-start space-x-3">

                      <ChevronRight className="w-5 h-5 text-teal-400 mt-1 group-hover:translate-x-1 transition-transform" />

                      <div>

                        <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>

                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                      </div>

                    </div>

                  </div>

                </ScrollAnimation>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-teal-400">Process</span>
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
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
