import { useEffect, useState } from "react";
import { arrayServicios } from "../data/arrayServicios";
import Item from "./Item";


const ItemList = () => {

    const [servicios, setServicios] = useState ([])

    useEffect(() => {
        console.log('Se esta creando el componente');
    

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (arrayServicios) {
                    resolve(arrayServicios)
                } else {
                    reject('No se han encontrado los servicios')
                }
            }, 2000)   
        })
        
        promise.then ( resolve => {
            setServicios(resolve)
        })
        .catch(reject => {
            console.log(reject);
        })

    }, [])

  return (
    <div className="listaservicios">
        <h2 className="mt-20 pt-10 pb-10 font-medium uppercase text-center">Nuestros servicios</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 w-fit mx-auto">
            {
            servicios.map( s => <Item key={s.id} servicio={s}/>)
            }
        </div>
    </div>  
    )
}
export default ItemList