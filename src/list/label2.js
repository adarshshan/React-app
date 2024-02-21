import React, { Component } from 'react';
import './label.css'
import { MyContext,MyNewContext } from '../pages/MyContext';


class label2 extends Component {
    render() {
        const props = this.props;
        const style = props.isActive ? { background: 'green' } : { background: 'orange' };
        console.log(this.context);//this is the static variable 
        return (//comsumer component expects a function
            <MyContext.Consumer>
                {
                    (val) => {//val is ===Mycontext's value
                        if (!val) return null;
                        return (
                            <span onClick={() => {
                                props.onAction(props.isActive ? 'active' : 'non-active')
                            }
                            } className="list-label-item"
                                style={style}>{props.isActive ? 'active' : 'inactive'}
                            </span>
                        )
                    }
                }
            </MyContext.Consumer>
        );
    }
}

label2.contextType = MyNewContext;//there is only one static variable.

export default label2;