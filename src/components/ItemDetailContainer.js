import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, getDoc, doc} from "firebase/firestore";
import { useAppContext } from "./context/AppContext";

const ItemDetailContainer = () => {

  const {idItem} = useParams()
  const { services } = useAppContext()
  const [servicioItem, setservicioItem] = useState ([])
 

  useEffect(() => {

        const db = getFirestore();

        const busqueda = doc(db, "items", `${idItem}`);
        getDoc(busqueda).then((snapshot) => {
         setservicioItem({id: snapshot.id, ...snapshot.data()})
        })

      
  }, [idItem, services])


  return (
    <div className="flex flex-col justify-content-center align-items-center">
            { servicioItem.length==0? (<p className="text-center font-bold mt-10">Cargando Productos...</p>) : 
            ( 
              servicioItem.title ==null ? (<><p className="text-center font-bold mt-10">Producto no encontrado</p><Link to={'/'} className="btn mx-auto mt-5 w-fit">Ver más servicios</Link></>) : (<ItemDetail servicio= {servicioItem}/>)
            )}
            
    </div>
  )
}
export default ItemDetailContainer