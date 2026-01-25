import Section from './Section'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const Experience = ({ data }) => {
    return (
        <Section id="experience">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-neonCyan to-electricPurple bg-clip-text text-transparent">
                Experience
            </h2>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-auto md:mr-auto md:w-2/3 space-y-16">
                {data.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-neonCyan shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

                        <SpotlightCard className="p-8 hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-neonCyan transition-colors">{exp.role}</h3>
                                <span className="mt-2 sm:mt-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-electricPurple">
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg text-gray-300 mb-4 font-medium border-b border-white/5 pb-2 inline-block">
                                {exp.company}
                            </h4>

                            <p className="text-gray-400 leading-relaxed">
                                {exp.details}
                            </p>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

export default Experience
