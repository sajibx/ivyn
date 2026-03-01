"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link href="/" className="logo">
                    Ivyn<span className="text-gradient">.</span>
                </Link>
                <nav className="nav-links">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </nav>
                <Link href="/contact" className="btn btn-primary">
                    Get Started
                </Link>
            </div>
        </header>
    );
}
