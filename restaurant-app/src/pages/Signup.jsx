import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup:', { name, email, password });
    };

    return (
        <div style={{
            minHeight: '100vh',
            backgroundImage: 'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 1
            }}></div>

            <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10 }}>
                <Navbar />
            </div>

            <div style={{
                position: 'relative',
                zIndex: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                padding: '3rem',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '450px',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            }}>
                <h2 style={{
                    color: '#fff',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem'
                }}>Create Account</h2>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '5px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                color: '#fff',
                                outline: 'none'
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '5px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                color: '#fff',
                                outline: 'none'
                            }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                            <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '5px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    color: '#fff',
                                    outline: 'none'
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                            <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Confirm</label>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem',
                                    borderRadius: '5px',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    color: '#fff',
                                    outline: 'none'
                                }}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', marginBottom: '1rem' }}>
                        Sign Up
                    </button>

                    <div style={{ textAlign: 'center', marginTop: '1rem', color: '#ccc' }}>
                        Already have an account? <Link to="/login" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
