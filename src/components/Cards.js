import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
import '../App.css'
import imageTest from '../images/img-9.jpeg'
import boog from '../images/DSCF0384.jpeg'
import boog2 from '../images/DSCF0476.jpeg'
import boog3 from '../images/DSCF0498.jpeg'



 function Cards(){
    return (
        <div className="cards bg-boog-black">
            <h1>Check out these Events We have Planned in the Past!</h1>
            <div className="cards_container ">
                <div className="card_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src={boog}
                        text="Click Here"
                        label="Pictures"
                        path='/aboutus'
                        />
                        <CardItem
                            src={boog2}
                            text="Click Here"
                            label="Pictures"
                            path='/aboutus'
                        />
                        <CardItem
                            src={boog3}
                            text="Click Here"
                            label="Pictures"
                            path='/aboutus'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Cards