import React,{Component} from 'react';
import './ResumeTabStyle.css';


const MARGIN_TOP_CONSTANT = 2;
const HEIGHT_FACTOR = 0;
const WIDTH_FACTOR = 0.75;

const CONTENT_VISIBILITY_PROPERTY = "contentVisibility";
const CONTENT_VISIBLE = "visible";
const CONTENT_COLLAPSE = "collapse";

/**
 * Component to contain resume details.
 * 
 * The props should include:
 *  - refwidth : this is the current width of the window;
 *  - title: title should be prepared as a div/p before being put in
 *  - content: the contents should be made before being put in
 */
class ResumeSectionTab extends Component {
    
    //                                                      Lifecycle methods:
    constructor(props){
        super(props);
        
        this.arrowImgRef = React.createRef();
        this.contentSectionRef = React.createRef();
        this.titleSectionRef = React.createRef();
        this.selfRef = React.createRef();

        let initialStateVals = this.updateState();
        initialStateVals[CONTENT_VISIBILITY_PROPERTY] = CONTENT_COLLAPSE;
        this.state = initialStateVals;
    }

    componentDidMount(){
        this.setState(this.updateState);
    }

    componentDidUpdate(prevProps){
        if(prevProps.refwidth !== this.props.refwidth){
            this.setState(this.updateState);
        }
    }

    //                                                      Utility Methods:
    
    /**
     * Dynamically calculates the size for the tab and returns the values to be used to set dimensions for component.
     */
    updateState(){

        /* set size dynamically for the component */
        let width_check = window.innerWidth;
        
        //get the dynamic heigh and width:
        let tabHeight_withSuffix = this.generateHeightUpdate();
        let tabWidth_withSuffix = this.generateWidthUpdate();

        let marginTop = MARGIN_TOP_CONSTANT + "%";
        let marginLR = ((window.innerWidth - this.generateTabWidth()) * 0.5) + "px";

        return {
            height_var:tabHeight_withSuffix,
            width_var:tabWidth_withSuffix,
            marginTopVar: marginTop,
            marginLeftVar: marginLR,
            marginRightVar: marginLR,
            check_var:width_check
        };
    }

    generateHeightUpdate(){
        let tabHeight = this.generateHeight();
        let tabHeight_withSuffix = tabHeight + "px";
        return tabHeight_withSuffix;
    }

    generateHeight(){
        return window.innerHeight * HEIGHT_FACTOR;
    }

    generateWidthUpdate(){
        let tabWidth = this.generateTabWidth();
        let tabWidth_withSuffix = tabWidth + "px";
        return tabWidth_withSuffix;
    }

    generateTabWidth(){
        return window.innerWidth * WIDTH_FACTOR;
    }

    changeTabSize_onResize(){
        window.addEventListener("resize",this.setState(this.updateState));
    }

    generateTitleDivHeight(){
        return this.generateHeight();
    }

    
    //                                                      Component Controls/Animations
    
    /**
     * Function that will be called when the title section of the resume item tab is clicked. This method will
     * change the state variable that controls the visibility of the content section of the resume tab. This is to
     * create a drop-down item effect.
     * 
     * This function will also control the arrow image. When the contents are being revealed the arrow will flip up and down
     * otherwise.
     */
    handleTitleClick = ()=>{
        this.arrowImgRef.current.style.transform = (this.state.contentVisibility===CONTENT_COLLAPSE) ? "rotate(180deg)" : "rotate(0deg)";
        //this.selfRef.current.style.transform = (this.state.contentVisibility === CONTENT_COLLAPSE) ? (this.generateHeightUpdate()) : "none";
        
        this.setState((state)=>{
            let heightVar = (state.contentVisibility === CONTENT_COLLAPSE) ? "none" : this.generateHeightUpdate();
            let visibilityVar = (state.contentVisibility === CONTENT_COLLAPSE) ? CONTENT_VISIBLE : CONTENT_COLLAPSE; 
            return {contentVisibility:visibilityVar,height_var:heightVar};//,height_var:heightVar
        });
    }
    
    //                                                      Component Creation
    render(){
        let sizeStyleFactors = {
            maxWidth: this.state.width_var,
            marginTop: this.state.marginTopVar,
            marginLeft: this.state.marginLeftVar,
            marginRight: this.state.marginRightVar,
            maxHeight : this.state.height_var,
            height : "auto",
            background : "gray",
            overflow : "hidden",
            flex : 1
        }

        let titleDiv_style = {
            width          :"100%",
            background     : "gray",
            display        : "flex",
            flexDirection  : "row"
        }

        let contentDiv_style = {
            visibility:(this.state).contentVisibility,
            width: "90%",
            paddingLeft : "5%",
            paddingRight: "5%",
            backgroundColor : "rgb(245, 245, 245)",
            overflow : "hidden"
        }

        let arrowContainerStyle = {
            flex : 0.1,
            display : "flex",
            flexDirection : "row",
            alignItems : "flex-ends",
            position : "relative",
            paddingTop : "0%"
        }

        let arrowStyle = {
            maxWidth : "50%",
            maxHeight : "40%",
            marginRight : "1%",
            border: "none",
            marginTop : "10%"
        }

        let titleTextStyle = {
            flex          : 0.9
        }

        return(
            <div className="resumeTab" style={sizeStyleFactors} ref={this.selfRef}>
                <div className="tabTitle" style={titleDiv_style} ref={this.titleSectionRef} onClick={this.handleTitleClick}>
                    <div className="titleText" style={titleTextStyle}>{this.props.title}</div>
                    <div className="arrowContainer" style={arrowContainerStyle}><img src={process.env.PUBLIC_URL + "/downArrow.png"} alt="x" style={arrowStyle} className="arrowImg" ref={this.arrowImgRef}/></div>
                </div>
                <div className="tabContent" style={contentDiv_style} ref={this.contentSectionRef}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default ResumeSectionTab;