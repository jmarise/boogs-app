import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
import '../App.css'
import imageTest from '../images/img-9.jpeg'
import boog from '../images/patsycorner.jpg'
import boog2 from '../images/DSCF0476.jpeg'
import boog3 from '../images/DSCF0498.jpeg'



 function Cards(){
    return (
        <div className="sticky cards  ">
            <div className="cards_container  ">
                <div className="card_wrapper">
                    <ul className="cards_items flex flex-row justify-evenly">
                        <CardItem
                        src={boog}
                        text= "PATSY MIXING & MASTERING"
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