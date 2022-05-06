import { useState } from "react";

const ItemCount = (props) => {

    const [count, setCount] = useState(1)
  
    const sumar = () => {
        if (count < props.stock) {
            setCount(count+1);
        }
    }
  
    const restar = () => {
        if (count> 1) {
            setCount(count-1);
        }
        
    }
  
  
    return (
    <>
        <div className="container flex flex-col md:flex-row md:items-end justify-center flex-columns items-center">
            <div className="btn-group w-fit  my-3 md:my-0 mx-3">
                <button onClick={restar} className="btn"> - </button>
                <span className="w-14 numcount text-center font-bold">{count}</span>
                <button onClick={sumar} className="btn"> + </button>
            </div>
            <button onClick={ () => props.onAdd()} className=" my-3 md:my-0 mx-3 btn btn-ghost rounded-none text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit text-xs ">Agregar al carrito</button>
        </div>
    </>
  )
}
export default ItemCount


