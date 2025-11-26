import React from 'react';

const dishes = [
    {
        id: 1,
        name: 'Gourmet Burger',
        description: 'Juicy beef patty, cheddar cheese, fresh lettuce, and tomato on a brioche bun.',
        price: '$18',
        image: '/img/burger.png'
    },
    {
        id: 2,
        name: 'Pepperoni Pizza',
        description: 'Classic pepperoni pizza with melted mozzarella and fresh basil.',
        price: '$22',
        image: '/img/pizza.png'
    },
    {
        id: 3,
        name: 'Garden Salad',
        description: 'Fresh mixed greens, cherry tomatoes, cucumber, and vinaigrette.',
        price: '$14',
        image: '/img/salad.png'
    },
    {
        id: 4,
        name: 'Chocolate Lava Cake',
        description: 'Decadent chocolate cake with a molten center, served with vanilla ice cream.',
        price: '$12',
        image: '/img/dessert.png'
    }
];

import { Link } from 'react-router-dom';

const MenuPreview = () => {
    return (
        <section id="menu" className="section-padding" style={{ backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>
                        Our Specialties
                    </span>
                    <h2 style={{ fontSize: '3rem', marginTop: '0.5rem' }}>Featured Menu</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {dishes.map((dish) => (
                        <div key={dish.id} style={{ backgroundColor: 'var(--color-bg)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ height: '250px', overflow: 'hidden' }}>
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{dish.name}</h3>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '1.2rem' }}>{dish.price}</span>
                                </div>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{dish.description}</p>
                                <Link to="/menu" style={{ color: 'var(--color-primary)', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>
                                    Order Now &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '4rem' }}>
                    <Link to="/menu" className="btn btn-outline">View Full Menu</Link>
                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
