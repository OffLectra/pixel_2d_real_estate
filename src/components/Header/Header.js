// import React from "react";

export function HeaderComponent() {
  return (
      <header>
        <div className="generalContainer">
          <div className="headerLeft">
            <img width={40} height={40} alt="" src="/main_link.png" />
            <div className="headerInfo">
              <h3>React 2D Real Estate</h3>
              <p>Продажа пиксельной недвижимости</p>
            </div>
          </div>
          <div className="headerRight">
            <ul className="headerRightList">
              <li>
                <img width={40} alt=""  src="/basket_2.png" />
                <span>Сумма</span>
              </li>
              <li>
                <img width={40} alt=""  src="/user_1.png" />
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
}
