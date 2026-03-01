"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "d275a862-cb96-4159-9f3a-ca5420a0c8ed");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ type: 'success', message: "Success! Your message has been sent." });
                form.reset();
            } else {
                setSubmitStatus({ type: 'error', message: "Error: " + data.message });
            }
        } catch (error) {
            setSubmitStatus({ type: 'error', message: "Something went wrong. Please try again." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="page-wrapper">
            <section className="hero-section" style={{ minHeight: '50vh', paddingBottom: '2rem' }}>
                <div className="hero-bg-gradient"></div>
                <div className="container hero-container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">Get in <span className="text-gradient">Touch</span></h1>
                        <p className="hero-subtitle">
                            We&apos;d love to hear about your project. Reach out to us and let&apos;s start a conversation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
                        <div>
                            <h2 className="section-title">Contact Information</h2>
                            <p style={{ marginBottom: '3rem', fontSize: '1.125rem' }}>
                                Fill out the form to the right, or get in touch with us via email or phone.
                                Our team typically responds within 24 hours.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div className="service-icon" style={{ margin: 0, width: '60px', height: '60px', flexShrink: 0 }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Email Us</h4>
                                        <p className="text-secondary">ashiqur.sajib@gmail.com</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div className="service-icon" style={{ margin: 0, width: '60px', height: '60px', flexShrink: 0 }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Call Us</h4>
                                        <p className="text-secondary">+88 0141 0026 006</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div className="service-icon" style={{ margin: 0, width: '60px', height: '60px', flexShrink: 0 }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Our Office</h4>
                                        <p className="text-secondary">Gulshan avenue, Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel" style={{ padding: '3rem' }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {submitStatus.message && (
                                    <div style={{
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        backgroundColor: submitStatus.type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                        border: `1px solid ${submitStatus.type === 'success' ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'}`,
                                        color: submitStatus.type === 'success' ? '#4ade80' : '#f87171'
                                    }}>
                                        {submitStatus.message}
                                    </div>
                                )}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="name" style={{ fontWeight: 500 }}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid var(--border-color)',
                                            color: 'white',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="email" style={{ fontWeight: 500 }}>Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid var(--border-color)',
                                            color: 'white',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="message" style={{ fontWeight: 500 }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        style={{
                                            padding: '1rem',
                                            borderRadius: '8px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid var(--border-color)',
                                            color: 'white',
                                            fontFamily: 'inherit',
                                            resize: 'vertical'
                                        }}
                                    ></textarea>
                                </div>
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
