import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, Star, Sparkles, Heart, Recycle, Zap, Target, CheckCircle, TreePine, Droplets, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const EcoTotoInitiative = () => {
  const features = [
    {
      title: "Plug-and-Play Biogas Digesters",
      description: "Transform kitchen waste into clean cooking fuel with child-friendly biogas systems",
      icon: <Recycle className="h-6 w-6" />,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Biogas Kitchens",
      description: "Clean cooking solutions providing hot meals and clean water for ECDE centers",
      icon: <Zap className="h-6 w-6" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Micro-Gardens",
      description: "Nutrition gardens using nutrient-rich biogas slurry for fresh vegetables",
      icon: <TreePine className="h-6 w-6" />,
      color: "from-lime-400 to-green-500"
    },
    {
      title: "STAMP IoT Dashboard",
      description: "Smart monitoring of environmental conditions and sustainability metrics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "EcoEd Labs",
      description: "Hands-on environmental education through composting, sorting, and gardening",
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Water Conservation",
      description: "Rainwater harvesting and water recycling systems for sustainable water use",
      icon: <Droplets className="h-6 w-6" />,
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const outcomes = [
    "Cleaner, safer ECDE environments with reduced air pollution",
    "Improved nutrition through fresh garden produce",
    "Hands-on environmental education for children",
    "Reduced carbon emissions and waste generation",
    "Cost savings on cooking fuel and waste management",
    "Enhanced community awareness of environmental issues"
  ];

  const impactStats = [
    { number: "15", label: "ECDE Centers", icon: "🏫" },
    { number: "6", label: "Counties", icon: "🗺️" },
    { number: "380+", label: "Children", icon: "👶" },
    { number: "100+", label: "Planned Expansion", icon: "🚀" }
  ];

  const sustainabilityGoals = [
    {
      goal: "Carbon Footprint Reduction",
      description: "Offset 1,000+ tons of CO2 through biogas adoption",
      progress: 25,
      icon: "🌍"
    },
    {
      goal: "Waste Diversion",
      description: "Divert 500+ tons of organic waste from landfills",
      progress: 40,
      icon: "♻️"
    },
    {
      goal: "Clean Energy Access",
      description: "Provide clean cooking solutions to 100+ centers",
      progress: 15,
      icon: "⚡"
    },
    {
      goal: "Food Security",
      description: "Establish nutrition gardens in all participating centers",
      progress: 60,
      icon: "🥬"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-lime-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-lime-200" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-green-200" />
          </div>
          <div className="absolute bottom-10 right-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-pink-200" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-6">
            <Link
              to="/programs"
              className="inline-flex items-center text-white hover:text-lime-200 transition-colors mr-6"
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
              <Leaf className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-6">EcoToto Initiative 🌱</h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              From waste to wonder: Clean energy, safe food, and joyful learning
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Transforming under-resourced ECDEs into green hubs of innovation where children 
              drive environmental action and learn climate justice! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="EcoToto Features 🌟"
            subtitle="Innovative solutions that turn ECDEs into environmental learning centers"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4 animate-pulse">
                  <Star className="h-4 w-4 text-yellow-400" />
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-6 text-white`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-lime-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Current Impact 📊"
            subtitle="Measuring our environmental and educational impact"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Sustainability Goals */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Sustainability Goals 🎯</h3>
            <div className="space-y-6">
              {sustainabilityGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                  viewport={{ once: true }}
                >
                  <div className="text-3xl">{goal.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-gray-800">{goal.goal}</h4>
                      <span className="text-sm font-medium text-gray-600">{goal.progress}%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-green-400 to-lime-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-gradient-to-br from-lime-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Environmental Learning Outcomes 🌱"
            subtitle="What children learn through EcoToto activities"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white rounded-lg p-6 shadow-md"
                viewport={{ once: true }}
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Go Green? 🌱</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in creating sustainable, eco-friendly learning environments for children!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Implement EcoToto 🌿
            </Link>
            <Link
              to="/support"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Fund Green Solutions 💚
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcoTotoInitiative;