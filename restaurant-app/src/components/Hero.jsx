import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                height: '100vh',
                width: '100%',
                backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                }}
            ></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <span
                    style={{
                        display: 'block',
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        marginBottom: '1rem',
                        fontWeight: '700',
                    }}
                >
                    Fine Dining Experience
                </span>
                <h1
                    style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        marginBottom: '2rem',
                        color: '#fff',
                    }}
                >
                    Taste the Essence of <br /> <span style={{ fontStyle: 'italic', color: 'var(--color-primary)' }}>Luxury</span>
                </h1>
                <p
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        fontSize: '1.1rem',
                        color: '#ddd',
                    }}
                >
                    Experience a culinary journey where tradition meets innovation.
                    Immerse yourself in an atmosphere of elegance and taste.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#reservations" className="btn">
                        Book a Table
                    </a>
                    <a href="#menu" className="btn btn-outline">
                        View Menu
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
