import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Background3D from './components/Background3D'
import data from './data.json'

function App() {
    return (
        <HashRouter>
            <div className="bg-slate-950 min-h-screen text-white selection:bg-neonCyan selection:text-slate-950 font-sans cursor-none relative">
                <CustomCursor />

                {/* Global Fixed Background */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <Background3D />
                </div>

                <Navbar />

                <main className="relative z-10">
                    <Hero data={data.profile} />

                    {/* Transition Gradient */}
                    <div className="relative w-full h-40 bg-gradient-to-b from-transparent to-slate-950/90 pointer-events-none -mb-1" />

                    {/* Main Content with Stronger Glass Effect */}
                    <div className="bg-slate-950/90 backdrop-blur-xl pb-20 shadow-2xl overflow-hidden border-t border-white/5">
                        <About data={data} />
                        <Experience data={data} />
                        <Projects data={data} />
                        <Contact data={data} />
                    </div>
                </main>
                <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-slate-950 relative z-10">
                    <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
                    <p className="mt-2 text-xs opacity-50">Built with React, Tailwind & Three.js</p>
                </footer>
            </div>
        </HashRouter>
    )
}

export default App
