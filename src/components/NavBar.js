import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>    
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to= {"/"}>HOME</Link></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                SERVICIOS
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="submenu p-2 bg-rose-50">
                                <li><Link to= {`/category/faciales`}>Faciales</Link></li>
                                <li><Link to= {`/category/corporales`}>Corporales</Link></li>
                                <li><Link to= {`/category/esteticos`}>Estéticos</Link></li>
                            </ul>
                        </li>
                        <li><a>CONTACTO</a></li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost rounded-none normal-case text-xl bg-rose-200 text-white hover:bg-white hover:text-black">Elle&Chic</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to= {"/"}>HOME</Link></li>
                    <li tabIndex="0">
                        <a>
                        SERVICIOS
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="submenu p-2 bg-rose-50 z-40">
                            <li><Link to= {`/category/faciales`}>Faciales</Link></li>
                            <li><Link to= {`/category/corporales`}>Corporales</Link></li>
                            <li><Link to= {`/category/esteticos`}>Estéticos</Link></li>
                        </ul>
                    </li>
                    <li><a>CONTACTO</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget/> 
            </div>
        </div>
  )
}
export default NavBar