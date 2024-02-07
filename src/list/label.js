import React from "react";
import './label.css'

class Label extends React.Component{
    render(){
        const props=this.props;
        const style=props.isActive?{background:'green'} :{background:'orange'};
        return <span onClick={()=>props.onAction(props.isActive?'active':'non-active')} className="list-label-item" style={style}>{props.isActive?'active':'inactive'}</span>
    }
}

export default Label;