import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, getDoc, doc} from "firebase/firestore";

const ItemDetailContainer = () => {

  const {idItem} = useParams()
  const [servicioItem, setservicioItem] = useState ([])
  
  useEffect(() => {

    console.log('se monta el useeffect')
     const db = getFirestore();

     const busqueda = doc(db, "items", `${idItem}`);
     getDoc(busqueda).then((snapshot) => {
      setservicioItem({id: snapshot.id, ...snapshot.data()})
     })

      
  }, [idItem])


  return (
    <div className="detalleitemdiv bg-cyan-100">
            
            <ItemDetail servicio= {servicioItem}/>
    </div>
  )
}
export default ItemDetailContainer