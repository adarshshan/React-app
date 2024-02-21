import React, { useState, useEffect, useReducer } from 'react'
import './Usage.css'
import reducer from '../reducer/UsageReducer';

const initialValue = {
    value: 0,
    color: 'white'
}

function Usage() {
    const [value, setValue] = useState(0);
    const [color, setColor] = useState('white');
    const [boom, setBoom] = useState(false);

    const [state, dispatch] = useReducer(reducer, initialValue);

    useEffect(() => {
        console.log('EFFECT')//componentDidMount
        return () => {
            console.log('CLEAN UP')//componentWillUnmount
        }
    }, [])//if array with value will act as componentDidUpdate
    return (
        <div>
            <div className='usage'>
                <div className="usage-item" style={{ background: state.color }}>
                    <button onClick={() => { dispatch('increment') }}>Increment</button>
                    <label htmlFor="">{state.value}</label>
                    <button onClick={() => { dispatch('decrement') }}>Decrement</button>
                </div>
                <button onClick={() => { dispatch('blue') }}>blue</button>
                <button onClick={() => { dispatch('red') }}>red</button>
            </div>
        </div>

    )
}

export default Usage
