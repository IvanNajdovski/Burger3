import React, { Component } from 'react';
import './Modal.modules.css';

import BackDrop from '../BackDrop/BackDrop';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render(){
        return (
            <React.Fragment>
                <BackDrop
                    clicked={this.props.hide}
                    show={this.props.show}/>
                <div
                    className="Modal"
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : "0"
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}
export default Modal;