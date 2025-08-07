
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { Lightbulb, Users, ChevronDown, ChevronUp, Star, Sparkles, Heart, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';

const Programs = () => {
  const [expandedProgram, setExpandedProgram] = useState<string | null>('pilipa');

  
  const corePrograms = [
    {
      id: 'kuwa',
      slug: 'kuwa-program',
      title: "KUWA Program 🧠",
      shortDescription: "KUWA (Kutunza Ubunifu wa Watoto) merges playful exploration with real-world innovation, empowering kids aged 3–12 to become changemakers in their communities.",
      fullDescription: "KUWA is a bold leap in how we teach, nurture, and unleash children’s full potential. Targeting ages 3–12, it blends imagination with action—from nature play and storytelling to community innovation labs. KUWA activates grassroots problem-solving and builds the next generation of child designers and leaders.",
      ageGroup: "3–12 years",
      impact: "Launched Kenya’s first co-designed Children’s Design Workbook and scaled play labs across urban informal settlements.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-gradient-to-r from-yellow-400 to-green-500",
      activities: [
        "🎨 PILIPA Play Labs (ages 3–6): storytelling, sensory exploration, empathy",
        "🔧 Design for Change Studios (6–12): low-cost prototypes for sanitation, safety, inclusion",
        "📘 KidNexus Children’s Design Workbook co-created with kids",
        "👩‍🏫 Train-the-Trainer: design-thinking for teachers, caregivers, and youth mentors"
      ],
      outcomes: [
        "Children become confident community designers",
        "Boosts empathy, critical thinking, and imagination",
        "Educators adopt child-centered design",
        "Inspires real-world impact from a young age"
      ]
    },
    {
      id: 'health',
      slug: 'health-safety',
      title: "Health & Safety 🛡️",
      shortDescription: "Tech meets child health: Safe water, first response, and smarter ECDE wellness systems in low-resource settings.",
      fullDescription: "We work at the intersection of tech, community, and child health to dismantle wellness barriers in ECDE centers and homes. From water infrastructure to mobile health alerts, our goal is simple: smart, safe, and scalable care systems that actually work for kids.",
      ageGroup: "3–8 years",
      impact: "Reduced water-related absences by 40% in ECDE centers using playful WASH programs and community-based responses.",
      icon: <ShieldCheck className="h-8 w-8" />,
      color: "bg-gradient-to-r from-cyan-400 to-blue-500",
      activities: [
        "💧 Water for Wellness: safe water points and WASH education",
        "🧼 Home water filters + parent workshops",
        "🚲 Paraboda Health Platform: AI-enabled health response with boda riders",
        "📱 USSD/SMS dashboards for real-time community triage",
        "💰 M-SUPU micro-savings for health rides + reward system"
      ],
      outcomes: [
        "Increased child attendance in ECDEs",
        "Quick access to emergency transport",
        "Empowered caregivers and CHVs",
        "Health data integrated with county systems"
      ]
    },
    {
      id: 'ecototo',
      slug: 'ecototo-initiative',
      title: "EcoToto Initiative 🌱",
      shortDescription: "From waste to wonder: Clean energy, safe food, and joyful learning—powered by children, for the planet.",
      fullDescription: "EcoToto turns under-resourced ECDEs into green hubs of innovation. Children drive environmental action—transforming kitchen waste into fuel, planting micro-gardens, and tracking sustainability via smart IoT tools. It’s climate justice with crayons and compost.",
      ageGroup: "3–8 years",
      impact: "Piloted in 6 counties, with plans to expand to 100+ ECDEs through public-private partnerships.",
      icon: <Leaf className="h-8 w-8" />,
      color: "bg-gradient-to-r from-green-400 to-lime-500",
      activities: [
        "🌿 Plug-and-Play Biogas Digesters: clean cooking from waste",
        "🍲 Biogas Kitchens: hot meals + clean water",
        "🥕 Micro-gardens using nutrient-rich slurry",
        "📊 STAMP Cleantech IoT dashboard",
        "🧒 EcoEd Labs: composting, sorting, gardening"
      ],
      outcomes: [
        "Cleaner, safer ECDE environments",
        "Improved nutrition and hygiene",
        "Hands-on environmental education",
        "Reduced carbon emissions and waste"
      ]
    }
  ];

  const toggleProgram = (programId: string) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-orange-400 to-teal-400 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-bounce">
            <Star className="h-8 w-8 text-yellow-300" />
          </div>
          <div className="absolute top-20 right-20 animate-pulse">
            <Sparkles className="h-6 w-6 text-purple-300" />
          </div>
          <div className="absolute bottom-10 left-1/4 animate-bounce delay-300">
            <Heart className="h-6 w-6 text-red-300" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Programs 🎪</h1>
            <p className="text-xl max-w-3xl mx-auto animate-fade-in delay-200">
              Innovative learning experiences designed to unlock every child's potential and nurture the creative thinkers and social innovators of tomorrow! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Core Programs with Expand/Collapse */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Core Programs 🌟"
            subtitle="Deep dive into PILIPA and KUWA - the foundation of the KIDNEXUS approach"
          />
          <div className="space-y-8">
            {corePrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Program Header */}
                <div 
                  className={`${program.color} text-white p-8 cursor-pointer`}
                  onClick={() => toggleProgram(program.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse">
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{program.title}</h3>
                        <p className="text-lg opacity-90">{program.shortDescription}</p>
                        <div className="flex items-center space-x-4 mt-4">
                          <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                            👶 {program.ageGroup}
                          </span>
                          <Link
                            to={`/programs/${program.slug}`}
                            className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {expandedProgram === program.id ? (
                        <ChevronUp className="h-8 w-8 animate-bounce" />
                      ) : (
                        <ChevronDown className="h-8 w-8 animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProgram === program.id && (
                  <div className="p-8 animate-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Program Details */}
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <span className="text-3xl mr-2 animate-bounce">📖</span>
                          About {program.title.split(' ')[0]}
                        </h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">{program.fullDescription}</p>
                        
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-6">
                          <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                            <span className="text-2xl mr-2 animate-pulse">📊</span>
                            Impact & Results
                          </h5>
                          <p className="text-gray-600">{program.impact}</p>
                        </div>
                        
                        <h5 className="font-bold text-gray-800 mb-4 flex items-center">
                          <span className="text-2xl mr-2 animate-bounce">🏆</span>
                          Learning Outcomes
                        </h5>
                        <ul className="space-y-2">
                          {program.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-center text-gray-600 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                              <Star className="h-4 w-4 text-yellow-500 mr-2 animate-pulse" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activities */}
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                          <span className="text-3xl mr-2 animate-bounce">🎯</span>
                          Program Activities
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {program.activities.map((activity, idx) => (
                            <div 
                              key={idx} 
                              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300 animate-fade-in"
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              <p className="text-gray-700">{activity}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Approach */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Program Approach 🎯"
            subtitle="Every KIDNEXUS program is built on proven educational principles that make learning magical! ✨"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
                title: "Learning by Doing 🙌",
                description: "Children learn best through hands-on experiences. Our programs emphasize practical application over theoretical knowledge, making every lesson an adventure!",
                color: "bg-orange-100"
              },
              {
                icon: <Users className="h-8 w-8 text-teal-600" />,
                title: "Collaborative Learning 🤝",
                description: "Working together builds social skills and teaches children that the best solutions often come from diverse perspectives and teamwork!",
                color: "bg-teal-100"
              },
              {
                icon: <Heart className="h-8 w-8 text-indigo-600" />,
                title: "Child-Centered 💖",
                description: "Every child is unique and magical! Our programs adapt to individual learning styles, interests, and developmental needs to ensure every child thrives!",
                color: "bg-indigo-100"
              }
            ].map((approach, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className={`w-16 h-16 ${approach.color} rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce`} style={{ animationDelay: `${index * 300}ms` }}>
                  {approach.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-400 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 animate-pulse">
            <Sparkles className="h-8 w-8 text-yellow-300 opacity-50" />
          </div>
          <div className="absolute bottom-10 right-10 animate-bounce">
            <Star className="h-6 w-6 text-purple-300 opacity-50" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to Get Involved? 🚀</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in delay-200">
            Whether you want to enroll your child, volunteer, or learn more about our magical programs, we'd love to hear from you! ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
            <a
              href="/contact"
              className="inline-block bg-white text-teal-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us 📞
            </a>
            <a
              href="/support"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Support Our Programs 💖
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
