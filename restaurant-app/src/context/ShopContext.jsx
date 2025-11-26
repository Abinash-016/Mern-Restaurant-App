import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Truffle Risotto", price: 32, quantity: 1, image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
        { id: 2, name: "Pan Seared Scallops", price: 45, quantity: 2, image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
    ]);

    const [favorites, setFavorites] = useState([
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
    ]);

    const addToCart = (item) => {
        setCartItems(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const toggleFavorite = (item) => {
        setFavorites(prev => {
            if (prev.find(i => i.id === item.id)) {
                return prev.filter(i => i.id !== item.id);
            }
            return [...prev, item];
        });
    };

    return (
        <ShopContext.Provider value={{
            cartItems,
            favorites,
            addToCart,
            removeFromCart,
            updateQuantity,
            toggleFavorite
        }}>
            {children}
        </ShopContext.Provider>
    );
};
