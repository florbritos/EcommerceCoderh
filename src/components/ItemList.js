import Item from "./Item";

const ItemList = ({serviciosCat}) => {

    console.log('Esto es lo que recibí en el Itemlist', serviciosCat)

  return (
    <div className="listaservicios">
        <h2 className="mt-20 pt-10 pb-10 font-medium uppercase text-center">Nuestros servicios</h2>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 w-fit mx-auto">
            {
            serviciosCat.map( servicio => <Item key={servicio.id} servicio={servicio}/>)
            }
        </div>
    </div>  
    )
}
export default ItemList