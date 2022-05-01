import ItemCount from "./ItemCount"

const ItemDetail = ({servicio}) => {  
  return(
    <>
    <div class="border">
      <div className="card detalleitem lg:card-side bg-base-100 shadow-xl mx-auto">
          <figure className=""><img className="" src={`/../${servicio.pictureUrl}`} alt={servicio.title}/></figure>
          <div className="card-body">
              <h1 className="card-title">{servicio.title}</h1>
              <p className="text-xs">{servicio.description}</p>
              <p className="text-xl">$ {servicio.price}</p>
              <div className="card-actions justify-end">
                {<ItemCount stock={servicio.stock}/>}
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
export default ItemDetail