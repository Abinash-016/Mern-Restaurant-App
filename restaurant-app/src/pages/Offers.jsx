import React, { useState } from 'react';

const Offers = () => {
    const [claimedOffers, setClaimedOffers] = useState([]);

    const offers = [
        {
            id: 1,
            title: "Chef's Special Tasting Menu",
            description: "Experience a 7-course journey through our finest creations. Includes wine pairing.",
            discount: "20% OFF",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            validUntil: "Valid until Nov 30"
        },
        {
            id: 2,
            title: "Romantic Dinner for Two",
            description: "A candlelit dinner with a complimentary bottle of champagne and dessert.",
            discount: "15% OFF",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            validUntil: "Valid on Weekends"
        },
        {
            id: 3,
            title: "Early Bird Special",
            description: "Dine between 5 PM and 7 PM and enjoy special pricing on selected entrees.",
            discount: "Flat $20 OFF",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            validUntil: "Mon - Thu"
        }
    ];

    const handleClaim = (id) => {
        if (!claimedOffers.includes(id)) {
            setClaimedOffers([...claimedOffers, id]);
            alert("Offer claimed successfully! Show this code to your server: OFFER-" + id + Math.floor(Math.random() * 1000));
        }
    };

    return (
        <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h1 className="text-gold text-center" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Exclusive Offers</h1>
                <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                    Indulge in our curated experiences designed to make your dining moments even more memorable.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {offers.map((offer) => (
                        <div key={offer.id} className="offer-card" style={{
                            backgroundColor: 'var(--color-surface)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(212, 175, 55, 0.1)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                <img src={offer.image} alt={offer.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    backgroundColor: 'var(--color-primary)',
                                    color: '#000',
                                    padding: '0.5rem 1rem',
                                    fontWeight: 'bold',
                                    borderRadius: '4px'
                                }}>
                                    {offer.discount}
                                </div>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ color: 'var(--color-text)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>{offer.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>{offer.description}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', letterSpacing: '1px' }}>{offer.validUntil}</span>
                                    <button
                                        onClick={() => handleClaim(offer.id)}
                                        className={claimedOffers.includes(offer.id) ? "btn" : "btn-outline"}
                                        style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem', backgroundColor: claimedOffers.includes(offer.id) ? 'var(--color-primary)' : 'transparent', color: claimedOffers.includes(offer.id) ? '#000' : 'var(--color-primary)' }}
                                        disabled={claimedOffers.includes(offer.id)}
                                    >
                                        {claimedOffers.includes(offer.id) ? "CLAIMED" : "CLAIM OFFER"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;
