import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"

const ItemDetail = ({servicio}) => {  

  const {id, title, description, price, pictureUrl, stock} = servicio
  const [eliminar, setEliminar] = useState(false)

  
  const onAdd = () => {
    setEliminar(true)
  }
  
  return(
    <>
    <div>
      <div className="card detalleitem bg-base-100 shadow-xl mx-auto">
          <figure className=""><img className="" src={pictureUrl} alt={title}/></figure>
          <div className="card-body">
              <h1 className="card-title">{title}</h1>
              <p className="text-xs">{description}</p>
              <p className="text-xl">$ {price}</p>
              <div className="card-actions flex-col justify-center items-center">
                { eliminar ? (<Link to={'/cart'} className="btn">Terminar Compra</Link>) : (stock !==0 ? (<ItemCount onAdd={onAdd} servicio={servicio}/>) : (<><p className="font-bold uppercase text-center">Sin stock</p><Link to={'/'} className="btn">Seguir Buscando</Link></>))}
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default ItemDetail