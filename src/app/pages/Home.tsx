import { Link } from "react-router";
import { 
  ClipboardCheck, 
  Wrench, 
  Package, 
  Users, 
  Sparkles, 
  AlertCircle, 
  Shield,
  Hammer,
  Settings
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Condition Reports",
      description: "Comprehensive equipment assessments and detailed reporting.",
    },
    {
      icon: Wrench,
      title: "Refurbishments",
      description: "Complete equipment refurbishment to extend operational life.",
    },
    {
      icon: Package,
      title: "Installations/Decommissioning",
      description: "Professional installation and safe decommissioning services.",
    },
    {
      icon: Users,
      title: "Shift Cover",
      description: "Reliable engineering support to cover your operational shifts.",
    },
    {
      icon: Sparkles,
      title: "Oven Cleaning",
      description: "Specialist cleaning services for commercial ovens.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Call Out",
      description: "24/7 emergency response to minimize downtime.",
    },
    {
      icon: Shield,
      title: "Preventative Maintenance",
      description: "Scheduled maintenance to prevent costly breakdowns.",
    },
    {
      icon: Hammer,
      title: "Fabrication and Spares",
      description: "Custom fabrication and spare parts supply.",
    },
    {
      icon: Settings,
      title: "Divider Servicing",
      description: "Expert servicing for industrial dividers and equipment.",
    },
  ];

  const stats = [
    { value: "25+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "24/7", label: "Emergency Support" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768737180431-9b986c7dd1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZm9vZCUyMHByb2Nlc3NpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczODQyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Food processing equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engineering Excellence for the Food Industry
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Trusted maintenance, installation, and emergency services to keep your operations running smoothly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#FF6B35] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#E55A2B] transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#0A1628] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FF6B35] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to the food industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Icon className="h-12 w-12 text-[#FF6B35] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-[#FF6B35] text-white px-8 py-3 rounded-md font-medium hover:bg-[#E55A2B] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose FABtekk Engineering?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Food Industry Specialists</h3>
                    <p className="text-gray-600">
                      Deep expertise in food processing equipment and regulatory compliance
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">24/7 Emergency Response</h3>
                    <p className="text-gray-600">
                      Rapid response to minimize production downtime and maintain operations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Experienced Team</h3>
                    <p className="text-gray-600">
                      Qualified engineers with extensive food industry experience
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Comprehensive Solutions</h3>
                    <p className="text-gray-600">
                      From maintenance to fabrication, we handle all your engineering needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633997011021-0254baa23289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMG1haW50ZW5hbmNlJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzM5NDgyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engineering maintenance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0A1628] to-[#1A2638] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Emergency Engineering Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is available 24/7 to handle your urgent engineering needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+441234567890"
              className="bg-[#FF6B35] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#E55A2B] transition-colors"
            >
              Call Emergency Line
            </a>
            <Link
              to="/contact"
              className="bg-white text-[#0A1628] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Request Callback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}