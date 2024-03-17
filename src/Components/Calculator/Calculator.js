import { useState } from 'react';
import './calculator.css';

const Calculator = () => {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    let [result, setResult] = useState(0);
    const getSumm = () => {
        setResult(+firstNum + +secondNum);   
        console.log(result); 
    }
    return <div className='calculator'>
        <h2>Калькулятор</h2>
        <input
        type='text'
        className='input' 
        name='firstNum'
        placeholder='0'
        value={firstNum}
        onChange={(e) => {setFirstNum(e.target.value)}}/>

        <input 
        type='text'
        className='input' 
        name='firstNum'
        placeholder='0'
        value={secondNum}
        onChange={(e) => {setSecondNum(e.target.value)}}/>
        <div className='summ-btn' onClick={getSumm}>Посчитать</div>
        <div className='result'>Ваш ответ: {result}</div>
    </div>
};

export default Calculator;