import './globals.css'

export const metadata = {
    title: 'Siddesh Ubale - React Native & Web Developer Portfolio',
    description: 'Portfolio of Siddesh Ubale, a Lead Software Engineer specializing in React Native, React, Next.js, and Full-Stack JavaScript development.',
    keywords: 'Siddesh Ubale, React Native Developer, React Developer, Web Developer, Software Engineer, JavaScript, Frontend Developer',
    authors: [{ name: 'Siddesh Ubale' }],
    openGraph: {
        title: 'Siddesh Ubale - React Native & Web Developer',
        description: 'Lead Software Engineer specializing in React Native, React, Next.js. Explore my portfolio and resume.',
        url: 'https://siddeshubalepersonal.github.io/',
        siteName: 'Siddesh Ubale Portfolio',
        images: [
            {
                url: 'https://siddeshubalepersonal.github.io/images/hero-profile.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Siddesh Ubale - React Native & Web Developer',
        description: 'Lead Software Engineer specializing in React Native, React, Next.js. Explore my portfolio and resume.',
        images: ['https://siddeshubalepersonal.github.io/images/hero-profile.jpg'],
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Siddesh Ubale",
                            "url": "https://siddeshubalepersonal.github.io/",
                            "image": "https://siddeshubalepersonal.github.io/images/hero-profile.jpg",
                            "jobTitle": "Lead Software Engineer",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Freelance / Open to Work"
                            },
                            "sameAs": [
                                "https://github.com/SiddeshUbalePersonal",
                                "https://www.linkedin.com/in/siddesh-ubale"
                            ],
                            "knowsAbout": ["React Native", "React.js", "Next.js", "Web Development", "JavaScript", "TypeScript", "Mobile App Development"]
                        })
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
