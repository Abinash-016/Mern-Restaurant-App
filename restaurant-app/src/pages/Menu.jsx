import React, { useState } from 'react';
import { menuData } from '../data/menuData';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Heart } from 'lucide-react';

import Navbar from '../components/Navbar';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const { addToCart, toggleFavorite, favorites } = useShop();

    const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];

    const filteredItems = activeCategory === 'All'
        ? menuData
        : menuData.filter(item => item.category === activeCategory);

    const isFavorite = (id) => favorites.some(item => item.id === id);

    return (
        <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <Navbar />
            <div className="container">
                <h1 className="text-gold text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Menu</h1>
                <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Discover our culinary masterpieces, crafted with passion and the finest ingredients.
                </p>

                {/* Category Filter */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={activeCategory === category ? 'btn' : 'btn-outline'}
                            style={{ minWidth: '100px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredItems.map((item) => (
                        <div key={item.id} style={{
                            backgroundColor: 'var(--color-surface)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            transition: 'transform 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
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
                                        color: isFavorite(item.id) ? '#ef4444' : 'white',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}>
                                    <Heart fill={isFavorite(item.id) ? "#ef4444" : "none"} size={20} />
                                </button>
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                    <h3 style={{ color: 'var(--color-text)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{item.name}</h3>
                                    <span style={{ color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 'bold' }}>₹{item.price}</span>
                                </div>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>{item.description}</p>

                                <button
                                    onClick={() => addToCart(item)}
                                    className="btn-outline"
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem' }}
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

export default Menu;
