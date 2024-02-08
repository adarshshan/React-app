import React, { useState, useEffect } from 'react'
import './Usage.css'
function Usage() {
    const [value, setValue] = useState(0);
    const [color, setColor] = useState('white');
    const [boom, setBoom] = useState(false);

    useEffect(() => {
        console.log('EFFECT')//componentDidMount
        return ()=>{
            console.log('CLEAN UP')//componentWillUnmount
        }
    }, [])//if array with value will act as componentDidUpdate
    return (
        <div>
            <div className='usage'>
                <div className="usage-item" style={{ background: color }}>
                    <button onClick={() => setValue((state) => state + 1)}>Increment</button>
                    <label htmlFor="">{value}</label>
                    <button onClick={() => setValue(value - 1)}>Decrement</button>
                </div>
                <button onClick={() => setColor((state) => state = 'blue')}>blue</button>
                <button onClick={() => setColor('red')}>red</button>
            </div>
        </div>

    )
}

export default Usage
