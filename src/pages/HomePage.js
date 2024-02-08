
import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/simpleList";

const MyContext = React.createContext();
const MyNewContext = React.createContext();

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeState: 'all',
            message: '',
            showLabel: true,
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        fetch('/data.json').then((data) => {
            return data.json();
        }).then((data) => {
            this.setState({
                data: data
            })
        })
    }
    handleRefresh() {
        console.log('Refresh')
        fetch('/data2.json').then((data) => {
            return data.json();
        }).then((data) => {
            this.setState({
                data: data
            })
        })
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentDidUpdate(previousProps, previousState) {
        console.log('componentDidUpdate')
        if (previousState.message !== this.state.message) {
            this.setState({
                message: 'Message'
            })
        }
    }
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
                    </MyContext.Provider>
                </MyNewContext.Provider>
            </div>
        )
    }
}

export default HomePage;

export {
    MyContext,
    MyNewContext
}