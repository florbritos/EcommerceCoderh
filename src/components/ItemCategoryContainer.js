import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { arrayServicios } from "../data/arrayServicios";
import ItemCategory from "./ItemCategory";

const ItemCategoryContainer = () => {
  
  const {idCategory} = useParams()

  const [serviciosCat, setserviciosCat] = useState ([])

  useEffect(() => {
      console.log('Se esta creando el componente ItemCategoryContainer');
      getItems(idCategory);
  }, [idCategory])

  const getItems = (idCategory) => {

    const promise = new Promise ((resolve, reject) => {
      
      setTimeout(() => {
          console.log('esta es la categoria recibida', idCategory);
         let servicios = arrayServicios.filter( s => s.category == idCategory);
         setserviciosCat(servicios)
         console.log('Estos son los servicios encontrados', servicios);

          if(servicios){
              resolve(servicios)
          } else {
              reject('No se pudo entrar servicios de esa categoría')
          }
      }, 2000)   
    })

    promise.then ( resolve => {
      console.log(resolve);
    })
    .catch(reject => {
      console.log(reject);
    })
  }

  return (
    <div className="categoriaitems">
        <h1 className="mt-10 mb-10 font-medium text-2xl uppercase text-center">Tratamientos {idCategory}</h1>
        <div className="grid listaservicios categoriaitems xs:grid-cols-1 sm:grid-cols-2 w-fit mx-auto">
            {
            serviciosCat.map( s => <ItemCategory key={s.id} servicio={s}/>)
            }
        </div>
    </div>  
  )
}
export default ItemCategoryContainer