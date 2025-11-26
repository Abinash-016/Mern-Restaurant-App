import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#050505', padding: '5rem 0 2rem', borderTop: '1px solid #222' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand */}
                    <div>
                        <a href="#" style={{ fontSize: '2rem', fontWeight: '700', fontFamily: 'var(--font-heading)', letterSpacing: '2px', display: 'block', marginBottom: '1.5rem' }}>
                            LUMIÈRE
                        </a>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                            Elevating gastronomy to an art form. Join us for an unforgettable dining experience in the heart of the city.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <MapPin size={18} color="var(--color-primary)" />
                                <span>123 Culinary Avenue, New York, NY 10012</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Phone size={18} color="var(--color-primary)" />
                                <span>+1 (212) 555-0199</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Mail size={18} color="var(--color-primary)" />
                                <span>reservations@lumiere.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff' }}>Opening Hours</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)' }}>
                            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Mon - Thu</span>
                                <span>5:00 PM - 10:00 PM</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Fri - Sat</span>
                                <span>5:00 PM - 11:00 PM</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Sunday</span>
                                <span>4:00 PM - 9:30 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #222',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>&copy; 2024 Lumière Restaurant. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ color: '#666' }}><Instagram size={20} /></a>
                        <a href="#" style={{ color: '#666' }}><Facebook size={20} /></a>
                        <a href="#" style={{ color: '#666' }}><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
