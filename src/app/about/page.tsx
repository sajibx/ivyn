import { Users, Target, Rocket } from "lucide-react";

export default function About() {
    return (
        <div className="page-wrapper">
            <section className="hero-section" style={{ minHeight: '60vh', paddingBottom: '4rem' }}>
                <div className="hero-bg-gradient"></div>
                <div className="container hero-container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">About <span className="text-gradient">Ivyn</span></h1>
                        <p className="hero-subtitle">
                            We are a team of passionate engineers and designers dedicated to building software that matters.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-2 page-grid" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 className="section-title">Our Mission</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                                At Ivyn, we believe that great software has the power to transform businesses and improve lives.
                                Our mission is to empower organizations with cutting-edge technology solutions that are scalable,
                                secure, and beautifully designed.
                            </p>
                            <p style={{ fontSize: '1.125rem' }}>
                                Founded in 2026, we have partnered with hundreds of startups and enterprises to bring their
                                visions to life through innovative web and mobile applications.
                            </p>
                        </div>
                        <div className="glass-panel glass-panel-p">
                            <div className="grid" style={{ gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <Users className="text-secondary" style={{ color: 'var(--accent-primary)' }} size={32} />
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Expert Team</h3>
                                        <p className="text-secondary">Industry veterans with decades of combined experience.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <Target className="text-secondary" style={{ color: 'var(--accent-primary)' }} size={32} />
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Client Focused</h3>
                                        <p className="text-secondary">Your success is our ultimate metric.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <Rocket className="text-secondary" style={{ color: 'var(--accent-primary)' }} size={32} />
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Innovation First</h3>
                                        <p className="text-secondary">Always leveraging the latest and most reliable tech.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
