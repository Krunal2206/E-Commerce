import { React, createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({});

    useEffect(() => {
        try {
            if (localStorage.getItem('cart')) {
                setCart(JSON.parse(localStorage.getItem('cart')))
            }
        } catch (error) {
            console.error(error)
            localStorage.clear()
        }
    }, []);

    const saveCart = (newCart) => {
        localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const addToCart = (itemCode, qty, price, name, size) => {
        let newCart = JSON.parse(JSON.stringify(cart));
        if (itemCode in cart) {
            newCart[itemCode].qty = newCart[itemCode].qty + qty;
            newCart[itemCode].size = size;
        } else {
            newCart[itemCode] = { qty: 1, price, name, size };
        }
        setCart(newCart)
        saveCart(newCart)
    }

    const removeFromCart = (itemCode, qty) => {
        let newCart = JSON.parse(JSON.stringify(cart));
        if (itemCode in cart) {
            newCart[itemCode].qty = newCart[itemCode].qty - qty;
        }
        if (newCart[itemCode].qty <= 0) {
            delete newCart[itemCode]
        }
        setCart(newCart)
        saveCart(newCart)
    }

    const clearCart = () => {
        setCart({})
        saveCart({})
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
