import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        padding: isScrolled ? '1rem 0' : '2rem 0',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)', letterSpacing: '2px', textDecoration: 'none', color: 'inherit' }}>
          LUMIÈRE
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <Link to="/" className="nav-link" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', color: 'var(--color-text-light)', textDecoration: 'none' }}>Home</Link>
          <a href="#menu" className="nav-link" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', color: 'var(--color-text-light)', textDecoration: 'none' }}>Menu</a>
          <a href="#about" className="nav-link" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', color: 'var(--color-text-light)', textDecoration: 'none' }}>About</a>
          <Link to="/reservation" className="btn-nav" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', textDecoration: 'none' }}>Book Table</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'none', color: 'inherit' }}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav >
  );
};

export default Navbar;
