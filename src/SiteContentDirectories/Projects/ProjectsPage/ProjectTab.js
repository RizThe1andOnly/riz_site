import React,{Component} from 'react';
import "./ProjectTabCss.css";
import {Link} from 'react-router-dom'
import {getTabContents} from '../ProjectContent/PCExporter';

/** @typedef {Object} TabContents 
 *  @property {Text} title
 *  @property {Text} tabDescription
 *  @property {any} thumbnail
 *  @property {any} link
*/

const MARGIN_TOP_CONSTANT = 2;
const HEIGHT_FACTOR = 0.2;
const WIDTH_FACTOR = 0.5;
let heightFactor_var = 0;
let widthFactor_var = 0;

class ProjectTab extends Component{
    constructor(props){
        super(props);
        heightFactor_var = (props.heightFactor != null) ? (props.heightFactor) : HEIGHT_FACTOR;
        widthFactor_var = (props.widthFactor != null) ? (props.widthFactor) : WIDTH_FACTOR;
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

        let tabHeight = window.innerHeight * heightFactor_var;
        let tabWidth = window.innerWidth * widthFactor_var;
        
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
        
        //get the tab contents from the provided content id. the provided content id is in props.
        /** @type TabContents */
        let tabContent = getTabContents(this.props.contentId);

        let image = (tabContent.thumbnail == null) ? null : <img src={tabContent.thumbnail} alt="Not Found" width="100%" height="100%"/>;

        return(
            <Link to={tabContent.link} className="tabLink">
                <div className="projectTab" style={sizeStyleFactors}>
                    <div className="imgHolder">
                        {image}
                    </div>
                    <div className="tabText">
                        <div className="tabTitle">{tabContent.title}</div>
                        <div className="tabDesc">{tabContent.tabDescription}</div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProjectTab;