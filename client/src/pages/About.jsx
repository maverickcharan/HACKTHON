import React from 'react';
import { Compass, Sparkles, Brain, Target, TrendingUp, Film, Music, BookOpen, Users, Globe } from 'lucide-react';


const culturalDomains = [
    { icon: Film, name: 'Movies & Web Series', color: 'text-red-400', description: 'Stories that inspire, motivate, and reflect life' },
    { icon: Music, name: 'Music', color: 'text-purple-400', description: 'Songs that match your mood and uplift your spirit' },
    { icon: BookOpen, name: 'Books', color: 'text-green-400', description: 'Books that expand insight, perspective, and creativity' },
    { icon: Globe, name: 'Anime & Podcasts', color: 'text-orange-400', description: 'Voices, animations, and shows that guide and entertain' },
    { icon: Users, name: 'Mood-Based Recommendations', color: 'text-pink-400', description: 'AI understands your mood to guide your journey' },
];

const features = [
    {
        icon: Brain,
        title: 'AI-Powered Mood Analysis',
        description: 'Our AI detects your current mood and suggests movies, music, books, and more tailored to inspire, entertain, and guide you.',
        gradient: 'from-blue-500 to-purple-500'
    },
    {
        icon: Target,
        title: 'Personalized Recommendations',
        description: 'Whether you want motivation, relaxation, fun, or insight, the platform curates content to match your emotional needs.',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: TrendingUp,
        title: 'Growth & Reflection',
        description: 'Track how your choices shape your mood, learn from stories, and expand your emotional and cultural awareness.',
        gradient: 'from-pink-500 to-orange-500'
    }
];

export default function About() {
    return (
        <div className="relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-5 pointer-events-none"></div>

            {/* Hero About Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-24 pb-12">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
                        <Compass className="w-5 h-5 text-purple-400" />
                        <span className="text-white/80 text-sm">About MoodMitra</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        See Life Differently Through Mood-Based Stories
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        MoodMitra is your AI-powered companion that understands how you feel and recommends movies, music, web series, books, and more.
                        Whether you want motivation, laughter, reflection, or insight, every suggestion is carefully curated to expand your perspective and guide your journey.
                    </p>
                </div>
            </section>

            {/* Mission & Features Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Mission Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-xl text-white/70 mb-8 leading-relaxed">
                            We help users explore content that aligns with their current mood while encouraging growth and self-reflection. Movies, music, books, anime, podcasts — every recommendation is designed to teach, inspire, and transform.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start space-x-4">
                                <span className="bg-blue-500/20 p-3 rounded-xl flex-shrink-0"><Brain className="w-6 h-6 text-blue-400" /></span>
                                <span className="text-white/60 text-base">AI detects your current mood</span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="bg-purple-500/20 p-3 rounded-xl flex-shrink-0"><Target className="w-6 h-6 text-purple-400" /></span>
                                <span className="text-white/60 text-base">Personalized content recommendations</span>
                            </li>
                            <li className="flex items-start space-x-4">
                                <span className="bg-pink-500/20 p-3 rounded-xl flex-shrink-0"><TrendingUp className="w-6 h-6 text-pink-400" /></span>
                                <span className="text-white/60 text-base">Track emotional and cultural growth</span>
                            </li>
                        </ul>
                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex items-center space-x-3">
                                <Sparkles className="w-8 h-8 text-blue-400" />
                                <span className="text-white/80 text-lg">Expand your mood. Discover your world.</span>
                            </div>
                            <div className="text-white/60 text-base">Learn, reflect, and grow every day.</div>
                        </div>
                    </motion.div>

                    {/* Features Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Key Features</h3>
                        <div className="space-y-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: index * 0.1 }}
                                        className="flex items-start space-x-6 hover:bg-white/10 rounded-2xl p-4 transition-all duration-300"
                                    >
                                        <div className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-2xl w-16 h-16 flex items-center justify-center`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                            <p className="text-white/60 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Domains Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Content Domains</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {culturalDomains.map((domain) => {
                            const Icon = domain.icon;
                            return (
                                <div key={domain.name} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                                    <div className="bg-white/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className={`w-8 h-8 ${domain.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{domain.name}</h3>
                                    <p className="text-white/60 text-sm mb-2">{domain.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
