import { useState } from "react";

const ItemCount = (props) => {

    const [count, setCount] = useState(0)
  
    const Sumar = () => {
        if (count < props.stock) {
            setCount(count+1);
        }
    }
  
    const Restar = () => {
        if (count>1) {
            setCount(count-1);
        }
        
    }
  
  
    return (
    <>
        <div class="text-lg mt-10">Sesión de depilación láser</div>
        <div class="btn-group w-fit mx-auto mt-10">
            <button onClick={Restar} class="btn"> - </button>
            <span class="w-14 numcount font-bold">{count}</span>
            <button onClick={Sumar} class="btn"> + </button>
        </div>

        <button class="btn btn-ghost rounded-none text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit m-auto mt-5 text-xs ">Agregar al carrito</button>
    </>
  )
}
export default ItemCount