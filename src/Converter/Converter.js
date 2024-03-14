import { useState } from 'react';
import './converter.css';

const Converter = () => {
    const [gradus, setGradus] = useState(0);
    const [farengate, setFarengate] = useState(0);
    const convert = () => {
        //setFarengate(gradus = (farengate - 32)/1.8);
        setFarengate(gradus = 2*gradus);

        console.log('hi');
    }

    return <div className = 'converter'>
        <h2>Конвертер</h2>
        <div className='flex'>
            <input type='text' 
            name='gradus' 
            placeholder='0' 
            className = 'input' 
            value={gradus} 
            onChange={(e) => {setGradus (e.target.value)}}/>
            <div className='btn-converter' onClick={convert}>Перевести </div>
            <input type='text' 
            name='farengate' 
            placeholder='0' 
            className = 'input' value={farengate}
            onChange={(e) => {setFarengate (e.target.value)}}
            />
        </div>
    </div>
}

export default Converter;