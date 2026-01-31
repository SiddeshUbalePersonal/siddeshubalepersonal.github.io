import { motion } from 'framer-motion'

const Section = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`min-h-screen flex flex-col justify-center py-20 px-4 md:px-12 relative ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto w-full"
            >
                {children}
            </motion.div>
        </section>
    )
}

export default Section
