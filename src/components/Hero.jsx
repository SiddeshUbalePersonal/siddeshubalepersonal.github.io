import { useEffect, useState } from 'react'
import anime from 'animejs'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = ({ data }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1500
        })
            .add({
                targets: '.hero-text',
                opacity: [0, 1],
                translateY: [100, 0],
                delay: anime.stagger(200, { start: 500 })
            })
            .add({ // Animation for image
                targets: '.hero-image',
                opacity: [0, 1],
                scale: [0.8, 1],
                rotate: [-5, 0],
                duration: 1800,
                offset: '-=1000'
            })

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
            <div style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }} className="absolute inset-0 z-0 transition-transform duration-100 ease-out">
                {/* Background is now global in App.jsx */}
            </div>

            <div className="z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} className="text-center md:text-left order-2 md:order-1 transition-transform duration-100 ease-out">
                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight opacity-0">
                        <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                            {data.name}
                        </span>
                    </h1>

                    <h2 className="hero-text text-2xl md:text-4xl font-light text-neonCyan mb-8 opacity-0">
                        {data.title}
                    </h2>

                    <p className="hero-text text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 mb-10 opacity-0 bg-black/10 backdrop-blur-sm p-4 rounded-xl border border-white/5">
                        {data.summary}
                    </p>

                    <div className="hero-text opacity-0 flex justify-center md:justify-start gap-4">
                        <a href="#projects" className="group px-8 py-3 rounded-full bg-neonCyan text-slate-950 font-bold hover:bg-neonCyan/80 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:-translate-y-1">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full bg-transparent border border-white/20 hover:bg-white/5 transition-colors text-white hover:border-white/40">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="hero-image opacity-0 order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-96 md:h-96" style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}>
                        {/* Decorative glowing rings */}
                        <div className="absolute inset-0 rounded-full border border-neonCyan/30 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute -inset-4 rounded-full border border-electricPurple/20 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-neonCyan/20 to-electricPurple/20 rounded-full blur-3xl opacity-30 animate-pulse" />

                        {/* Main Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl animate-float cursor-none"
                        >
                            <img
                                src="./images/hero-profile.jpg"
                                alt="Siddesh Ubale"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl animate-bounce delay-700">
                            <span className="text-2xl">🚀</span>
                            <span className="ml-2 text-sm font-bold text-white">Open to Work</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-white hidden md:block">
                <ArrowDown size={32} />
            </div>
        </div>
    )
}

export default Hero
