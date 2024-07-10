import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByValue, resetValue, decrementByValue } from '../store/counterSlice';
import "./Main.css"

const CounterComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const counterValue = useSelector(state => state.counter.value);

    const handleIncrement = () => {
        if (inputValue) {
            dispatch(incrementByValue(parseInt(inputValue)));
        } else {
            dispatch(incrementByValue(1));
        }
    };

    const handleDecrement = () => {
        if (inputValue) {
            dispatch(decrementByValue(parseInt(inputValue)));
        } else {
            dispatch(decrementByValue(1));
        }
    };

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    const handleReset = () => {
        dispatch(resetValue());
    };

    return (
        <div className='contaner'>
            <div className="input_num">
                <input type="number" value={inputValue} onChange={handleInputChange} />
            </div>
            <div className="btn_num">
                <button className='btn ' onClick={handleIncrement}>Qo'shish</button>
                <button className='btn ' onClick={handleDecrement}>Ayirish</button>
                <button className='btn ' onClick={handleReset}>Tiklash</button>
            </div>
        </div>
    );
};

export default CounterComponent;