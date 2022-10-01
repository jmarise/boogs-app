import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
import '../App.css'
import imageTest from '../images/img-9.jpeg'


 function Cards(){
    return (
        <div className="cards">
            <h1>Check out these Events We have Planned in the Past!</h1>
            <div className="cards_container ">
                <div className="card_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src={imageTest}
                        text="Click Here"
                        label="Pictures"
                        path='/aboutus'
                        />
                        <CardItem
                            src={'images/img-9.jpeg'}
                            text="Click Here"
                            label="Pictures"
                            path='/aboutus'
                        />
                        <CardItem
                            src={'images/img-9.jpeg'}
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