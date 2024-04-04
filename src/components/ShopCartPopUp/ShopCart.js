import React from 'react';
import { ShopcartItemComponent } from "../ShopCartItem/ShopCartItem";


export function ShopcartComponent() {
    return (
        <div className="popupBG">
            <div className="shopCartWrapper">
                <div className="shopCartTitle">
                    <h2>Корзина</h2>
                </div>
                <div className="shopCartContainer">
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />
                    <ShopcartItemComponent />

                </div>
                <div className="priceButtonContainer">
                    <div className="priceInfo">Итого: 1000</div>
                    <button className="shopCartPriceButton">Оформить заказ</button>
                </div>

            </div>
        </div>
    );
}
