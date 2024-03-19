// import React from "react";

export function CardComponent() {
    return (
        <div className="cardContainer">
            <div className="heartBlock">
                {/* здесь компонент сердечка */}
                <img src="./heart.png" width={20} alt="" />
            </div>
            <div className="infoBlock">
                <div className="infoBlockTitle">
                    {/* здесь компонент с названием нарточки */}
                    1-к, 300px
                </div>
                <div className="infoBlockPhoto">
                    <img src="./room_1.png" alt="" width={150}/>
                </div>
                <div className="infoBlockPrice">
                    {/* здесь компонент со стоимостью */}
                    100 скв
                </div>
            </div>
            <div className="addItemBlock">
                {/* здесь компонент с индикацией добавления в корзину */}
                {/* <img src="./halka.png" alt="" /> */}
                ✔
            </div>

        </div>
    );

}