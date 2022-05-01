import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { arrayServicios } from "../data/arrayServicios";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const {idItem} = useParams()

  const [servicioItem, setservicioItem] = useState ([])

  useEffect(() => {
      console.log('Se esta creando el componente ItemDetailContainer');
      getItem(idItem);
  }, {})

  const getItem = (idItem) => {

    const promise = new Promise ((resolve, reject) => {
      setTimeout(() => {
       
         let servicio = arrayServicios.filter( s => s.id == idItem);
         setservicioItem(servicio[0])

          if(servicio){
              resolve(servicio)
          } else {
              reject('No se pudo encontrar ese servicio')
          }
      }, 2000)   
    })

    promise.then ( resolve => {
      console.log('Esto es que resolvió la promise  y lo guardó', resolve);
    })
  .catch(reject => {
      console.log(reject);
    })
    
  }
  

  return (
    <div className="detalleitemdiv bg-cyan-100">
            <ItemDetail servicio= {servicioItem}/>
    </div>
  )
}
export default ItemDetailContainer