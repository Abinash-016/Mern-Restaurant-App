import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const { favorites, toggleFavorite, addToCart } = useShop();

    if (favorites.length === 0) {
        return (
            <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>No Favorites Yet</h1>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Start exploring our menu to add some!</p>
                <Link to="/#menu" className="btn">Browse Menu</Link>
            </div>
        );
    }

    return (
        <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h1 className="text-gold text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Your Favorites</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {favorites.map((item) => (
                        <div key={item.id} style={{
                            backgroundColor: 'var(--color-surface)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <button
                                    onClick={() => toggleFavorite(item)}
                                    style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'rgba(0,0,0,0.5)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ef4444',
                                        cursor: 'pointer'
                                    }}>
                                    <Heart fill="#ef4444" size={20} />
                                </button>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                    <h3 style={{ color: 'var(--color-text)', fontSize: '1.4rem' }}>{item.name}</h3>
                                    <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem', fontWeight: 'bold' }}>${item.price}</span>
                                </div>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{item.description}</p>
                                <button
                                    onClick={() => addToCart(item)}
                                    className="btn-outline"
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <ShoppingCart size={18} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
