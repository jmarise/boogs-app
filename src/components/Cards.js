import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
import '../App.css'
import boog from '../images/My project-1.jpg'
import boog2 from '../images/DSCF0476.jpeg'
import boog3 from '../images/DSCF0498.jpeg'



 function Cards(){
    return (
        <div className="sticky cards ">
            <div className="cards_container  ">
                <div className="card_wrapper">
                    <ul className="cards_items flex flex-row justify-center">
                        <CardItem
                        text= "Mastering"
                        path='/mastering'
                        />
                        <CardItem
                            text= "Beats"
                            path='/beats'
                        />

                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Cards