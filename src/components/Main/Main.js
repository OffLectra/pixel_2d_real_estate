import React from 'react';
import { CardComponent } from "../Card/Card";
import { SliderComponent } from "../Slider/Slider";
import {data} from "../../data/data.js"

export function MainComponent() {
  // const itemCardData = data.map
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
              {
                data.map(valData => {
                  const valName = valData.name;
                  const valPrice = valData.price;
                  const valImage = valData.image;
                  return (
                    <>
                      <CardComponent name={valName} price={valPrice} image={valImage}/> 
                      {/* {ничего не понятно, но очень интересно, почему при создании компонента мы указываем всего один пропс, а при вызове передаем аж 3!! пропса..} */}
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
  );
}
