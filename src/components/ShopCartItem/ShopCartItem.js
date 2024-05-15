import React from 'react';



export function ShopcartItemComponent() {
    return (
        <div className="cartItemContainer">
            <div className="cartItemContainerLeft">
                <div className="shopCartItemImgContainer">
                    <img src="./assets/img/room_2.png" className="shopCartItemImg" alt="" />
                </div>
                <div className="shopCartItemInfoContainer">
                    <div className="shopCartItemTitle">Комната</div>
                    <div className="shopCartItemPrice">100 скв</div>
                </div>
            </div>

            <div className="shopCartItemCrossContainer">
                <button className="shopCartItemCrossButton">x</button>
            </div>
        </div>
    );
}
