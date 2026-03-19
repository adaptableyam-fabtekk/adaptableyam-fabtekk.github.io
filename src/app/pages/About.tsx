import { Award, Target, Users, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in every project we undertake.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Our clients count on us to deliver consistent, dependable service.",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build long-term relationships based on trust and mutual success.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and methods to improve our services.",
    },
  ];

  const timeline = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Started with a small team serving local food manufacturers.",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Grew to serve major food processing facilities across the region.",
    },
    {
      year: "2012",
      title: "24/7 Service",
      description: "Launched round-the-clock emergency response service.",
    },
    {
      year: "2018",
      title: "Fabrication Division",
      description: "Added custom fabrication and spare parts manufacturing.",
    },
    {
      year: "2026",
      title: "Industry Leader",
      description: "Now serving 500+ clients across the food industry.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1772734462696-9c04c258a904?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWFudWZhY3R1cmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc3Mzk0ODI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Food manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            25+ years of engineering excellence in the food industry
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Engineering Partner
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  FoodTech Engineering has been providing specialized engineering services to the food 
                  industry for over 25 years. Our expertise spans across all aspects of food processing 
                  equipment maintenance, installation, and emergency support.
                </p>
                <p>
                  We understand the critical nature of food production and the importance of minimizing 
                  downtime. That's why we've built a reputation for rapid response, technical excellence, 
                  and unwavering commitment to our clients' success.
                </p>
                <p>
                  Our team of qualified engineers brings decades of combined experience, ensuring that 
                  your equipment is maintained to the highest standards and regulatory compliance requirements.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXIlMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3Mzk0ODI3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engineering blueprints"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-[#FF6B35]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Milestones in our commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange-200" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                    <div className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-full font-bold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FF6B35] rounded-full border-4 border-white shadow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Qualified engineers dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualified Engineers</h3>
              <p className="text-gray-600">
                All our engineers hold relevant qualifications and food industry certifications
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Experience</h3>
              <p className="text-gray-600">
                Decades of combined experience working with major food manufacturers
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Training</h3>
              <p className="text-gray-600">
                Regular training on the latest equipment and safety standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0A1628] to-[#1A2638] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the difference that expertise and dedication can make
          </p>
          <a
            href="tel:+441234567890"
            className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#E55A2B] transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}