import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import {getFirestore, collection, getDocs, where, query} from "firebase/firestore";

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)


const AppContextProvider = ({children}) => {

    const [services, setServices] = useState([])

    useEffect(() => {

      const db = getFirestore();

      getDocs(collection(db, "items")).then((resp) => {
        setServices(resp.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
      
    
    }, [])
    
    console.log('esto es lo obtenido de firebase', services)

  return <AppContext.Provider value = {{services}}>{children}</AppContext.Provider>

}
export default AppContextProvider