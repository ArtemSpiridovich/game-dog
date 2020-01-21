import React from 'react';
import './Counter.css';

function Counter(props) {
    return (
        <div className="Counter">
            {props.counter}
        </div>
    );
}

export default Counter;
