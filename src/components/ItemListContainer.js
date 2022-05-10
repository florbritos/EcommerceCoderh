import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getItems } from "../data/arrayServicios"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const {idCategory} = useParams()
  const [serviciosCat, setserviciosCat] = useState ([])


  useEffect(() => {
		if (idCategory === undefined) {
			getItems().then((resp) => setserviciosCat(resp))
		} else {
			getItems().then((resp) =>
      setserviciosCat(resp.filter((service) => service.category === idCategory))
			)
		}
	}, [idCategory])

  
	return (
    <>
      <div className="container mx-auto flex justify-center flex-col border-solid border-2 p-6 mt-6 mx-auto w-96">
        <h1 className="text-3xl font-bold text-rose-200 text-center">Elle&Chic</h1>
        <p className="text-center fuente2">Centro de estética</p>
          <p className="mt-3 text-center text-sm">Cuando se trata del cuidado de tu belleza, confía solo en los mejores. No solamente nos especializamos en resaltar al máximo su belleza facial a través de nuestros servicios y productos, si no también en brindar la mejor y más memorable experiencia.</p>
          <a className="btn btn-ghost rounded-none normal-case text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit m-auto mt-5 text-xs">RESERVÁ TU TURNO</a>
      </div>
      
        <ItemList serviciosCat = {serviciosCat} />
      
    </>
  )
}
export default ItemListContainer