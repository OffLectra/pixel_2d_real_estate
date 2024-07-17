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
              {data.map((valData) => {
                  return (
                    <>
                      <CardComponent
                        name={valData.name}
                        price={valData.price}
                        image={valData.image}
                        onClickAddToCart={() => console.log('В корзине')}
                        onClickFavorite={() => console.log("Лайк")}
                        />
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
