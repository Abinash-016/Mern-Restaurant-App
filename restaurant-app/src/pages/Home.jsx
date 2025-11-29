import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuPreview from '../components/MenuPreview';
import Footer from '../components/Footer';
import { useShop } from '../context/ShopContext';

const Home = () => {
    const { user } = useShop();

    return (
        <div className="home-page">
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="hero-section" style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                position: 'relative',
                zIndex: 1
            }}>
                <div className="container fade-in-up">
                    <span style={{
                        display: 'block',
                        fontSize: '1.2rem',
                        letterSpacing: '5px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        color: 'var(--color-primary)'
                    }}>
                        {user ? `Welcome, ${user.name}!` : 'Welcome to Lumière'}
                    </span>
                    <h1 style={{
                        fontSize: '5rem',
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>Taste the Extraordinary</h1>
                    <p style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        lineHeight: '1.8'
                    }}>Experience a symphony of flavors in an atmosphere of timeless elegance.</p>
                    <Link to="/reservation" className="btn btn-lg">Book Your Experience</Link>
                </div>
            </section>

            {/* Quote Section */}
            <section className="quote-section" style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: 'rgba(21, 21, 21, 0.8)', backdropFilter: 'blur(5px)' }}>
                <div className="container">
                    <blockquote style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2.5rem',
                        fontStyle: 'italic',
                        color: 'var(--color-primary-light)',
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}>
                        "Cooking is an art, but all art requires knowing something about the techniques and materials."
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1.5rem', color: 'var(--color-text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        — Nathan Myhrvold
                    </cite>
                </div>
            </section>

            <MenuPreview />

            {/* About Section Preview */}
            <section id="about" className="section-padding">
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 400px', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '-20px',
                                width: '100%',
                                height: '100%',
                                border: '1px solid var(--color-primary)',
                                zIndex: 0
                            }}></div>
                            <img
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Chef plating dish"
                                style={{ width: '100%', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
                                Our Story
                            </span>
                            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>A Tradition of <br /><span style={{ color: '#fff' }}>Excellence</span></h2>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Founded in 2010, Lumière has been a beacon of fine dining, offering an exquisite blend of flavors and ambiance.
                                Our chefs use only the freshest, locally sourced ingredients to create masterpieces on a plate.
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                Whether you're celebrating a special occasion or simply enjoying a night out, we promise an experience that delights all senses.
                            </p>
                            <a href="#about" className="btn">Discover More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reservation CTA */}
            {/* Reservation CTA */}
            <section id="reservations" style={{
                padding: '8rem 0',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(5px)'
            }}>
                <div className="container">
                    <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' }}>
                        Book Your Table
                    </span>
                    <h2 style={{ fontSize: '4rem', marginBottom: '2rem', color: '#fff' }}>Culinary Excellence Awaits</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', color: '#ddd', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>
                        "One cannot think well, love well, sleep well, if one has not dined well."
                    </p>
                    <Link to="/reservation" className="btn" style={{ backgroundColor: 'var(--color-primary)', color: '#000', border: 'none' }}>Make a Reservation</Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
