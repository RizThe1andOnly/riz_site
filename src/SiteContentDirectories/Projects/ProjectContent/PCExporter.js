// PCExporter = Project Content Exporter

import React from 'react';
import ReactPlayer from 'react-player';

//pathfinder contents:
import PathFinderThumbNail from './PathFinderContent/Thumbnail.png';
import PathFinderApp from '../ProjectContent/PathFinderContent/PathFinderAppDir/PathFinderApp';
import PathFinderTextElems from '../ProjectContent/PathFinderContent/DescriptionComponent';

//conway's game of life contents:
import ConwayGOLThumbnail from './ConwayGOLContent/Thumbnail.png';
import ConwayGOLDescriptions from './ConwayGOLContent/Descriptions';
import ConwayDemoVideo from './ConwayGOLContent/ConwayGameOfLifeDemo.mp4';

//website page contents:
import WebsiteContent from './WebsiteContent/WebsiteContent';

//Politician Tweet Clustering contents:
import PTCContent from './PTCContent/PTCContent';


//project id constants:
export const ID_PATH_FINDER = "pathfinder";
export const ID_CONWAY_GOL = "conwaygol";
export const ID_WEBSITE = "website";
export const ID_PTC = "ptc";
export const DEMO_TYPE_VIDEO = "video";
export const DEMO_TYPE_APP = "app";



/**@typedef {Object} ProjectContents
 * @property {any} thumbnail the image used to display project preview
 * @property {Text} description the description for the project
 * @property {Text} title the title diplayed for the project
 * @property {any} appDemo can be a react app component or a video that demos the app
 * @property {Text} demoType type of demo, wheter a video or an acutal app. uses the PCExporter class constants which are available for import.
 * @property {PUBLIC_URL} githubLink url to the github project repository
*/

/** @typedef {Object} TabContents 
 *  @property {Text} title
 *  @property {Text} tabDescription
 *  @property {any} thumbnail
 *  @property {any} link link used by the react router to navigate to the presentation page for the app
*/

/**@typedef {Object} ParameterObject
 * @property {Number} height
 * @property {Number} width
 * @property {Text} projectId
*/


// set up main and tab contents for each project:


//                                  conway gol contents:
/** @returns ProjectContents */
let contents_ConwayGOL = () => {
    /** @type ProjectContents */
    let toBeReturned = {
        thumbnail: ConwayGOLThumbnail,
        description: ConwayGOLDescriptions.mainText,
        title: ConwayGOLDescriptions.title,
        appDemo : <video width="100%" height="100%" controls={true}>
                    <source src={process.env.PUBLIC_URL + "/ConwayGameOfLifeDemo.mp4"} type="video/mp4"/>
                    Video Not Supported or Not Found
                  </video>,
        demoType : DEMO_TYPE_VIDEO,
        githubLink : "https://github.com/RizThe1andOnly/ConwayGameOfLife"
    }
    return toBeReturned;
}
/** @returns TabContents */
let tabContents_ConwayGOL = ()=>{
    let toBeReturned = {
        title : ConwayGOLDescriptions.title,
        tabDescription : ConwayGOLDescriptions.tabText,
        thumbnail : ConwayGOLThumbnail,
        link : "/riz_site/projects/ConwayGOL"
    }
    return toBeReturned;
}


//                                              Pathfinder contents
/** @returns ProjectContents 
 *  @param {ParameterObject} contentParameters
*/
let contents_PathFinder = (contentParameters)=>{
    /** @type ProjectContents */
    let toBeReturned = {
        thumbnail: PathFinderThumbNail,
        description: PathFinderTextElems.PathFinderDescription,
        title: PathFinderTextElems.PathFinderTitle,
        appDemo : <PathFinderApp height_var={contentParameters.height} width_var={contentParameters.width}/>,
        demoType : DEMO_TYPE_APP,
        githubLink : "https://github.com/RizThe1andOnly/pathfinderProject"
    }

    return toBeReturned;
}
/** @returns TabContents */
let tabContents_PathFinder = ()=>{
    let toBeReturned = {
        title : PathFinderTextElems.PathFinderTitle,
        tabDescription : PathFinderTextElems.PathFinderTabDescription,
        thumbnail : PathFinderThumbNail,
        link : "/riz_site/projects/PathFinder",
    }
    return toBeReturned;
}


//                                  website description contents:

/** @returns TabContents */
let tabContents_Website = ()=>{
    let toBeReturned = {
        title : WebsiteContent.title,
        tabDescription : WebsiteContent.tabDescription,
        thumbnail : WebsiteContent.thumbnail,
        link : "/riz_site/projects/Website"
    };
    return toBeReturned;
}

/** @returns ProjectContents */
let contents_Website = ()=>{
    /** @type ProjectContents */
    let toBeReturned = {
        thumbnail : WebsiteContent.thumbnail,
        description : WebsiteContent.description,
        title : WebsiteContent.title,
        demoType : DEMO_TYPE_VIDEO,
        appDemo : WebsiteContent.demo,
        githubLink : WebsiteContent.githubLink
    };
    return toBeReturned;
}

//                                      politician tweet clustering contents (PTC):

/** @type TabContents */
let tabContents_PTC = {
    title: PTCContent.title,
    thumbnail : PTCContent.thumbnail,
    tabDescription : PTCContent.tabDescription,
    link : "/riz_site/projects/PTC"
};

/** @type ProjectContents */
let contents_PTC = {
    thumbnail: PTCContent.thumbnail,
    description: PTCContent.description,
    title: PTCContent.title,
    appDemo: PTCContent.demo,
    demoType: DEMO_TYPE_VIDEO,
    githubLink: PTCContent.githubLink
};


// functions to be called by presenters to obtain content to be displayed:

/**
 * Will be called by PresentationPage to obtain contents of a project to be displayed by the page.
 * 
 * @param {ParameterObject} contentParameters which project and sizes for said project
 */
export function getProjectContents(contentParameters){
    /** @type ProjectContents */
    let toBeReturned = null;

    if(contentParameters.projectId === ID_PATH_FINDER){
        toBeReturned = contents_PathFinder(contentParameters);
    }

    if(contentParameters.projectId === ID_CONWAY_GOL){
        toBeReturned = contents_ConwayGOL();
    }

    if(contentParameters.projectId === ID_WEBSITE){
        toBeReturned = contents_Website();
    }

    if(contentParameters.projectId === ID_PTC){
        toBeReturned = contents_PTC;
    }

    return toBeReturned;
}


/**
 * Returns the contents required for a project display tab. Contains the thumbnail, description, and title.
 * @param {any} contentId id obtained from the PCExporter class's exports
 */
export function getTabContents(contentId){
    /** @type TabContents */
    let toBeReturned = null;

    if(contentId === ID_PATH_FINDER){
        toBeReturned = tabContents_PathFinder();
    }

    if(contentId === ID_CONWAY_GOL){
        toBeReturned = tabContents_ConwayGOL();
    }

    if(contentId === ID_WEBSITE){
        toBeReturned = tabContents_Website();
    }

    if(contentId === ID_PTC){
        toBeReturned = tabContents_PTC;
    }

    return toBeReturned;
}