import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from './ToastContext';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [user, setUser] = useState(null);
    const { showToast } = useToast();

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cartItems');
        const savedFavorites = localStorage.getItem('favorites');
        const savedUser = localStorage.getItem('user');
        if (savedCart) setCartItems(JSON.parse(savedCart));
        if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
        if (savedUser) setUser(JSON.parse(savedUser));
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('favorites', JSON.stringify(favorites));
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [cartItems, favorites, user]);

    const login = (userData) => {
        setUser(userData);
        showToast(`Welcome back, ${userData.name}!`, 'success');
    };

    const logout = () => {
        setUser(null);
        showToast('Logged out successfully', 'info');
    };

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                showToast(`Updated quantity for ${item.name}`, 'success');
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            showToast(`Added ${item.name} to cart`, 'success');
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        const item = cartItems.find(i => i.id === id);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
        if (item) showToast(`Removed ${item.name} from cart`, 'info');
    };

    const updateQuantity = (id, delta) => {
        setCartItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: Math.max(0, item.quantity + delta) };
                }
                return item;
            }).filter(item => item.quantity > 0)
        );
    };

    const toggleFavorite = (item) => {
        setFavorites((prev) => {
            const exists = prev.some((i) => i.id === item.id);
            if (exists) {
                showToast(`Removed ${item.name} from favorites`, 'info');
                return prev.filter((i) => i.id !== item.id);
            }
            showToast(`Added ${item.name} to favorites`, 'success');
            return [...prev, item];
        });
    };

    return (
        <ShopContext.Provider value={{ cartItems, favorites, user, addToCart, removeFromCart, updateQuantity, toggleFavorite, login, logout }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    return useContext(ShopContext);
};
