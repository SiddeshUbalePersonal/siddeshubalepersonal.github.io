import Section from './Section'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'

const Contact = ({ data }) => {
    return (
        <Section id="contact" className="pb-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-neonCyan to-electricPurple bg-clip-text text-transparent">
                Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="space-y-10">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-5 text-gray-300">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-neonCyan shadow-lg shadow-neonCyan/10">
                                <Mail size={24} />
                            </div>
                            <a href={`mailto:${data.profile.email}`} className="text-lg hover:text-white transition-colors">
                                {data.profile.email}
                            </a>
                        </div>
                        <div className="flex items-center space-x-5 text-gray-300">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-electricPurple shadow-lg shadow-electricPurple/10">
                                <MapPin size={24} />
                            </div>
                            <span className="text-lg">{data.profile.location}</span>
                        </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <a href={data.profile.links.github} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neonCyan transition-all text-white group">
                            <Github size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href={data.profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-electricPurple transition-all text-white group">
                            <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                        <input type="text" className="w-full px-5 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan outline-none transition-all text-white placeholder-gray-600" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                        <input type="email" className="w-full px-5 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan outline-none transition-all text-white placeholder-gray-600" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                        <textarea rows={4} className="w-full px-5 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan outline-none transition-all text-white placeholder-gray-600 resize-none" placeholder="Hello..." />
                    </div>
                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-neonCyan to-electricPurple font-bold text-white hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg shadow-neonCyan/20 flex items-center justify-center gap-2">
                        <Send size={20} />
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
    )
}
export default Contact
