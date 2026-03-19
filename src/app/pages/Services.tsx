import { 
  ClipboardCheck, 
  Wrench, 
  Package, 
  Users, 
  Sparkles, 
  AlertCircle, 
  Shield,
  Hammer,
  Settings,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "Condition Reports",
      description: "Comprehensive equipment assessments and detailed reporting to help you make informed decisions about your machinery.",
      features: [
        "Detailed visual inspections",
        "Performance analysis",
        "Compliance checking",
        "Recommendations for improvements",
        "Photographic evidence",
      ],
    },
    {
      icon: Wrench,
      title: "Refurbishments",
      description: "Complete equipment refurbishment services to extend operational life and improve efficiency.",
      features: [
        "Full equipment strip-down",
        "Parts replacement",
        "Performance upgrades",
        "Testing and certification",
        "Post-refurbishment support",
      ],
    },
    {
      icon: Package,
      title: "Installations/Decommissioning",
      description: "Professional installation of new equipment and safe decommissioning of outdated machinery.",
      features: [
        "Site preparation and planning",
        "Professional installation",
        "Safety compliance",
        "Staff training",
        "Safe equipment removal",
      ],
    },
    {
      icon: Users,
      title: "Shift Cover",
      description: "Reliable engineering support to cover your operational shifts and maintain continuity.",
      features: [
        "Qualified engineers on-site",
        "Flexible shift patterns",
        "Emergency cover available",
        "Seamless integration with your team",
        "Regular reporting",
      ],
    },
    {
      icon: Sparkles,
      title: "Oven Cleaning",
      description: "Specialist deep cleaning services for commercial and industrial ovens to maintain hygiene standards.",
      features: [
        "Deep cleaning services",
        "Food-safe cleaning products",
        "Minimal downtime",
        "Regular maintenance schedules",
        "Compliance documentation",
      ],
    },
    {
      icon: AlertCircle,
      title: "Emergency Call Out",
      description: "24/7 emergency response service to minimize production downtime and resolve urgent issues.",
      features: [
        "Available 24/7/365",
        "Rapid response times",
        "Experienced technicians",
        "Emergency parts supply",
        "Temporary solutions provided",
      ],
    },
    {
      icon: Shield,
      title: "Preventative Maintenance",
      description: "Scheduled maintenance programs to prevent costly breakdowns and maximize equipment lifespan.",
      features: [
        "Customized maintenance schedules",
        "Regular inspections",
        "Lubrication and adjustments",
        "Parts replacement",
        "Detailed reporting and tracking",
      ],
    },
    {
      icon: Hammer,
      title: "Fabrication and Spares",
      description: "Custom fabrication services and comprehensive spare parts supply for all equipment types.",
      features: [
        "Custom metal fabrication",
        "Spare parts sourcing",
        "OEM and compatible parts",
        "Fast turnaround times",
        "Quality guaranteed",
      ],
    },
    {
      icon: Settings,
      title: "Divider Servicing",
      description: "Expert servicing and maintenance for industrial dividers and related equipment.",
      features: [
        "Specialized divider knowledge",
        "Calibration services",
        "Parts replacement",
        "Performance optimization",
        "Regular service contracts",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1703607888337-aae6d77b3d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwa2l0Y2hlbiUyMGluZHVzdHJpYWwlMjBvdmVufGVufDF8fHx8MTc3Mzk0ODI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Commercial kitchen equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive engineering solutions for the food industry
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-[#FF6B35]" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <ArrowRight className="h-5 w-5 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gray-100 rounded-lg h-[350px] flex items-center justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}>
                    <Icon className="h-32 w-32 text-gray-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0A1628] to-[#1A2638] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your engineering requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#FF6B35] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#E55A2B] transition-colors"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+441234567890"
              className="bg-white text-[#0A1628] px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}