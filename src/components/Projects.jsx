import { useState } from 'react'
import Section from './Section'
import { Folder, X, ExternalLink, Calendar, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { createPortal } from 'react-dom'

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative bg-slate-900 border border-white/10 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-slate-900/90 backdrop-blur-md border-b border-white/5">
                    <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><User size={14} className="text-neonCyan" /> {project.role}</span>
                            <span className="flex items-center gap-1"><Calendar size={14} className="text-electricPurple" /> {project.duration}</span>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-8 space-y-8">
                    <div>
                        <h4 className="text-lg font-semibold text-neonCyan mb-3">Project Overview</h4>
                        <p className="text-gray-300 leading-relaxed text-lg">{project.desc}</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-electricPurple mb-3">Key Responsibilities</h4>
                        <ul className="space-y-3">
                            {project.responsibilities?.map((resp, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neonCyan flex-shrink-0" />
                                    <span className="leading-relaxed">{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-gray-300 border border-white/10">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>,
        document.body
    )
}

const Projects = ({ data }) => {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <Section id="projects">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-neonCyan to-electricPurple bg-clip-text text-transparent">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedProject(project)}
                        className="group flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-neonCyan/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 cursor-pointer h-full"
                    >

                        {/* Header / Banner */}
                        <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-900 relative p-6 flex flex-col justify-end group-hover:from-slate-800 group-hover:to-neonCyan/20 transition-colors duration-500">
                            <div className="absolute top-6 right-6 p-2 bg-black/20 rounded-lg text-white/50 group-hover:text-white transition-colors">
                                <Folder size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white z-10">{project.title}</h3>
                            <p className="text-sm text-gray-400 z-10 font-mono mt-1 opacity-80">{project.role}</p>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <p className="text-gray-300 mb-8 leading-relaxed flex-1 line-clamp-3">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                                {project.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-neonCyan border border-white/10">
                                        {t}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-500 border border-white/10">
                                        +{project.tech.length - 3} more
                                    </span>
                                )}
                            </div>

                            <div className="mt-6 flex items-center text-sm font-bold text-neonCyan opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                View Details <ExternalLink size={14} className="ml-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </Section>
    )
}

export default Projects
