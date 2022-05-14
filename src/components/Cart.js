import { Link } from "react-router-dom"
import { useCartContext } from "./context/CartContext"

const Cart = () => {

    const {cart} = useCartContext()
    const {deleteFromCart} = useCartContext()
    //const { countCart } = useCartContext()

  return (
  <>
    <h1>Tu carrito</h1>
    <p>Totales:</p>

    { cart.length !==0 ? (
        cart.map( (c) =>         
            <div class="card lg:card-side bg-base-100 shadow-xl" key={c.id}>
              <figure><img src={c.pictureUrl} alt={c.title}/></figure>
              <div class="card-body">
                <h2 class="card-title">{c.title}</h2>
                <p>Precio por unidad: {c.price}</p>
                <p>Cantidad: {c.quantity}</p>
                <p>Precio total: {c.price*c.quantity}</p>
                <div class="card-actions justify-end">
                  <button  className="btn" onClick={() => deleteFromCart(c)}> Eliminar del carrito </button>
                </div>
              </div>
            </div>  
        )
      ) : ( <div><p>No hay servicios en tu carrito</p><Link to={'/'} className="btn">Ver más servicios</Link></div> )
    }
  </>
  )
}
export default Cart