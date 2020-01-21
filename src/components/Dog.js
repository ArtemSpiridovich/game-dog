import React from 'react';
import './Dog.css';
import Block from "./Block";

function Dog(props) {
    return (
        <div className="Dog">
            {
                [0,1,2,3,4,5,6,7,8].map(el => <Block incCounter={props.incCounter} idBlock={props.idBlock} id={el} key={el}/>)
            }
        </div>
    );
}

export default Dog;
