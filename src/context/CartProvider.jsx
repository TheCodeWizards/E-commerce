import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {


    const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []);

    const addToCart = (product) => {
        const itemInCart = cart.find((item) => item.id === product.id);

        if (itemInCart) {
            // Increase quantity if already in cart
            const updatedCart = cart.map((item) => {
                return product.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
            })

            setCart(updatedCart);
            toast.success("Product quantity increased!")
        }

        else {
            // Add new product to cart
            const updatedCart = [...cart, { ...product, quantity: 1 }];
            setCart(updatedCart);

            toast.success("Product is added to cart!")
        }
    }
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId)

        setCart(updatedCart)

        toast.success("Product is deleted from cart!")
    }
    const updateQuantity = (id, type) => {
        let updatedCart = cart.map((item) => {
            if (item.id === id) {
                if (type === 'increase') return { ...item, quantity: item.quantity + 1 };
                if (type === 'decrease') return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });

        // Remove items with quantity <= 0
        updatedCart = updatedCart.filter((item) => item.quantity > 0);

        setCart(updatedCart);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
    console.log('cart', cart)

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider