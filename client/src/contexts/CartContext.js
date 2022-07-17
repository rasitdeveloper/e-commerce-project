import { useState, createContext, useContext } from "react"

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [items,setItems] = useState([])

    const addToCart = (data, findCartItem) => {
        if(!findCartItem) {
            return setItems((items) => [data, ...items])
        }

        const filtered = items.filter((item) => item._id !== findCartItem._id)
        setItems(filtered)
    }

    const values = {
        items,
        setItems,
        addToCart,
    }

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>

}

const useCart = () => useContext(CartContext)

export {CartProvider, useCart}