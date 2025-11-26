import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Gift, Star, ShoppingCart, Heart, MapPin, Clock, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const dropdownItems = [
    { name: 'Offers', path: '/offers', icon: <Gift size={16} /> },
    { name: 'Reviews', path: '/reviews', icon: <Star size={16} /> },
    { name: 'Cart', path: '/cart', icon: <ShoppingCart size={16} /> },
    { name: 'Favorites', path: '/favorites', icon: <Heart size={16} /> },
    { name: 'Location', path: '/location', icon: <MapPin size={16} /> },
    { name: 'My Orders', path: '/orders', icon: <Clock size={16} /> },
    { name: 'Reservations', path: '/reservation', icon: <Calendar size={16} /> },
  ];

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
        <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" className="nav-link" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', color: 'var(--color-text-light)', textDecoration: 'none' }}>Home</Link>
          <Link to="/menu" className="nav-link" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', color: 'var(--color-text-light)', textDecoration: 'none' }}>Menu</Link>
          <a href="#about" className="nav-link" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', color: 'var(--color-text-light)', textDecoration: 'none' }}>About</a>

          {/* Dropdown */}
          <div className="dropdown-container" ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={toggleDropdown}
              style={{
                background: 'none',
                color: 'var(--color-text-light)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <User size={18} />
              <span>Account</span>
              <ChevronDown size={14} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }} />
            </button>

            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                width: '220px',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '8px',
                padding: '0.5rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
                animation: 'fadeIn 0.2s ease'
              }}>
                {dropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem 1rem',
                      color: 'var(--color-text-light)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      borderRadius: '4px',
                      transition: 'background 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                      e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'var(--color-text-light)';
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
