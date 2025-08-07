import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Star, Sparkles, Heart, Droplet, Smartphone, Target, CheckCircle, Activity, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const HealthSafety = () => {
  const projects = [
    {
      id: 'kuwa-health',
      title: "KUWA Health Project 💧",
      description: "Integrating health and wellness education into our core KUWA program through playful WASH activities and community health awareness.",
      icon: <Droplet className="h-8 w-8" />,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: [
        "🧼 Interactive WASH education through storytelling",
        "💧 Safe water point installations in ECDE centers",
        "🏥 Basic first aid training for children and caregivers",
        "📱 Health tracking through simple mobile tools",
        "👨‍⚕️ Community Health Volunteer partnerships"
      ],
      impact: "Reduced water-related illnesses by 60% in participating communities",
      beneficiaries: "450+ children and families"
    },
    {
      id: 'ecototo-health',
      title: "EcoToto Health Project 🌱",
      description: "Environmental health solutions that create cleaner, safer learning environments while teaching children about sustainability.",
      icon: <Activity className="h-8 w-8" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      features: [
        "🍲 Biogas kitchens for clean cooking and hot meals",
        "🌿 Waste-to-energy systems reducing harmful emissions",
        "🥕 Nutrition gardens using biogas slurry",
        "📊 Air quality monitoring with IoT sensors",
        "♻️ Waste management education for children"
      ],
      impact: "Improved air quality and nutrition in 15 ECDE centers",
      beneficiaries: "380+ children in pilot sites"
    }
  ];

  const overallImpact = [
    { metric: "40%", description: "Reduction in water-related absences", icon: "💧" },
    { metric: "15", description: "ECDE centers transformed", icon: "🏫" },
    { metric: "830+", description: "Children directly benefited", icon: "👶" },
    { metric: "92%", description: "Caregiver confidence improvement", icon: "👨‍👩‍👧‍👦" }
  ];

  const healthComponents = [
    {
      title: "Water for Wellness",
      description: "Safe water access and WASH education",
      icon: "💧",
      color: "bg-blue-100"
    },
    {
      title: "Paraboda Health Platform",
      description: "AI-enabled emergency health response",
      icon: "🚲",
      color: "bg-green-100"
    },
    {
      title: "Clean Energy Solutions",
      description: "Biogas systems for healthier environments",
      icon: "⚡",
      color: "bg-yellow-100"
    },
    {
      title: "Community Health Networks",
      description: "Connecting families to health resources",
      icon: "🤝",
      color: "bg-purple-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-400 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-cyan-200" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-blue-200" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-pink-200" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center text-white hover:text-cyan-200 transition-colors mr-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Programs
            </Link>
          </div>
          
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.6 }}
              className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <ShieldCheck className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-6">Health & Safety Program 🛡️</h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Tech meets child health: Safe water, first response, and smarter ECDE wellness systems
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              We work at the intersection of tech, community, and child health to dismantle wellness 
              barriers in ECDE centers and homes. Smart, safe, and scalable care systems that work! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Health & Safety Components 🏥"
            subtitle="Comprehensive wellness solutions for children and communities"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {healthComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${component.color} rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300`}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{component.title}</h3>
                <p className="text-sm text-gray-600">{component.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Overall Impact Stats */}
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Program Impact 📊</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {overallImpact.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.metric}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Main Projects */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Health & Safety Projects 🎯"
            subtitle="Two innovative approaches to improving child health and wellness"
          />
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
                viewport={{ once: true }}
              >
                <div className={`bg-gradient-to-r ${project.color} text-white p-8`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg opacity-90">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">📈 Impact</h4>
                      <p className="text-sm">{project.impact}</p>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <h4 className="font-bold mb-2">👥 Beneficiaries</h4>
                      <p className="text-sm">{project.beneficiaries}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Target className="h-6 w-6 text-cyan-600 mr-2" />
                    Key Features & Activities
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
                        className={`bg-gradient-to-r ${project.bgColor} rounded-lg p-4 border border-gray-100`}
                        viewport={{ once: true }}
                      >
                        <p className="text-gray-700">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Implementation Approach 🎯"
            subtitle="How we ensure sustainable health and safety improvements"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community-Led Solutions",
                description: "Working with local leaders, CHVs, and caregivers to ensure solutions are culturally appropriate and sustainable.",
                icon: "🤝",
                color: "bg-blue-100"
              },
              {
                title: "Technology Integration",
                description: "Using mobile platforms, IoT sensors, and data dashboards to track progress and ensure accountability.",
                icon: "📱",
                color: "bg-green-100"
              },
              {
                title: "Child-Centered Design",
                description: "Every solution is designed with children's needs, safety, and development at the center.",
                icon: "👶",
                color: "bg-purple-100"
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${approach.color} rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300`}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Health & Safety Mission 🚀</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us create healthier, safer environments for children across Kenya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-cyan-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Partner With Us 🤝
            </Link>
            <Link
              to="/support"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Support Health Programs 💖
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthSafety;