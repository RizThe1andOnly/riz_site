import React, {Component} from 'react';
import './SlideComponentCss.css';
import setSlideDimensions from '../../Utilities/SetSlideDimensions';


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