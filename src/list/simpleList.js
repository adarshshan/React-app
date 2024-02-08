import React from "react";
import ListItem from "./listItem";

function SimpleList(props) {
    const { data, onAction,onLabelClick,handleShowTable } = props;
    return (
        <div className="app-list">
            {
                data.map((item) => {
                    return <ListItem
                        key={item.title}
                        title={item.title}
                        descr={item.descr}
                        isActive={item.isActive}
                        onDelete={() => onAction(item)}
                        onLabelClick={onLabelClick} />
                })
            }
        </div>
    )
}

export default SimpleList;