import React from 'react';
import { HeartIconComponent } from "../HeartIcon/HeartIcon";
import { SwitchComponent } from "../Switch/Switch";
// import {data} from "../../data/data.js"


export function CardComponent(valData) {
    return (
        <div className="cardContainer">
            <div className="heartBlock">
                {/* <img src="./heart.png" width={30} alt="" /> */}
                <HeartIconComponent />
            </div>
            <div className="infoBlock">
                <div className="infoBlockTitle">
                    {/* 1-к, 300px */}
                    {valData.name}
                </div>
                <div className="infoBlockPhoto">
                    <img src={valData.image} alt="" width={150}/>
                    {/* {image} */}
                </div>
                <div className="infoBlockPrice">
                    {/* 100 скв */}
                    {valData.price} скв
                </div>
            </div>
            <div className="addItemBlock">
                {/* <img src="./halka.png" alt="" /> */}
                <SwitchComponent />
            </div>

        </div>
    );

}