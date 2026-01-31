import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) setScrolled(true)
            else setScrolled(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    const handleNavClick = (href) => {
        setIsOpen(false)
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const [showHint, setShowHint] = useState(true)

    const handleThemeToggle = () => {
        toggleTheme()
        setShowHint(false)
    }

    useEffect(() => {
        // Hide hint after 10 seconds automatically if not clicked
        const timer = setTimeout(() => setShowHint(false), 8000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-surface py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-primary tracking-tighter hover:text-accent transition-colors">
                    Siddesh.dev
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.href)}
                            className="text-secondary hover:text-accent transition-colors font-medium text-sm tracking-wide"
                        >
                            {link.name.toUpperCase()}
                        </button>
                    ))}

                    {/* Theme Toggle with Hint */}
                    <div className="relative">
                        <button
                            onClick={handleThemeToggle}
                            className="p-2 rounded-full hover:bg-surface text-primary transition-colors relative z-10"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Pulse Ring */}
                        {showHint && (
                            <span className="absolute inset-0 rounded-full border border-accent/50 animate-ping opacity-75"></span>
                        )}

                        {/* Text Hint */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max bg-accent text-bg text-xs font-bold py-1 px-3 rounded-full shadow-lg transition-all duration-500 transform ${showHint ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rotate-45"></div>
                            CLICK ME ⚡
                        </div>
                    </div>

                    <a href="#contact" className="px-5 py-2 rounded-full bg-surface border border-primary/10 hover:border-accent text-primary hover:text-accent transition-all text-sm font-medium">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <div className="relative">
                        <button
                            onClick={handleThemeToggle}
                            className="p-2 rounded-full hover:bg-surface text-primary transition-colors relative z-10"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Mobile Pulse Ring */}
                        {showHint && (
                            <span className="absolute inset-0 rounded-full border border-accent/50 animate-ping opacity-75"></span>
                        )}

                        {/* Mobile Hint - Positioned below */}
                        <div className={`absolute top-full right-0 mt-2 w-max bg-accent text-bg text-[10px] font-bold py-1 px-2 rounded-md shadow-lg transition-all duration-500 transform ${showHint ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                            TAP ME ⚡
                        </div>
                    </div>

                    <button onClick={() => setIsOpen(!isOpen)} className="text-primary focus:outline-none">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-surface p-6 flex flex-col space-y-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.href)}
                            className="text-left text-primary hover:text-accent text-lg py-2 border-b border-surface"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
