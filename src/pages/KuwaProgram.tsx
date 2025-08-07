import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Star, Sparkles, Heart, Target, CheckCircle, Lightbulb, Palette, BookOpen, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const KuwaProgram = () => {
  const activities = [
    {
      title: "PILIPA Play Labs (Ages 3–6)",
      description: "Storytelling, sensory exploration, and empathy building through guided play",
      icon: <Palette className="h-6 w-6" />,
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Design for Change Studios (Ages 6–12)",
      description: "Low-cost prototypes for sanitation, safety, and inclusion challenges",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Children's Design Workbook",
      description: "Co-created resource that guides children through design thinking processes",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-green-400 to-teal-500"
    },
    {
      title: "Train-the-Trainer Program",
      description: "Design-thinking workshops for teachers, caregivers, and youth mentors",
      icon: <Users2 className="h-6 w-6" />,
      color: "from-blue-400 to-indigo-500"
    }
  ];

  const outcomes = [
    "Children become confident community designers",
    "Boosts empathy, critical thinking, and imagination",
    "Educators adopt child-centered design methodologies",
    "Inspires real-world impact from a young age",
    "Develops problem-solving and leadership skills",
    "Strengthens community connections and awareness"
  ];

  const impactStats = [
    { number: "700+", label: "Children Reached", icon: "👶" },
    { number: "15", label: "Communities", icon: "🏘️" },
    { number: "25", label: "Design Projects", icon: "🎨" },
    { number: "95%", label: "Parent Satisfaction", icon: "💖" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-yellow-200" />
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
              className="inline-flex items-center text-white hover:text-yellow-200 transition-colors mr-6"
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
              <Users className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold mb-6">KUWA Program 🧠</h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Kutunza Ubunifu wa Watoto - Nurturing Children's Creativity
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              A bold leap in how we teach, nurture, and unleash children's full potential through 
              imagination, action, and community innovation! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Empowering Young Changemakers 🌟
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                KUWA merges playful exploration with real-world innovation, empowering kids aged 3–12 
                to become changemakers in their communities. From nature play and storytelling to 
                community innovation labs, KUWA activates grassroots problem-solving.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach blends imagination with action, helping children develop the confidence 
                and skills to tackle real challenges in their communities while having fun and 
                learning through play.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                  <Target className="h-6 w-6 text-green-600 mr-2" />
                  Key Impact
                </h3>
                <p className="text-gray-700">
                  Launched Kenya's first co-designed Children's Design Workbook and scaled 
                  play labs across urban informal settlements, reaching over 700 children.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-xl p-6 text-center"
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Activities */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Program Activities 🎯"
            subtitle="Discover the magical learning experiences that make KUWA special!"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg relative overflow-hidden"
                viewport={{ once: true }}
              >
                <div className="absolute top-4 right-4 animate-pulse">
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center mb-6 text-white`}>
                  {activity.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Learning Outcomes 🏆"
            subtitle="What children achieve through the KUWA program"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6"
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
      <section className="py-20 bg-gradient-to-r from-green-400 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join KUWA? 🚀</h2>
          <p className="text-xl mb-8 opacity-90">
            Help us nurture the next generation of creative thinkers and community changemakers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Your Child 📝
            </Link>
            <Link
              to="/support"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Support KUWA 💖
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KuwaProgram;