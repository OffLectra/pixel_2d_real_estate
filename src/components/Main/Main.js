// import React from "react";
import { CardComponent } from "../Card/Card";
import { SliderComponent } from "../Slider/Slider";

export function MainComponent() {
  return (
      <main>
        <div className="generalContainer">
          <SliderComponent />
          <div className="contentWrapper">
            <h1>Rooms</h1>
            <div className="cardsBlock">
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            
            </div>
          </div>
        </div>
      </main>
  );
}
