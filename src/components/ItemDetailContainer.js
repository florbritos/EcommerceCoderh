import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFirestore, getDoc, doc} from "firebase/firestore";
import { useAppContext } from "./context/AppContext";

const ItemDetailContainer = () => {

  const {idItem} = useParams()
  const { services } = useAppContext()
  const [servicioItem, setservicioItem] = useState ([])
  //const [servicioItem, setservicioItem] = useState ({})
  
  //console.log('estos son los services en el itemdetail', services)

  useEffect(() => {

    //console.log('se monta el useEffect')
    //console.log('este es el IDItem', idItem)

      // if (idItem == undefined){
      //   setservicioItem(services)
      // } else {
      //   setservicioItem(services[idItem])
      //   const db = getFirestore();

      //   const busqueda = doc(db, "items", `${idItem}`);
      //   getDoc(busqueda).then((snapshot) => {
      //    setservicioItem({id: snapshot.id, ...snapshot.data()})
      //   })
      // }


        const db = getFirestore();

        const busqueda = doc(db, "items", `${idItem}`);
        getDoc(busqueda).then((snapshot) => {
         setservicioItem({id: snapshot.id, ...snapshot.data()})
        })

      
  }, [idItem, services])


  return (
    <div className="detalleitemdiv bg-cyan-100">
            
            <ItemDetail servicio= {servicioItem}/>
    </div>
  )
}
export default ItemDetailContainer