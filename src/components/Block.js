import React from 'react';
import './Block.css';
import dogImg from './dog.jpg'

function Block(props) {

    return (
        <div className="Block">
            {props.id === props.idBlock
                ? <img onClick={props.incCounter} className='dog' src={dogImg}/>
                : ''
            }
        </div>
    );
}

export default Block;
