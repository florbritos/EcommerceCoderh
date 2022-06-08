import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({servicio}) => {

    
    return(  
     
        <div className="card xl:card-side bg-base-100 shadow-xl m-6">
            <figure><img src={servicio.pictureUrl} alt={servicio.title}/></figure>
            <div className="card-body">
                <h3 className="card-title">{servicio.title}<div className="badge bg-fuchsia-400 border-none text-black">NEW</div></h3>
                <p className="text-xl w-fit" >${servicio.price}</p>
                <div className="card-actions justify-end">
                <Link to= {`/item/${servicio.id}`} className="btn btn-ghost rounded-none text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit text-xs mt-3">Ver detalle</Link>
                </div>
            </div>
        </div>

    )
}

export default Item


