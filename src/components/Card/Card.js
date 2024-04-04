import React from 'react';
import { HeartIconComponent } from "../HeartIcon/HeartIcon";
import { SwitchComponent } from "../Switch/Switch";


export function CardComponent() {
    return (
        <div className="cardContainer">
            <div className="heartBlock">
                {/* <img src="./heart.png" width={30} alt="" /> */}
                <HeartIconComponent />
            </div>
            <div className="infoBlock">
                <div className="infoBlockTitle">
                    1-к, 300px
                </div>
                <div className="infoBlockPhoto">
                    <img src="./room_1.png" alt="" width={150}/>
                </div>
                <div className="infoBlockPrice">
                    100 скв
                </div>
            </div>
            <div className="addItemBlock">
                {/* <img src="./halka.png" alt="" /> */}
                <SwitchComponent />
            </div>

        </div>
    );

}