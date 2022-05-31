import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "./context/CartContext"

const Cart = () => {

    const {cart} = useCartContext()
    const {deleteFromCart} = useCartContext()
    const {deleteCart} = useCartContext()

    let totalCantidad=0;
    let totalPrecio=0;

    //console.log('este es el cart en cart.js', cart);

    for (let i=0; i<cart.length; i++){
        
        totalCantidad += cart[i].quantity;
        totalPrecio += cart[i].price*cart[i].quantity;
        //console.log('este es el cart en cart.js', totalCantidad,totalPrecio)

    }
    
    const realizarCompra = async () => {
     
      const buyer = {
        name: 'Nicolas Barragán',
        phone: '+54911112222',
        email:'nicolasbarragan@hotmail.com',        
      }

      const serviciosFinales = cart.map( (c) =>( {"id": c.id, "title": c.title, "price": c.price} ) )
      
      const serviciosAComprar = {
      buyer: buyer,
      items: serviciosFinales,
      total: totalPrecio,
      }
        
      //console.log('esta es la orden de compra', serviciosAComprar);

      const db = getFirestore();
      const orderCollection = collection(db, 'orders');

      const response = await addDoc(orderCollection,serviciosAComprar)
      let idOrder = response.id;
      alert(`¡Gracias por su compra! la orden generada es #${idOrder}`);
      
      
      const actualizarStock = () => {

        cart.forEach( (s) => {
          console.log('Este es el stock existente', s.stock);
          console.log('Este es lo que resto', s.quantity);

          let stockFinal = s.stock - s.quantity;

          
          //console.log('Este es el stock final', stockFinal)

          const stockServicios = doc(db, 'items', s.id)
          updateDoc(stockServicios,{stock: stockFinal});
        });
    
      }   
      actualizarStock();
      deleteCart();
    }

  

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
    { cart.length !==0 ? (<button className="btn" onClick= {realizarCompra }>Realizar compra</button>):("")}
  </>
  )
}
export default Cart