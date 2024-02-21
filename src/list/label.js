import React, { useContext, useState,useRef } from "react";
import './label.css'
import { MyContext, MyNewContext } from "../pages/MyContext";




function Label(props) {
    const [showToolTip, setShowToolTip] = useState(false);
    const obj=useRef();
    const val = useContext(MyContext)
    const val2 = useContext(MyNewContext);
    const style = props.isActive ? { background: 'green' } : { background: 'orange' };
    if (!val) return null;
    const handleMouseEnter = (evt) => {
        const width1=evt.target.getBoundingClientRect().width;
        const width2=obj.current.getBoundingClientRect().width;
        console.log(`width is ${width1} and ${width2}`)
        obj.current.style.left=`-${(width2-width1)/2}px`;
        setShowToolTip(true);
    }
    const handleMouseLeave = () => {
        console.log('handleMouseLeave function invoked')
        setShowToolTip(false);
    }
    return (
        <div className="list-label-item-container">
            <span
                onClick={() => props.onAction(props.isActive ? 'active' : 'non-active')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="list-label-item" style={style}>
                {props.isActive ? 'active' : 'inactive'}
            </span>
            <label ref={obj} className={`tooltip ${showToolTip ? 'show-tooltip' : 'hide-tooltip'}`}>
                this is {props.isActive ? 'Active' : 'Non-active'} tooltip
            </label>
        </div>
    )
}

export default Label;