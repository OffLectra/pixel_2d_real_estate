import React from 'react';
import { HeartIconComponent } from "../HeartIcon/HeartIcon";
import { SwitchComponent } from "../Switch/Switch";
// import {data} from "../../data/data.js"


export function CardComponent(props) {

    const addToCart = props.onClickAddToCart;
    const addToFavorite = props.onClickFavorite;
    return (
        <div className="cardContainer">
            <div className="heartBlock">
                {/* <img src="./heart.png" width={30} alt="" /> */}
                <HeartIconComponent />
            </div>
            <div className="infoBlock">
                <div className="infoBlockTitle">
                    {props.name}
                </div>
                <div className="infoBlockPhoto">
                    <img src={props.image} alt="" width={150}/>
                </div>
                <div className="infoBlockPrice">
                    <p className="infoBlockPriceP">ЦEНА:</p>
                    {props.price} скв
                </div>
            </div>
            <div className="addItemBlock">
                {/* <img src="./halka.png" alt="" /> */}
                <SwitchComponent click={this.props.addToFavorite}/>

            </div>

        </div>
    );

}