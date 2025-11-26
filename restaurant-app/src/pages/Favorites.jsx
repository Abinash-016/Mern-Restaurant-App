import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const Favorites = () => {
    const favorites = [
        {
            id: 1,
            name: "Wagyu Beef Burger",
            price: 28,
            description: "Premium wagyu beef patty, truffle mayo, caramelized onions, brioche bun.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Lobster Thermidor",
            price: 55,
            description: "Whole lobster, creamy cognac sauce, gruyère cheese crust.",
            image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "Chocolate Lava Cake",
            price: 14,
            description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.",
            image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];

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
                                <button style={{
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
                                    color: '#ef4444'
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
                                <button className="btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
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
