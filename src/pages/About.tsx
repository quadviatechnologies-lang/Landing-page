import React from "react";
import { Building2, Users, Award, Globe } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import telecom_service from "../assets/Telecom-service.jpeg";

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[50vh] flex items-center justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Network cables background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Engineering the Future of{" "}
                  Connectivity and Security
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Quadvia Technologies is an innovation-led, technology-driven,
                and customer-focused organization.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  We were founded with a clear mission: to lead the revolution
                  in the telecom and security industries by providing powerful,
                  integrated solutions for modern businesses and enterprises.
                </p>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Our greatest asset is our team. With skilled and experienced
                  human resources, we have the expertise to deploy
                  high-performance, ultra-low latency networks that form the
                  critical backbone of your operations.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We believe in building long-term partnerships with our
                  clients, providing not just solutions, but ongoing support and
                  innovation that grows with their business needs.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={1}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#008080]/20 rounded-xl blur-xl" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Numbers that showcase our commitment to excellence and client
                success.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Completed", icon: Award },
              { number: "25+", label: "Enterprise Clients", icon: Building2 },
              { number: "10+", label: "Years Experience", icon: Globe },
              { number: "24/7", label: "Support Available", icon: Users },
            ].map((stat, index) => (
              <ScrollAnimation key={index} delay={index + 1}>
                <div className="text-center bg-gray-700/50 p-8 rounded-xl border border-gray-600 hover:border-[#008080] transition-all duration-300">
                  <div className="w-16 h-16 bg-[#008080]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-[#008080]" />
                  </div>
                  <div className="text-4xl font-bold text-[#008080] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Clientele
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                We proudly serve diverse industries across South India with our
                comprehensive technology solutions.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Corporate Offices",
                description:
                  "Modern workspace connectivity and security infrastructure for businesses of all sizes.",
                image:
                  "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              },
              {
                title: "Telecom Service Providers",
                description:
                  "Advanced network infrastructure and maintenance solutions for telecom operators.",
                image: telecom_service,
              },
              {
                title: "Manufacturing Facilities",
                description:
                  "Industrial-grade networks and security systems for manufacturing environments.",
                image:
                  "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              },
              {
                title: "Hospitality Sector",
                description:
                  "Guest experience enhancement through reliable connectivity and security solutions.",
                image:
                  "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              },
              {
                title: "Healthcare Institutions",
                description:
                  "HIPAA-compliant networks and security systems for hospitals and clinics.",
                image:
                  "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
              },
            ].map((client, index) => (
              <ScrollAnimation key={index} delay={(index % 3) + 1}>
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600 hover:border-[#008080] transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {client.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#008080]/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we
                deliver.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Continuously advancing technology solutions to meet evolving business needs and industry standards.",
              },
              {
                title: "Reliability",
                description:
                  "Delivering dependable systems and services that our clients can trust for their critical operations.",
              },
              {
                title: "Excellence",
                description:
                  "Maintaining the highest quality standards in every project, from conception to completion.",
              },
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={index + 1}>
                <div className="text-center p-8 bg-gray-700/30 rounded-xl border border-gray-600 hover:border-[#008080] transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-[#ffffff]">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
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

export default About;
