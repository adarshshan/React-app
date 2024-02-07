
import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/simpleList";


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeState: 'all',
            message: ''
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
    componentWillUnmount(){
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
            <Tools onAction={this.onListChange} selectValue={activeState}>
                {/* <Tools onAction={this.onListChange.bind(this)}> */}
                <SimpleList onLabelClick={this.handleLabelClick} data={newList} onAction={this.handleDelete} />
            </Tools>
        )
    }
}

export default HomePage;