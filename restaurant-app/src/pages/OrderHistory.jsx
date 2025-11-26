import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const OrderHistory = () => {
    const orders = [
        {
            id: "#ORD-7829",
            date: "Nov 24, 2025",
            total: 85.50,
            status: "Delivered",
            items: "Truffle Risotto x1, Chocolate Lava Cake x2"
        },
        {
            id: "#ORD-7810",
            date: "Nov 15, 2025",
            total: 120.00,
            status: "Delivered",
            items: "Lobster Thermidor x2"
        },
        {
            id: "#ORD-7750",
            date: "Oct 30, 2025",
            total: 45.00,
            status: "Cancelled",
            items: "Wagyu Beef Burger x1, Fries x1"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return '#10b981';
            case 'Cancelled': return '#ef4444';
            default: return 'var(--color-primary)';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Delivered': return <CheckCircle size={16} />;
            case 'Cancelled': return <XCircle size={16} />;
            default: return <Clock size={16} />;
        }
    };

    return (
        <div className="page-container" style={{ paddingTop: '6rem', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <h1 className="text-gold text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Order History</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                    {orders.map((order) => (
                        <div key={order.id} style={{
                            backgroundColor: 'var(--color-surface)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                <div>
                                    <h3 style={{ color: 'var(--color-text)', fontSize: '1.2rem' }}>{order.id}</h3>
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{order.date}</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: getStatusColor(order.status),
                                    backgroundColor: `${getStatusColor(order.status)}20`,
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold'
                                }}>
                                    {getStatusIcon(order.status)}
                                    {order.status}
                                </div>
                            </div>

                            <div>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Items:</p>
                                <p style={{ color: 'var(--color-text)' }}>{order.items}</p>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                                <p style={{ color: 'var(--color-text)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                    Total: <span className="text-gold">${order.total.toFixed(2)}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
