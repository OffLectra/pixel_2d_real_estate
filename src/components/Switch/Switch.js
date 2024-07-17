import React from 'react';

export function SwitchComponent(props) {

    return (
        <div className="switchBlock">
            <button className="switchPlus" onClick={props}>+</button>
            {/* <div className="switchMiddle">✔</div> */}
            <div className="switchMiddle">
                {/* <img src="assets/img/halka.png" width={15} alt="" /> */}
            </div>
            <button className="switchMinus">-</button>
        </div>
    );
}
 