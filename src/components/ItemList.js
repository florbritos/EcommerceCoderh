import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { arrayServicios } from "../data/arrayServicios";
import Item from "./Item";


const ItemList = () => {


    const {idCategory} = useParams()

    const [serviciosCat, setserviciosCat] = useState ([])

    useEffect(() => {
        console.log('Se esta creando el componente Item List');

        if(idCategory===undefined){
            getItems().then( (resolve) =>  setserviciosCat(resolve) )
       
        }else{
            getItems().then( resolve => { setserviciosCat(resolve.filter( s => s.category == idCategory)) })

        }

    }, [idCategory])


    const getItems = () => { return promise }
        
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (arrayServicios) {
                resolve(arrayServicios)
                console.log('Se encontraron los servicios', arrayServicios);
            } else {
                reject('No se han encontrado los servicios')
            }
        }, 2000)   
    })
        

  return (
    <div className="listaservicios">
        <h2 className="mt-20 pt-10 pb-10 font-medium uppercase text-center">Nuestros servicios</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 w-fit mx-auto">
            {
            serviciosCat.map( s => <Item key={s.id} servicio={s}/>)
            }
        </div>
    </div>  
    )
}
export default ItemList