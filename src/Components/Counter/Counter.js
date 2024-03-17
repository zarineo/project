import './counter.css';
import { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0); //здесь мы создали состояние - state

    const minuscounter = () => {
        setNumber(number - 1);
    }

    const pluscounter = () => {
        setNumber(number + 1);
    }
    
    return <div className = "counter">
        <h2> Счетчик </h2>
        <div className="counter__input">
            <input className="input" value = {number}/>
        </div>
        <div className="btns">
            <div className="btn" onClick={minuscounter}>-1</div>
            <div className="btn" onClick={pluscounter}>+1</div>
        </div>
    </div>
}

export default Counter;