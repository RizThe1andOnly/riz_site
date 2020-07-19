import React, {Component} from 'react';
import './SlideComponentCss.css';
import {setSlideDimensions} from '../../Utilities/SetDimensions';


/**
 * Component that will behave like slides and will hold the content of the website.
 */
class SlideComponent extends Component{
    render(){
        setSlideDimensions();
        return(
            <div className="slideComponent">
                {this.props.children}
            </div>
        );
    }
}

export default SlideComponent;