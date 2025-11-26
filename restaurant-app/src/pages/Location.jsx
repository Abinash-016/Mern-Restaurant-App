import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
    return (
        <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h1 className="text-gold text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Find Us</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {/* Map Placeholder */}
                    <div style={{
                        width: '100%',
                        height: '400px',
                        backgroundColor: '#2a2a2a',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--color-primary)'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg)' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Contact Info</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <MapPin className="text-gold" />
                                    <p style={{ color: 'var(--color-text-muted)' }}>123 Culinary Avenue,<br />Gourmet District, NY 10012</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Phone className="text-gold" />
                                    <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 123-4567</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Mail className="text-gold" />
                                    <p style={{ color: 'var(--color-text-muted)' }}>reservations@lumiere.com</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'var(--color-surface)', padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Opening Hours</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-text-muted)' }}>Monday - Thursday</span>
                                    <span style={{ color: 'var(--color-text)' }}>5:00 PM - 10:00 PM</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-text-muted)' }}>Friday - Saturday</span>
                                    <span style={{ color: 'var(--color-text)' }}>5:00 PM - 11:00 PM</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    <span style={{ color: 'var(--color-text-muted)' }}>Sunday</span>
                                    <span style={{ color: 'var(--color-text)' }}>4:00 PM - 9:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
