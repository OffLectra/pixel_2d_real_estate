import React from 'react';
import { HeartIconComponent } from "../HeartIcon/HeartIcon";


export function HeaderComponent() {
  return (
      <header>
        <div className="generalContainer">
          <div className="headerLeft">
            <a href="./">
              <img width={50} alt="" src="assets/img/main_link.png" />
            </a>
            <div className="headerInfo">
              <div>
                <h3>React 2D Real Estate</h3>
              </div>
              <p>Продажа пиксельной недвижимости</p>
            </div>
          </div>
          <div className="headerRight">
            <ul className="headerRightList">
              <li>
                <img width={40} alt=""  src="assets/img/cart.png" />
                <span>Сумма</span>
              </li>
              <li>
                <HeartIconComponent />
              </li>
              <li>
                <img width={40} alt=""  src="assets/img/user_1.png" />
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
}
