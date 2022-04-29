const ItemDetail = ({servicio}) => {
  return(
    <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className=""><img className="" src={servicio.pictureUrl} alt={servicio.title}/></figure>
        <div className="card-body">
            <h2 className="card-title">{servicio.title}</h2>
            <p className="text-xs">{servicio.description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    </div>
  )
}
export default ItemDetail