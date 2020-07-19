import React,{Component} from 'react';
import './TransitionButton.css';
import {transitionUp,transitionDown} from './SlideTransition';

let actionMethod = null;
/**
 * Buttons that will be stuck to the top and bottom of the screen and will only appear once hovered on.
 */
class TransitionButton extends Component{
    
    constructor(props){
        super(props);
        console.log(this.props.direction);
        if(this.props.direction === "Up"){
            actionMethod = transitionUp;
        }
        else{
            actionMethod = transitionDown;
        }
    }
    
    render(){
        let centeringButtons = (window.innerWidth) * 0.5;
        document.documentElement.style.setProperty("--marginLeftValue",centeringButtons + "px");

        return(
        <div className="transitionButtonClass" onClick={actionMethod} id={this.props.direction}/>
        );
    }
}

export default TransitionButton;