import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/number/numberAction';

function Input() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    function data(){
        dispatch(getData(input))
        setInput('')
    }
    return (
        <div className="ui input">
            <input 
            value={input}
            onChange={(e)=>{
                setInput(e.target.value)
            }}
            onKeyPress={(e)=>{
                if(e.key === 'Enter'){
                    data()
                }
            }}
            type="number" 
            placeholder="Enter number..." />
            <button 
            onClick={()=>{
                data()
            }}
            className="ui secondary button">Search</button>
        </div>

    )
}

export default Input
