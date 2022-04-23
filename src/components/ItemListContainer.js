import Item from "./Item"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  return (
    <>
      <div className="flex justify-center flex-col border-solid border-2 p-6 mt-6 mx-auto w-96">
          <p className="">{props.greeting} siéntete y luce hermosa con nuestros maravillosos tratamientos para el cabello, las uñas y el cuerpo.</p>
          <a className="btn btn-ghost rounded-none normal-case text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit m-auto mt-5 text-xs">DESCUBRÍ NUESTROS SERVICIOS</a>
      </div>
      <ItemCount stock="10" inicial="1"/>
      <ItemList items={Item()}/>
    </>
  )
}
export default ItemListContainer