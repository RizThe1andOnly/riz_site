import React,{Component} from 'react';
import "./PresentationPageCss.css";
import {addSuffix,PERCENT_SUFFIX,PIXEL_SUFFIX} from '../../Utilities/MiscUtilities';
import {getProjectContents,DEMO_TYPE_APP,DEMO_TYPE_VIDEO} from '../ProjectContent/PCExporter';


//type definitions below. used with vs code editor for convenience.

/**@typedef {Object} ProjectContents
 * @property {any} thumbnail the image used to display project preview
 * @property {Text} description the description for the project
 * @property {Text} title the title diplayed for the project
 * @property {Text} link link used by the react router to navigate to the presentation page for the app
 * @property {any} appDemo can be a react app component or a video that demos the app
 * @property {Text} demoType type of demo, wheter a video or an acutal app. uses the PCExporter class constants which are available for import.
 * @property {PUBLIC_URL} githubLink url to the github project repository
*/

/**@typedef {Object} ParameterObject
 * @property {Number} height
 * @property {Number} width
 * @property {Text} projectId
*/

// end of typedefs


class PresentationPage extends Component{

    constructor(props){
        super(props);
        this.state = this.setDimensions();
    }


    /**
     * Will set the styling element of the sub containers of the page. Here the height , width,
     * margins (top and left) will be set.
     */
    setDimensions(){
        /*
            Margins will have suffix : PERCENT_SUFFIX except for the main container margins which will have pixel
            Dimensions will have suffix : PIXEL_SUFFIX
        */

        //dimensions main container
        let mainContainerHeight = (0.9 * window.innerHeight);
        let mainContainerWidth = (0.85 * window.innerWidth);
        //margins main container
        let mainContainerTopMargin = (0.01 * window.innerHeight);
        let mainContainerLeftMargin = (0.075 * window.innerWidth);

        //margin(s) for github link:
        let githublinkLeftMargin = (0.3) * mainContainerWidth;
        
        //dimensions title container:
        let titleContainerHeight = (0.05 * mainContainerHeight);
        let titleContainerWidth = 0.9 * mainContainerWidth;
        //margins title container:
        let titleContainerTopMargin = (0.01 * mainContainerHeight);
        let titleContainerLeftMargin = (0.05 * mainContainerWidth); 

        //dimensions appDemo:
        let appDemoHeight = (0.8 * mainContainerHeight);
        let appDemoWidth = (0.4) * mainContainerWidth;
        //margins appDemo:
        let appDemoTopMargin = 3;
        let appDemoLeftMargin = 3;

        //dimensions docs:
        let docHeight = (0.8 * mainContainerHeight);
        let docWidth = (0.4 * mainContainerWidth);
        // margins doc:
        let docTopMargin = 3;
        let docLeftMargin = 3;

        let jsonToBeReturned = {
            mainComponent : {
                height : addSuffix(mainContainerHeight,PIXEL_SUFFIX),
                width : addSuffix(mainContainerWidth,PIXEL_SUFFIX),
                marginTop : addSuffix(mainContainerTopMargin,PIXEL_SUFFIX),
                marginLeft : addSuffix(mainContainerLeftMargin,PIXEL_SUFFIX),
                height_num : mainContainerHeight,
                width_num : mainContainerWidth
            },
            titleComponent : {
                height : addSuffix(titleContainerHeight,PIXEL_SUFFIX),
                width : addSuffix(titleContainerWidth,PIXEL_SUFFIX),
                marginTop : addSuffix(titleContainerTopMargin,PIXEL_SUFFIX),
                marginLeft : addSuffix(titleContainerLeftMargin,PIXEL_SUFFIX),
                height_num : titleContainerHeight,
                width_num : titleContainerWidth
            },
            githubLinkComponent : {
                alignSelf : "center"
            },
            appDemoComponent : {
                height : addSuffix(appDemoHeight,PIXEL_SUFFIX),
                width : addSuffix(appDemoWidth,PIXEL_SUFFIX),
                marginTop : addSuffix(appDemoTopMargin,PERCENT_SUFFIX),
                marginLeft : addSuffix(appDemoLeftMargin,PERCENT_SUFFIX),
                height_num : appDemoHeight,
                width_num : appDemoWidth
            },
            docComponent : {
                height : addSuffix(docHeight,PIXEL_SUFFIX),
                width : addSuffix(docWidth,PIXEL_SUFFIX),
                marginTop : addSuffix(docTopMargin,PERCENT_SUFFIX),
                marginLeft : addSuffix(docLeftMargin,PERCENT_SUFFIX),
                height_num : docHeight,
                width_num : docWidth
            }
        };

        return jsonToBeReturned;
    }

    render(){
        /**@type ParameterObject */
        let param = {
            height : this.state.appDemoComponent.height_num,
            width : this.state.appDemoComponent.width_num,
            projectId : this.props.contentId
        }

        /** @type ProjectContents */
        let toBePresented = getProjectContents(param);
        
        return(
            <div className = "mainContainer" style={this.state.mainComponent}>
                <div className = "titleContainer" style={this.state.titleComponent}>
                    {toBePresented.title}
                </div>
                <a className = "githubLink" style={this.state.githubLinkComponent} href={toBePresented.githubLink} target="_blank" rel="noreferrer noopener">Github Link</a>
                <div className="contentContainer">
                    <div className ="appDemoContainer" style={this.state.appDemoComponent}>
                        {toBePresented.appDemo}
                    </div>
                    <div className="docContainer" style={this.state.docComponent}>
                        {toBePresented.description}
                    </div>
                </div>
            </div>
        );
    }
}


export default PresentationPage;