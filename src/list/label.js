import React from "react";
import './label.css'

class Label extends React.Component{
    render(){
        const props=this.props;
        const style=props.isActive?{background:'green'} :{background:'orange'};
        return <label className="list-label-item" style={style}>Label-1</label>
    }
}

export default Label;