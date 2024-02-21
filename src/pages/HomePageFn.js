
import React, { useState, useEffect } from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/simpleList";
import { MyContext, MyNewContext } from "./MyContext";
import JustInto from "./JustInto";


function HomePage() {
    const [data, setData] = useState([]);
    const [activeState, setAciveState] = useState('all');
    const [message, setMessage] = useState('');
    const [showLabel, setShowLabel] = useState(true);


    useEffect(() => {
        // console.log('useEffect_componentDidMount')
        fetch('/data.json').then((data) => {
            return data.json();
        }).then((data) => {
            this.setState({
                data: data
            })
        })
    },[])
}
class HomePage extends React.Component {
    // componentDidUpdate(previousProps, previousState) {
    //     console.log('componentDidUpdate')
    //     if (previousState.message !== this.state.message) {
    //         this.setState({
    //             message: 'Message'
    //         })
    //     }
    // }
    onListChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            activeState: value
        })
    }
    handleDelete = (item) => {
        console.log(item)
        let newlist = this.state.data.filter((element) => element.id !== item.id);
        this.setState({
            data: newlist
        })
    }
    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        })
    }
    handleShowTable = (evt) => {
        this.setState({
            showLabel: evt.target.checked
        })
    }
    render() {
        const { data, activeState } = this.state;
        const newList = data.filter((item) => {
            if (activeState === 'all') return true;
            if (activeState === 'active') return item.isActive === true;
            if (activeState === 'non-active') return item.isActive === false;
            return false;
        })
        console.log(newList);
        // arr = newList;
        return (
            <div>
                <div>
                    <input checked={this.state.showLabel} onChange={this.handleShowTable} type="checkbox" />Show Label
                </div>
                <MyNewContext.Provider value={500}>
                    <MyContext.Provider value={this.state.showLabel}>
                        <Tools onAction={this.onListChange} selectValue={activeState}>
                            {/* <Tools onAction={this.onListChange.bind(this)}> */}
                            <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
                        </Tools>
                        <JustInto activeState={activeState} />
                    </MyContext.Provider>
                </MyNewContext.Provider>
            </div>
        )
    }
}

export default HomePage;

