import Section from './Section'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotlightCard'

const Experience = ({ data }) => {
    return (
        <Section id="experience">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-primary tracking-tight">
                EXPERIENCE
            </h2>

            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-auto md:mr-auto md:w-2/3 space-y-16">
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
                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-bg border-2 border-accent shadow-md"></div>

                        <SpotlightCard className="p-8 hover:-translate-y-1 transition-transform duration-300 bg-surface border border-primary/5 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">{exp.role}</h3>
                                <span className="mt-2 sm:mt-0 px-3 py-1 rounded-full bg-bg border border-primary/10 text-xs font-mono text-secondary font-bold">
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg text-secondary mb-4 font-medium border-b border-primary/10 pb-2 inline-block">
                                {exp.company}
                            </h4>

                            <p className="text-secondary/80 leading-relaxed font-normal">
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
