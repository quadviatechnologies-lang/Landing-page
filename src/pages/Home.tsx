import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield, Target } from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";
import home_hero_img from "../assets/Home-hero.jpeg";
import { Star } from "lucide-react";
import testimonial_avatar from "../assets/testimonial-avatar.jpeg";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={home_hero_img}
            alt="Data center background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            {/* UPDATED: Reduced base font size */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Enhancing Enterprise Efficiency with{" "}
              <span className="text-teal-400">Dependable Security</span> &
              Network Solutions
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={1}>
            {/* UPDATED: Reduced base font size */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are leaders in providing state-of-the-art telecommunication,
              networking, and security system facilities for enterprises across
              South India.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* UPDATED: Reduced base font size */}
              <Link
                to="/contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
              >
                Request a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* UPDATED: Reduced base font size */}
              <Link
                to="/services"
                className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              {/* UPDATED: Reduced base font size */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose{" "}
                <span className="text-teal-400 font-comfortaa">QUADVIA?</span>
              </h2>
              {/* UPDATED: Reduced base font size */}
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                We deliver excellence through innovation, expertise, and
                unwavering commitment to your success.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Proven Results",
                description:
                  "Track record of successful deployments across diverse industries and enterprise environments.",
              },
              {
                icon: Zap,
                title: "Advanced Technology",
                description:
                  "Cutting edge solutions powered by the latest innovations in networking and security.",
              },
              {
                icon: Users,
                title: "Experienced Team",
                description:
                  "Skilled professionals with deep expertise in telecom and security system implementations.",
              },
              {
                icon: Shield,
                title: "End-to-End Solutions",
                description:
                  "Comprehensive services from planning to deployment and ongoing maintenance support.",
              },
            ].map((point, index) => (
              <ScrollAnimation key={index} delay={index + 1}>
                <div className="bg-gray-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-teal-400 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/30 transition-colors">
                    <point.icon className="w-8 h-8 text-teal-400" />
                  </div>
                  {/* UPDATED: Reduced base font size */}
                  <h3 className="text-lg font-bold mb-4 text-white">
                    {point.title}
                  </h3>
                  {/* Base size for card text is generally fine, no change needed here */}
                  <p className="text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="text-teal-400">Clients Say</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it, hear from the enterprises who
                trust us with their critical infrastructure.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Quadvia's networking solutions transformed our operations. Their team's expertise and professionalism exceeded our expectations in every aspect of the deployment.",
                author: "Priya Sharma",
                position: "IT Director",
                company: "Innovate Solutions Pvt. Ltd.",
                avatarUrl: testimonial_avatar,
                rating: 5,
              },
              {
                quote:
                  "The security infrastructure implemented by Quadvia has given us complete peace of mind. Their ongoing support and maintenance services are exceptional.",
                author: "Rajesh Kumar",
                position: "Operations Head",
                company: "Apex Logistics",
                avatarUrl: testimonial_avatar,
                rating: 5,
              },
              {
                quote:
                  "Outstanding telecom services delivery. The project was completed on time and within budget, with minimal disruption to our daily operations.",
                author: "Anjali Menon",
                position: "Facility Manager",
                company: "Meridian Hotels",
                avatarUrl: testimonial_avatar,
                rating: 5,
              },
            ].map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index + 1}>
                <div className="bg-gray-700/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-teal-400 transition-all duration-300 h-full flex flex-col">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            {/* UPDATED: Reduced base font size */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            {/* UPDATED: Reduced base font size */}
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Let's discuss how Quadvia can enhance your enterprise connectivity
              and security.
            </p>
            {/* UPDATED: Reduced base font size */}
            <Link
              to="/contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Home;
