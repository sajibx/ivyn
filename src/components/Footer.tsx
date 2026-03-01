import Link from 'next/link';

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <Link href="/" className="logo">Ivyn<span className="text-gradient">.</span></Link>
                        <p style={{ marginTop: '1rem', maxWidth: '300px' }}>
                            Building the next generation of scalable, beautifully designed software products.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link href="/about" className="nav-link">About Us</Link>
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ivyn. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
