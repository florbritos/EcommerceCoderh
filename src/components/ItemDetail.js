import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"

const ItemDetail = ({servicio}) => {  

  const {id, title, description, price, pictureUrl, stock} = servicio

  console.log('Este es el servicio llegado', servicio)

  const [eliminar, setEliminar] = useState(false)

  
  const onAdd = () => {
    setEliminar(true)
  }
  
  return(
    <>
    <div class="border">
      <div className="card detalleitem lg:card-side bg-base-100 shadow-xl mx-auto">
          <figure className=""><img className="" src={`/../${pictureUrl}`} alt={title}/></figure>
          <div className="card-body">
              <h1 className="card-title">{title}</h1>
              <p className="text-xs">{description}</p>
              <p className="text-xl">$ {price}</p>
              <div className="card-actions justify-center">
                { eliminar ? (<Link to={'/cart'} className="btn">Terminar Compra</Link>) : (<ItemCount onAdd={onAdd} stock={stock} id={id}/>)}
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail