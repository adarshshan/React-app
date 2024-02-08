import React, { Component } from 'react';
import './label.css'
import { MyContext, MyNewContext } from '../pages/HomePage';


class label2 extends Component {
    render() {
        const props = this.props;
        const style = props.isActive ? { background: 'green' } : { background: 'orange' };
        return (//comsumer component expects a function
            <MyNewContext.Consumer>
                {
                    (val2) => {
                        return (
                            <MyContext.Consumer>
                                {
                                    (val) => {//val is ===Mycontext's value
                                        console.log(`val is ${val2}`)
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
                        )
                    }
                }
            </MyNewContext.Consumer>
        );
    }
}

export default label2;