import React from "react";
import './AddNew.css'
class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleInput: '',
            decrInput: '',
            isActive: false
        }
    }
    handleChange = (evt) => {
        let value = evt.target.value;
        this.setState({
            titleInput: value,

        })
    }
    handleDescrChange = (evt) => {
        let value = evt.target.value;
        this.setState({
            decrInput: value,

        })
    }
    handleIsActiveChange = (evt) => {
        let value = evt.target.value;
        this.setState({
            isActive: value
        })
    }
    handleClick = () => {
        console.log(this.state);
        const { titleInput, descrInput, isActive } = this.state;
        if (titleInput) {
            this.props.onAdd({
                id: Math.floor(Math.random() * 100) + 10,
                title: titleInput,
                descr: descrInput,
                isActive: isActive,
            })
            this.setState({
                titleInput:'',
                descrInput:'',
                isActive:false,
            })
        }
    }
    BtnClick = () => {
        alert(this.state.titleInput);
    }
    render() {
        return (
            <div className="add-new">
                <input placeholder="Title" value={this.state.titleInput} onChange={this.handleChange} />
                {/* <input placeholder="Description" value={this.state.decrInput} onChange={this.handleDescrChange} />
                <span>Is Active</span>
                <input type="checkbox" checked={this.state.isActive} onChange={this.handleIsActiveChange} />
                <button onClick={this.handleClick}>Add Item</button> */}
            </div>
        )
    }
}

export default AddNew;