import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar">
        <div className="flex-1">
            <a className="btn btn-ghost rounded-none normal-case text-xl bg-rose-200 text-white hover:bg-white hover:text-black">Elle&Chic</a>       
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
                <li><a>HOME</a></li>
                <li tabindex="0">
                    <a> SERVICIOS<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg></a>
                    <ul className="submenu p-2 bg-rose-50">
                        <li><a>Servicio 1</a></li>
                        <li><a>Servicio 2</a></li>
                        <li><a>Servicio 3</a></li>
                        <li><a>Servicio 4</a></li>
                        <li><a>Servicio 5</a></li>
                    </ul>
                </li>
                <li><a>CONTACTO</a></li>
            </ul>
            <CartWidget/>   
        </div>     
    </div>  
  )
}
export default NavBar