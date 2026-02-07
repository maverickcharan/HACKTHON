import React from 'react';

import { TrendingUp, Map, Target, BarChart3, CheckCircle, Star, Sparkles, UserCheck, Zap, Eye, Activity, Users, Compass } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Personalized Onboarding',
    description: 'Kickstart your journey with an interactive flow that captures your mood and preferences across movies, music, books, web series, and anime.',
    details: [
      'Step-by-step animated onboarding',
      'Select your mood & interests',
      'Build your unique taste profile',
      'AI learns your preferences instantly',
    ],
    color: 'from-blue-400 to-purple-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Mood Analysis',
    description: 'Our AI understands your current emotional state and recommends content tailored to uplift, inspire, or entertain you.',
    details: [
      'Mood detection via interactive prompts',
      'Cross-domain personalized suggestions',
      'Insightful explanations for each recommendation',
      'Daily inspiration and guidance',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    title: 'Dynamic Dashboard',
    description: 'Track your mood history, completed recommendations, and growth across different cultural domains with a clear visual dashboard.',
    details: [
      'Mood history & trends visualization',
      'Completed content overview',
      'Track your exposure & progress',
      'Quick access to daily recommendations',
    ],
    color: 'from-blue-500 to-purple-500',
  },
  {
    icon: Map,
    title: 'Personalized Curriculum',
    description: 'Receive step-by-step content paths based on your mood and interests, guiding you to explore new experiences safely and enjoyably.',
    details: [
      'Domain-specific content plans',
      'Progressive steps matching comfort level',
      'AI-generated challenges & suggestions',
      'Replay & revisit anytime',
    ],
    color: 'from-green-400 to-blue-500',
  },
  {
    icon: Target,
    title: 'Mood-Based Challenges',
    description: 'Engage with challenges tailored to your mood that help you expand horizons, gain insight, or simply feel better.',
    details: [
      'Challenges in movies, music, books, and more',
      'Difficulty levels adapted to your emotional state',
      'Track completion & achievements',
      'Unlock rewards for consistent progress',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Progress & Analytics',
    description: 'Monitor your emotional growth, exposure to new content, and overall journey with detailed analytics and insights.',
    details: [
      'Mood & content exposure analytics',
      'Domain progress breakdown',
      'Growth trends and achievements',
      'Motivational insights for daily improvement',
    ],
    color: 'from-pink-500 to-orange-500',
  },
];

const processSteps = [
  {
    icon: Compass,
    title: '1. Onboard',
    text: 'Share your current mood and preferences through an engaging onboarding flow to create your unique profile.',
  },
  {
    icon: Eye,
    title: '2. Analyze',
    text: 'AI analyzes your mood, interests, and past choices to map your comfort zone and guide your content journey.',
  },
  {
    icon: Zap,
    title: '3. Challenge',
    text: 'Receive mood-based, personalized recommendations across movies, music, web series, books, and anime.',
  },
  {
    icon: Activity,
    title: '4. Track & Grow',
    text: 'Monitor your growth, track completed challenges, and celebrate your progress with analytics and rewards.',
  },
];

export default function Features() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 pt-24 pb-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3"
          >
            <Star className="w-5 h-5 text-yellow-400 animate-bounce" />
            <span className="text-white/80 text-sm">Features</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Explore MoodMitra's Core Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to discover mood-based, personalized recommendations across movies, music, books, anime, and web series.
          </motion.p>
        </motion.div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
        >
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-400 to-pink-400 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 animate-pulse">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
          }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80,80,255,0.10)' }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 flex flex-col shadow-lg"
              >
                <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 mx-auto animate-fadeIn`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 text-center">{feature.title}</h2>
                <p className="text-white/60 leading-relaxed mb-6 text-center">{feature.description}</p>
                <ul className="space-y-3 mx-auto text-left max-w-xs">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 animate-fadeIn" />
                      <span className="text-white/80 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
