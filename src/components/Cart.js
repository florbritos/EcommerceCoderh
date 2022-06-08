import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "./context/CartContext"

const Cart = () => {

  

    const {cart} = useCartContext()
    const {deleteFromCart} = useCartContext()
    const {calculoCart} = useCartContext()
    const {deleteCart} = useCartContext()
    const [buyer, setBuyer] = useState({})
    const [error, setError] = useState({
    nombre:null,
    telefono:null,
    email:null,
    })
    const [orden, setOrden] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      if (cart!==null) {
        setLoading(false);
      }
    }, [])
    
    let resultado= calculoCart();

    const handleSubmitChange = (e) => {
      
      switch(e.target.name){
        case "nombre":
          if(!isNaN(e.target.value)){
            setError({...error, [e.target.name]: 'Nombre no válido'});
          }else{
            setError({...error, [e.target.name]: null});
            setBuyer({ ...buyer, [e.target.name]: e.target.value })
          }
            break;
          case "telefono":
            if(isNaN(e.target.value) || e.target.value.trim()==""){
              setError({...error, [e.target.name]: 'Debe ingresar un número de teléfono'});
            }else{
              setError({...error, [e.target.name]: null});
              setBuyer({ ...buyer, [e.target.name]: e.target.value })
            }
            break;
          case "email":
            if(!isNaN(e.target.value)){
              setError({...error, [e.target.name]: 'Email no válido'});
            }else{
              setError({...error, [e.target.name]: null});
              setBuyer({ ...buyer, [e.target.name]: e.target.value })
            }
            break;
          default:  
      }
      
  }

    
    const realizarCompra = async (e) => {
      
      e.preventDefault()

      if(error.nombre==null && error.telefono==null && error.email==null){

        const serviciosFinales = cart.map( (c) =>( {"id": c.id, "title": c.title, "price": c.price} ) )
        
        const serviciosAComprar = {
        buyer: buyer,
        items: serviciosFinales,
        total: resultado[1],
        }
          

        const db = getFirestore();
        const orderCollection = collection(db, 'orders');

        const response = await addDoc(orderCollection,serviciosAComprar)
        setOrden(response.id); 
        
        const actualizarStock = () => {

          cart.forEach( (s) => {

            let stockFinal = s.stock - s.quantity;
            const stockServicios = doc(db, 'items', s.id)
            updateDoc(stockServicios,{stock: stockFinal});
          });
      
        }   
        actualizarStock();
        deleteCart();
      }
    }

  

  return (
  <>
    <h1 className="mt-10 pb-10 text-2xl font-medium uppercase text-center">Tu carrito</h1>
    
    {orden ? (
      <div className="w-fit mx-auto bg-rose-100 p-20 text">
        <h2 className="text-center text-xl mb-4">Gracias por tu compra!</h2>
        <p><span className="font-bold block">Orden de compra:</span> {orden}</p>
        <p className="font-bold underline decoration-solid mt-5">Datos del comprador</p>
        <p><span className="font-bold block text-sm">Nombre Completo: </span>{buyer.nombre}</p>
        <p><span className="font-bold block text-sm">Teléfono: </span>{buyer.telefono}</p>
        <p><span className="font-bold block text-sm">Email: </span>{buyer.email}</p>
      </div>
    ) : ("")}
    {cart.length !==0 ? (<p className="text-center mb-3">Total a pagar: <span className="text-2xl">${resultado[1]} </span></p>) : ( loading ? (<p>Cargando tu carrito...</p>) : ("") ) }

    <div className="flex flex-wrap justify-center">
    { cart.length !==0 ? (
        cart.map( (c) =>         
            <div className="card carritocard  bg-base-100 shadow-xl" key={c.id}>
              <figure><img src={c.pictureUrl} alt={c.title}/></figure>
              <div className="card-body">
                <h2 className="card-title">{c.title}</h2>
                <p>Precio por unidad: {c.price}</p>
                <p>Cantidad: {c.quantity}</p>
                <p>Precio total: {c.price*c.quantity}</p>
                <div className="card-actions">
                  <button  className="btn" onClick={() => deleteFromCart(c)}> Eliminar del carrito </button>
                </div>
              </div>
            </div>  
        )
      ) : ( loading ? ("") : (<><div className="text-center"> {orden ? ("") : (<p>No hay servicios en tu carrito</p>)}<Link to={'/'} className="btn mt-5">Ver más servicios</Link></div></>))
    }
    </div>
    { cart.length !==0 ? (
    <>
      <h2 className="text-center uppercase text-md mt-20">Para realizar la compra, por favor, llená el siguiente formulario</h2>
      <form onSubmit={realizarCompra} className="md:w-6/12 w-full mx-auto mt-5 md:p-0 p-2 text-center">
        <div className="my-4">
          <label className="block">Nombre Completo</label>
          <input type="text" name="nombre"  onChange={handleSubmitChange} required/>
          {
            error.nombre!==null ? (<p className="text-red-600 font-bold text-sm">Error: {error.nombre}</p>) : ("")
          }
          
        </div>
        <div className="my-4">
          <label className="block">Número de teléfono</label>
          <input type="text" name="telefono"  onChange={handleSubmitChange} required/>
          {
            error.telefono!==null ? (<p className="text-red-600 font-bold text-sm">Error: {error.telefono}</p>) : ("")
          }
        </div>
        <div className="my-4">
          <label className="block">Email</label>
          <input type="email" name="email"  onChange={handleSubmitChange} required/>
          {
            error.email!==null ? (<p className="text-red-600 font-bold text-sm">Error: {error.email}</p>) : ("")
          }
        </div>
        <input type="submit" className="btn botonCompra" value="Finalizar la compra"/>
      </form>
      <Link to={'/'} className=" botonSeguir uppercase">Seguir comprando</Link>
    </>
    ):("")}
  </>

  )
}
export default Cart