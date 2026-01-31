import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = ({ data }) => {
    const { theme } = useTheme();

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.fromTo('.hero-text',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, delay: 0.2 }
        );
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 transition-all duration-[1500ms] ease-in-out">
            {/* Dark Mode: Cinematic Left-Side Image Background */}
            <AnimatePresence>
                {theme === 'dark' && (
                    <motion.div
                        layoutId="hero-image-wrapper"
                        className="absolute inset-y-0 left-0 w-full md:w-[65%] z-0 overflow-hidden"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.img
                            layoutId="hero-image"
                            src="./images/hero-profile.jpg"
                            alt={data.name}
                            className="w-full h-full object-cover object-top filter grayscale contrast-125 opacity-20 md:opacity-50"
                        />
                        {/* Gradient Masks: Fade into right (content) and bottom */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bg/40 to-bg" />
                        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg md:from-bg/10" />
                        {/* Mobile specific darker overlay */}
                        <div className="absolute inset-0 bg-bg/30 md:hidden" />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative h-full">

                {/* Text Section - Swaps position based on theme */}
                <motion.div
                    layout
                    className={`parallax-target flex flex-col items-center md:items-start text-center relative z-20 
                        ${theme === 'dark' ? 'md:col-start-2 md:text-right md:items-end' : 'md:col-start-1 md:text-left md:items-start'}
                    `}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tight text-primary">
                        {data.name.toUpperCase()}
                    </h1>

                    <h2 className="hero-text text-2xl md:text-4xl font-light text-accent mb-8 tracking-widest uppercase">
                        {data.title}
                    </h2>

                    <p className={`hero-text text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-medium ${theme === 'dark' ? 'ml-auto' : ''}`}>
                        {data.summary}
                    </p>

                    <div className="hero-text flex gap-4">
                        <a href="#projects" className="px-8 py-4 rounded-none bg-primary text-bg font-bold hover:bg-accent hover:text-primary transition-all shadow-xl">
                            VIEW WORK
                        </a>
                        <a href="#contact" className="px-8 py-4 rounded-none bg-transparent border-2 border-primary text-primary font-bold hover:bg-primary hover:text-bg transition-colors">
                            CONTACT ME
                        </a>
                    </div>
                </motion.div>

                {/* Light Mode: Card Image Section */}
                <div className={`hero-image-container parallax-target flex justify-center md:justify-end h-72 md:h-[500px] 
                    ${theme === 'dark' ? 'hidden' : 'md:col-start-2'}
                `}>
                    <AnimatePresence mode="popLayout">
                        {theme === 'light' && (
                            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                                <motion.div
                                    layoutId="hero-image-wrapper"
                                    className="relative w-full h-full rounded-none overflow-hidden shadow-2xl border-4 border-primary bg-white z-10"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <motion.img
                                        layoutId="hero-image"
                                        src="./images/hero-profile.jpg"
                                        alt={data.name}
                                        className="w-full h-full object-cover grayscale-0"
                                    />
                                </motion.div>

                                {/* Decorative elements for Light Mode */}
                                <div className="absolute -z-10 top-4 -right-4 w-full h-full border-2 border-accent" />
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-secondary hidden md:block">
                <ArrowDown size={24} />
            </div>
        </section>
    );
};

export default Hero;