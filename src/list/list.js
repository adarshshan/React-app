
import React from "react";
import ListItem from "./listItem";
import Tools from "../components/Tools";

let arr = [{
    title: 'appointment for october',
    descr: 'The patient is rescheduled to october.',
    isActive: false
},
{
    title: 'appointment for November',
    descr: 'The patient is rescheduled to November.',
    isActive: true
}, {
    title: 'appointment for December',
    descr: 'The patient is rescheduled to December.',
    isActive: false
}];

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: arr
        }
    }
    onListChange = (evt) => {
        const value = evt.target.value;
        console.log(value)
        const newList = arr.filter((item) => {
            if (value === 'all') return true;
            if (value === 'active') return item.isActive === true;
            if (value === 'non-active') return item.isActive === false;
            return false;
        })
        console.log(newList);
        // arr = newList;
        //to write the state
        this.setState({
            data: newList
        },()=>console.log('AFTER SETSTATE.'))
    }
    render() {
        console.log('Render....')
        return (
            <Tools onAction={this.onListChange}>
                {/* <Tools onAction={this.onListChange.bind(this)}> */}
                <div className="app-list">
                    {
                        this.state.data.map((item) => <ListItem key={item.title} title={item.title} descr={item.descr} isActive={item.isActive} />)
                    }
                </div>
            </Tools>
        )
    }
}

export default List;