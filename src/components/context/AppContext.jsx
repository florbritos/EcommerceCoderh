import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { getItems } from "../../data/arrayServicios"

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)


const AppContextProvider = ({children}) => {

    const [services, setServices] = useState([])

    useEffect(() => {
      
      getItems().then( (resolve) =>  setServices(resolve))
    
    })
    

  return <AppContext.Provider value = {{services}}>{children}</AppContext.Provider>

}
export default AppContextProvider