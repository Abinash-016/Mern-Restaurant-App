import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const Toast = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success': return <CheckCircle size={20} />;
            case 'error': return <AlertCircle size={20} />;
            default: return <Info size={20} />;
        }
    };

    const getColors = () => {
        switch (type) {
            case 'success': return { bg: '#10b981', border: '#059669' };
            case 'error': return { bg: '#ef4444', border: '#dc2626' };
            default: return { bg: 'var(--color-primary)', border: '#b8860b' };
        }
    };

    const colors = getColors();

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            backgroundColor: 'var(--color-surface)',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            borderLeft: `4px solid ${colors.bg}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            zIndex: 2000,
            animation: 'slideIn 0.3s ease',
            minWidth: '300px'
        }}>
            <span style={{ color: colors.bg }}>{getIcon()}</span>
            <p style={{ margin: 0, fontSize: '0.95rem', flex: 1 }}>{message}</p>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 0, display: 'flex' }}>
                <X size={16} />
            </button>
            <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default Toast;
