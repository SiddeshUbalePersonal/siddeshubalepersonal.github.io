"use client";

import { ThemeProvider } from '../context/ThemeContext'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Background3D from './Background3D'
import data from '../data/data.json'

export default function ClientHome() {
    return (
        <ThemeProvider>
            <div className="bg-bg min-h-screen text-primary selection:bg-accent/30 selection:text-white font-sans relative transition-colors duration-[1500ms] ease-in-out">
                {/* Global Fixed Background */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <Background3D />
                </div>

                <Navbar />

                <main className="relative z-10">
                    <Hero data={data.profile} />

                    {/* Transition Gradient */}
                    <div className="relative w-full h-40 bg-gradient-to-b from-transparent to-bg/90 pointer-events-none -mb-1" />

                    {/* Main Content */}
                    <div className="bg-bg/80 backdrop-blur-md pb-20 shadow-2xl overflow-hidden border-t border-surface">
                        <About data={data} />
                        <Experience data={data} />
                        <Projects data={data} />
                        <Contact data={data} />
                    </div>
                </main>
                <footer className="py-8 text-center text-secondary text-sm border-t border-surface bg-bg relative z-10">
                    <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
                    <p className="mt-2 text-xs opacity-50">Built with React, Next.js, Tailwind & Three.js</p>
                </footer>
            </div>
        </ThemeProvider>
    )
}
