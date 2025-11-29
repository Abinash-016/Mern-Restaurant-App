import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart } = useShop();

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    if (cartItems.length === 0) {
        return (
            <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h1 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Cart is Empty</h1>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Looks like you haven't added anything yet.</p>
                <Link to="/#menu" className="btn">Browse Menu</Link>
            </div>
        );
    }

    return (
        <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h1 className="text-gold text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Your Order</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    {cartItems.map((item) => (
                        <div key={item.id} style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'var(--color-surface)',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover', marginRight: '1.5rem' }} />

                            <div style={{ flex: 1 }}>
                                <h3 style={{ color: 'var(--color-text)', marginBottom: '0.5rem' }}>{item.name}</h3>
                                <p style={{ color: 'var(--color-primary)' }}>₹{item.price}</p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginRight: '2rem' }}>
                                <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                >
                                    <Minus size={16} />
                                </button>
                                <span style={{ color: 'var(--color-text)', fontWeight: 'bold' }}>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ color: '#ef4444', background: 'none', cursor: 'pointer' }}
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}

                    <div style={{
                        backgroundColor: 'var(--color-surface)',
                        padding: '2rem',
                        borderRadius: '12px',
                        marginTop: '2rem',
                        border: '1px solid var(--color-primary)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                            <span>Subtotal</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                            <span>Tax (10%)</span>
                            <span>₹{tax.toFixed(2)}</span>
                        </div>
                        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '1rem 0' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--color-text)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            <span>Total</span>
                            <span className="text-gold">₹{total.toFixed(2)}</span>
                        </div>
                        <button className="btn" style={{ width: '100%', backgroundColor: 'var(--color-primary)', color: '#000' }}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
