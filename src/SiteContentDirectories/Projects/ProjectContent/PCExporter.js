// PCExporter = Project Content Exporter

import React from 'react';

//pathfinder contents:
import PathFinderThumbNail from './PathFinderContent/Thumbnail.png';
import PathFinderApp from '../ProjectContent/PathFinderContent/PathFinderAppDir/PathFinderApp';
import PathFinderTextElems from '../ProjectContent/PathFinderContent/DescriptionComponent';

//project id constants:
export const ID_PATH_FINDER = "pathfinder";
export const ID_CONWAY_GOL = "conwaygol";


/**@typedef {Object} ProjectContents
 * @property {any} thumbnail the image used to display project preview
 * @property {Text} description the description for the project
 * @property {Text} title the title diplayed for the project
 * @property {any} appDemo can be a react app component or a video that demos the app
*/


/**@typedef {Object} ParameterObject
 * @property {Number} height
 * @property {Number} width
 * @property {Text} projectId
*/

/**
 * Will be called by PresentationPage to obtain contents of a project to be displayed by the page.
 * 
 * @param {ParameterObject} contentParameters which project and sizes for said project
 */
export function getProjectContents(contentParameters){
    /** @type ProjectContents */
    let toBeReturned = null;

    if(contentParameters.projectId === ID_PATH_FINDER){
        toBeReturned = {
            thumbnail: PathFinderThumbNail,
            description: PathFinderTextElems.PathFinderDescription,
            title: PathFinderTextElems.PathFinderTitle,
            appDemo : <PathFinderApp height_var={contentParameters.height} width_var={contentParameters.width}/>
        };
    }

    if(contentParameters.projectId === ID_CONWAY_GOL){
        toBeReturned = {
            thumbnail: null,
            description: null,
            title: "Conway Game Of Life",
            appDemo : null
        }
    }

    return toBeReturned;
}

/** @typedef {Object} TabContents 
 *  @property {Text} title
 *  @property {Text} tabDescription
 *  @property {any} thumbnail
 *  @property {any} link link used by the react router to navigate to the presentation page for the app
*/

/**
 * Returns the contents required for a project display tab. Contains the thumbnail, description, and title.
 * @param {any} contentId id obtained from the PCExporter class's exports
 */
export function getTabContents(contentId){
    /** @type TabContents */
    let toBeReturned = null;

    if(contentId === ID_PATH_FINDER){
        toBeReturned = {
            title : PathFinderTextElems.PathFinderTitle,
            tabDescription : PathFinderTextElems.PathFinderTabDescription,
            thumbnail : PathFinderThumbNail,
            link : "/riz_site/projects/PathFinder",
        }
    }

    if(contentId === ID_CONWAY_GOL){
        toBeReturned = {
            title : "Conway Game of Life",
            tabDescription : "",
            thumbnail : null,
            link : "/riz_site/projects/ConwayGOL"
        }
    }

    return toBeReturned;
}