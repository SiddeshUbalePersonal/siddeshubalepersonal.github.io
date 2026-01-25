import Section from './Section'
import SpotlightCard from './SpotlightCard'
import { motion } from 'framer-motion'
import { Code2, Smartphone, Server, Database, Coffee, Wrench, Globe, Terminal, Box } from 'lucide-react'

const getTechDetails = (name) => {
    const lower = name.toLowerCase();
    if (lower.includes('react')) return { icon: Code2, color: 'text-neonCyan' };
    if (lower.includes('node') || lower.includes('next')) return { icon: Server, color: 'text-green-400' };
    if (lower.includes('html') || lower.includes('css')) return { icon: Globe, color: 'text-orange-500' };
    if (lower.includes('test')) return { icon: Wrench, color: 'text-yellow-400' };
    if (lower.includes('mobile')) return { icon: Smartphone, color: 'text-blue-400' };
    if (lower.includes('typescript') || lower.includes('javascript')) return { icon: Terminal, color: 'text-blue-300' };
    return { icon: Box, color: 'text-gray-400' };
}

const About = ({ data }) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                {/* Image Side */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-neonCyan to-electricPurple rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                        <img
                            src="./images/about-profile.jpg"
                            alt="About Siddesh"
                            className="w-full h-auto object-cover"
                        />
                        {/* Glass Overlay on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                            <span className="px-6 py-2 rounded-full border border-white/20 text-white bg-white/10 backdrop-blur-md">
                                Full Stack Wizard 🧙‍♂️
                            </span>
                        </div>
                    </div>
                </div>

                {/* Text Side */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neonCyan to-electricPurple bg-clip-text text-transparent inline-block">
                        About Me
                    </h2>
                    <SpotlightCard className="p-6">
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {data.profile.summary}
                        </p>
                        <p className="mt-4 text-gray-400">
                            I specialize in building scalable, high-performance applications. With a strong foundation in both frontend and backend technologies, I bridge the gap between design and engineering.
                        </p>
                    </SpotlightCard>
                </div>
            </div>

            {/* Skills Section */}
            <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-4 text-white">
                    Tech Stack
                </h3>
                <div className="h-1 w-20 bg-neonCyan mx-auto rounded-full" />
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {data.skills.map((skill, index) => {
                    const [tech, years] = skill.includes('(') ? skill.split('(') : [skill, '']
                    const yearText = years ? years.replace(')', '') : ''
                    const { icon: Icon, color } = getTechDetails(tech)

                    return (
                        <motion.div key={index} variants={item}>
                            <SpotlightCard className="h-full group hover:bg-white/10 transition-colors duration-300">
                                <div className="p-6 flex flex-col items-center justify-center gap-4 relative z-10">

                                    {/* Icon Container */}
                                    <div className={`p-4 rounded-xl bg-slate-950/50 border border-white/5 ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={32} />
                                    </div>

                                    <div className="text-center">
                                        <h4 className="font-bold text-white text-lg mb-1 group-hover:text-neonCyan transition-colors">
                                            {tech.trim()}
                                        </h4>
                                        {yearText && (
                                            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-400 border border-white/5">
                                                {yearText}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    )
                })}
            </motion.div>
        </Section>
    )
}

export default About
