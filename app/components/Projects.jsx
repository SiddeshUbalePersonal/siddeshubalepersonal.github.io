import { useState } from 'react';
import Section from './Section';
import { Folder, X, ExternalLink, Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative bg-surface border border-primary/10 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-surface/90 backdrop-blur-md border-b border-primary/5">
                    <div>
                        <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-secondary">
                            <span className="flex items-center gap-1"><User size={14} className="text-accent" /> {project.role}</span>
                            <span className="flex items-center gap-1"><Calendar size={14} className="text-accent" /> {project.duration}</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-bg hover:bg-primary/5 text-secondary hover:text-primary transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-8 space-y-8">
                    <div>
                        <h4 className="text-lg font-bold text-accent mb-3 uppercase tracking-wide">Project Overview</h4>
                        <p className="text-secondary leading-relaxed text-lg">{project.desc}</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-accent mb-3 uppercase tracking-wide">Key Responsibilities</h4>
                        <ul className="space-y-3">
                            {project.responsibilities?.map((resp, i) => (
                                <li key={i} className="flex items-start gap-3 text-secondary">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                    <span className="leading-relaxed">{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-primary mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-bg text-secondary border border-primary/10">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    );
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

const Projects = ({ data }) => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Section id="projects">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-primary tracking-tight">
                FEATURED PROJECTS
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {data.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        onClick={() => setSelectedProject(project)}
                        className="group flex flex-col bg-surface border border-primary/5 rounded-3xl overflow-hidden hover:border-accent/50 hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                    >

                        {/* Header / Banner */}
                        <div className="h-32 bg-primary relative p-6 flex flex-col justify-end overflow-hidden">
                            {/* Abstract decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -mr-10 -mt-10" />

                            <div className="absolute top-6 right-6 p-2 bg-bg/20 rounded-lg text-bg group-hover:text-white transition-colors">
                                <Folder size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-bg z-10">{project.title}</h3>
                            <p className="text-sm text-bg/80 z-10 font-mono mt-1 opacity-80">{project.role}</p>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <p className="text-secondary mb-8 leading-relaxed flex-1 line-clamp-3">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-primary/5">
                                {project.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-bg text-accent border border-primary/10">
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-bg text-secondary border border-primary/10">
                                        +{project.tech.length - 3} more
                                    </span>
                                )}
                            </div>

                            <div className="mt-6 flex items-center text-sm font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Details <ExternalLink size={14} className="ml-2" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </Section>
    )
}

export default Projects;