import { useState } from "react";

const ItemCount = (props) => {

    const [count, setCount] = useState(0)
  
    const sumar = () => {
        if (count < props.stock) {
            setCount(count+1);
        }
    }
  
    const restar = () => {
        if (count>1) {
            setCount(count-1);
        }
        
    }
  
  
    return (
    <>
        <div className="text-lg mt-10">Sesión de depilación láser</div>
        <div className="btn-group w-fit mx-auto mt-10">
            <button onClick={restar} className="btn"> - </button>
            <span className="w-14 numcount font-bold">{count}</span>
            <button onClick={sumar} className="btn"> + </button>
        </div>

        <button className="btn btn-ghost rounded-none text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit m-auto mt-5 text-xs ">Agregar al carrito</button>
    </>
  )
}
export default ItemCount