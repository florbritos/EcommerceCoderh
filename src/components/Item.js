import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({servicio}) => {

    return(    
        <div className="card w-96 m-6 rounded-none bg-gray-200 shadow-xl ">
            <figure>
                <img src={servicio.pictureUrl} alt={servicio.title}/>
            </figure>
            <div className="card-body">
                <h3 className="card-title">{servicio.title}<div className="badge bg-white border-none text-black">NEW</div></h3>
                
                <div className="flex justify-between"> 
                    <div className="flex items-end">
                        <p className="text-xl w-fit">${servicio.price}</p>
                    </div>
                    <button className="btn btn-ghost rounded-none text-xl bg-rose-200 text-white hover:bg-white hover:text-black w-fit text-xs mt-3">Ver detalle</button>      
                </div>
            </div>
        </div>
    )
}

export default Item


   