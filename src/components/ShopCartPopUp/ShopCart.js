import React from 'react';
import { ShopcartItemComponent } from "../ShopCartItem/ShopCartItem";
import {data} from '../../data/data';


export function ShopcartComponent() {
    return (
        <div className="popupBG">
            <div className="shopCartWrapper">
                <div className="shopCartTitle">
                    <h2>Корзина</h2>
                    <button className="shopCartCloseButton">x</button>
                </div>
                <div className="shopCartContainer">
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />

                </div>
                <div className="priceButtonContainer">
                    <div className="priceInfo">Итого: 1000 скв</div>
                    <button className="shopCartPriceButton">Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}
