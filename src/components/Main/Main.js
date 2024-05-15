import React from 'react';
import { CardComponent } from "../Card/Card";
import { SliderComponent } from "../Slider/Slider";

export function MainComponent() {
  return (
      <main>
        <div className="generalContainer">
          <SliderComponent />
          <div className="contentWrapper">
            <div className="titleBlock">
              <h1>Rooms</h1>
              <div className="search">
                <img src="../../assets/img/loop.png" width={20} alt="Search" />
                <input className="titleInput" placeholder="Поиск..."/>
              </div>
            </div>
            <div className="cardsBlock">

              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
      </main>
  );
}
