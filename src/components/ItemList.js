import { useEffect, useState } from "react";

const ItemList = (props) => {

    const [servicios, setServicios] = useState ([])

    useEffect(() => {
        console.log('Se esta creando el componente');

        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (props.items) {
                    resolve(props.items)
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
        <h2 className="mt-20 font-medium uppercase">Lista de servicios</h2>
        <ul className="grid grid-cols-2 w-fit mx-auto">
            {
            servicios.map( servicio => 
            <li className="p-6" key={servicio.id}>
                <div className="card w-96 rounded-none bg-gray-200 shadow-xl ">
                    <figure>
                        <img src={servicio.pictureUrl} alt={servicio.title}/>
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">{servicio.title}<div className="badge bg-white border-none text-black">NEW</div></h3>
                        
                        <div className="flex justify-between"> 
                            <div className="flex items-end">
                                <p className="text-xl w-fit">${servicio.price}</p>
                            </div>
                            <button className="btn btn-ghost rounded-none text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit text-xs mt-3">Ver detalle</button> 
                            
                        </div>
                    </div>
                </div>
            </li>
            )
            }
        </ul>
    </div>  
    )
}
export default ItemList