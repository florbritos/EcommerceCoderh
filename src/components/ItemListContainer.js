import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";
import { useAppContext } from "./context/AppContext";

const ItemListContainer = () => {

  const {idCategory} = useParams()
  const { services } = useAppContext()
  const [serviciosCat, setserviciosCat] = useState ([])

  console.log('estos son los services en el itemlistcontainer', services)

  useEffect(() => {

    if (idCategory === undefined) {
			setserviciosCat(services)
		} else {
      setserviciosCat(services.filter((service) => service.category === idCategory))
		}

    // const db = getFirestore();

    // if (idCategory === undefined) {

    //   getDocs(collection(db, "items")).then((resp) => {
    //     setserviciosCat(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    //   });
      
		//  } else {

    //     const q = query(collection(db, "items"), where("category", "==", idCategory));
    //     getDocs(q).then((resp) => {
    //          setserviciosCat(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    //   });

    //  }

	}, [idCategory])

  //console.log('Esto es lo obtenido despues del firestore', serviciosCat)
  
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