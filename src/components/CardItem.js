import React from "react";
import {Link} from "react-router-dom";
import "../App.css"
import "./Cards.css"


function CardItem(props){
    return(
        <>
            
            
                
               
            
           
<li className="cards_item">
<Link className="cards_item_link" to={props.path}>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <figure className="cards_item_pic-wrap" data-category={props.label}>
        <img className="rounded-t-lg cards_item_img" src={props.src} alt="Event" />
        </figure>
    
    <div className="p-5 cards_item_info">
        
            
        
        <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400 cards_item_text">{props.text}</h5>
        
    </div>
</div>
</Link>
 </li>
        </>
    )
}
export default CardItem