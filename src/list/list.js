
import React from "react";
import ListItem from "./listItem";

const obj={
    title:'appointment for october',
    descr:'The patient is rescheduled to october.',
    isActive:false
}

class List extends React.Component{
    render(){
        return(
            <div className="app-list">
            <ListItem title={obj.title} descr={obj.descr} isActive={obj.isActive} />
          </div>
        )
    }
}

export default List;