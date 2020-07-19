import React,{Component} from 'react';
import "./ProjectTabCss.css";
import {Link} from 'react-router-dom'

/**
 * @typedef {Object} PContent
 * @property {any} thumbnail
 * @property {any} description
 * @property {String} title
 * @property {String} link
 */


const MARGIN_TOP_CONSTANT = 2;

class ProjectTab extends Component{

    constructor(props){
        super(props);
        this.state = this.changeTabSize();
    }

    componentDidMount(){
        this.setState(this.changeTabSize);
    }

    componentDidUpdate(prevProp){
        if(prevProp.refwidth !== this.props.refwidth){
            this.setState(this.changeTabSize);
        }
    }

    changeTabSize(){
        let width_check = window.innerWidth;

        let tabHeight = window.innerHeight * 0.2;
        let tabWidth = window.innerWidth * 0.5;
        
        let tabHeight_withSuffix = tabHeight + "px";
        let tabWidth_withSuffix = tabWidth + "px";

        let marginTop = MARGIN_TOP_CONSTANT + "%";
        let marginLeft = (window.innerWidth - tabWidth) * 0.5;

        return {
            height_var:tabHeight_withSuffix,
            width_var:tabWidth_withSuffix,
            marginTopVar: marginTop,
            marginLeftVar: marginLeft,
            check_var:width_check
        };
    }

    changeTabSize_onResize(){
        window.addEventListener("resize",this.setState(this.changeTabSize));
    }

    render(){
        let sizeStyleFactors = {
            height: this.state.height_var,
            width: this.state.width_var,
            marginTop: this.state.marginTopVar,
            marginLeft: this.state.marginLeftVar,
            marginRight: this.state.marginRightVar
        };
        
        /** @type {PContent} */
        let inheritedPContent = this.props.projectContents;

        return(
            <Link to={inheritedPContent.link} className="tabLink">
                <div className="projectTab" style={sizeStyleFactors}>
                    <div className="imgHolder">
                        <img src={inheritedPContent.thumbnail} alt="Not Found" width="100%" height="100%"/>
                    </div>
                    <div className="tabText">
                        <div className="tabTitle">{inheritedPContent.title}</div>
                        <div className="tabDesc">{inheritedPContent.description}</div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProjectTab;