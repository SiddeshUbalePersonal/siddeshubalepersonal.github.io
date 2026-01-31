import Section from './Section'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'

const Contact = ({ data }) => {
    return (
        <Section id="contact" className="pb-32">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-primary tracking-tight">
                GET IN TOUCH
            </h2>

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
                <div>
                    <h3 className="text-3xl font-bold text-primary mb-6">Let's Connect</h3>
                    <p className="text-secondary leading-relaxed text-lg max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out directly!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 w-full">
                    {/* Email */}
                    <a href={`mailto:${data.profile.email}`} className="group p-8 rounded-3xl bg-surface border border-primary/5 hover:border-accent hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-4">
                        <div className="p-4 rounded-full bg-bg border border-primary/5 text-accent group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <span className="text-lg font-medium text-primary group-hover:text-accent transition-colors break-all">
                            {data.profile.email}
                        </span>
                    </a>

                    {/* Phone */}
                    <a href="tel:+918766479092" className="group p-8 rounded-3xl bg-surface border border-primary/5 hover:border-accent hover:shadow-2xl transition-all duration-300 flex flex-col items-center space-y-4">
                        <div className="p-4 rounded-full bg-bg border border-primary/5 text-accent group-hover:scale-110 transition-transform">
                            <Phone size={32} />
                        </div>
                        <span className="text-lg font-medium text-primary group-hover:text-accent transition-colors">
                            +91 8766479092
                        </span>
                    </a>

                    {/* Location */}
                    <div className="group p-8 rounded-3xl bg-surface border border-primary/5 flex flex-col items-center space-y-4">
                        <div className="p-4 rounded-full bg-bg border border-primary/5 text-accent">
                            <MapPin size={32} />
                        </div>
                        <span className="text-lg font-medium text-primary">
                            {data.profile.location}
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 pt-8">
                    {/* GitHub Personal */}
                    <a href="https://github.com/SiddeshUbalePersonal" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-6 py-3 rounded-full bg-surface border border-primary/10 hover:bg-primary hover:text-bg transition-all text-primary group shadow-sm">
                        <Github size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">GitHub (Personal)</span>
                    </a>

                    {/* GitHub Professional */}
                    <a href="https://github.com/siddeshubale" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-6 py-3 rounded-full bg-surface border border-primary/10 hover:bg-primary hover:text-bg transition-all text-primary group shadow-sm">
                        <Github size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">GitHub (Work)</span>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/siddesh-ubale-a6255a220" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-6 py-3 rounded-full bg-surface border border-primary/10 hover:bg-primary hover:text-bg transition-all text-primary group shadow-sm">
                        <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">LinkedIn</span>
                    </a>
                </div>
            </div>
        </Section>
    )
}
export default Contact
