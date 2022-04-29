import { useEffect, useState } from "react";
import { arrayServicios } from "../data/arrayServicios";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (servicio) => {
debugger;
  const [servicioItem, setservicioItem] = useState ([])

  useEffect(() => {
      console.log('Se esta creando el componente ItemDetailContainer');

      var rand = Math.floor(Math.random()*arrayServicios.length);
      var rValue = arrayServicios[rand];
      console.log('este es el serviocio seleccionado', rValue);
      getItem(rValue);
  }, [])

  const getItem = (servicio) => {

    const promise = new Promise ((resolve, reject) => {
      setTimeout(() => {
          if (servicio) {
              resolve(servicio)
              
          } else {
              reject('No se pudo encontrar ese servicio')
          }
      }, 2000)   
    })

    promise.then ( resolve => {
      setservicioItem(resolve)
      console.log('Esto es que resolvió la promise  y lo guardó', resolve);
    })
  .catch(reject => {
      console.log(reject);
    })
    
  }
  

  return (
    <div>
        <h2 className="mt-20 font-medium">Servicio seleccionado:</h2>
            <ItemDetail servicio= {servicioItem}/>
    </div>
  )
}
export default ItemDetailContainer