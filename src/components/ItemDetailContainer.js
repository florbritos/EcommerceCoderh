import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../data/arrayServicios";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

  const {idItem} = useParams()
  const [servicioItem, setservicioItem] = useState ({})

  useEffect(() => {
    if (idItem== undefined){
      getItems().then((resolve) => setservicioItem(resolve))
    } else {
      getItems().then((resolve) => setservicioItem(resolve[idItem]))
    }
      
  }, [idItem])

  
  return (
    <div className="detalleitemdiv bg-cyan-100">
            <ItemDetail servicio= {servicioItem}/>
    </div>
  )
}
export default ItemDetailContainer