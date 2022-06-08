import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find((servicio) => servicio.id == id)

    const addToCart = (servicio, cantidad)  => {

        
        const newCart = [...cart]
        const servicioIsInCart = isInCart(servicio.id)
        if (servicioIsInCart){
            newCart[newCart.findIndex((serv) => serv.id == servicioIsInCart.id)].quantity += cantidad 
            setCart(newCart)
            return
        }
        servicio.quantity = cantidad
        setCart([...newCart, servicio])
    }

    const deleteFromCart = (servicio) => {
        const newCart = [...cart]
        const servicioIsInCart = isInCart(servicio.id)

        if (!servicioIsInCart){
            return
        }
        
        const deleteService = newCart.filter((serv) => serv.id !== servicio.id)
        setCart(deleteService)
        
    }

    const deleteCart = () => setCart([])

    const calculoCart = () => {

        let totalCantidad=0;
        let totalPrecio=0;
    
        for (let i=0; i<cart.length; i++){
            
            totalCantidad += cart[i].quantity;
            totalPrecio += cart[i].price*cart[i].quantity;
        }

        return ([totalCantidad,totalPrecio])
    }

    console.log(cart);

  return (
    <CartContext.Provider value={{
        cart, addToCart,deleteFromCart,deleteCart,setCart,calculoCart,
    }}>{children}</CartContext.Provider>
  )
}
export default CartContextProvider