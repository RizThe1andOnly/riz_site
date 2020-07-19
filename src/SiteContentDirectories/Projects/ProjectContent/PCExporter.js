// PCExporter = Project Content Exporter

import {PathFinderDescription,PathFinderTitle} from './PathFinderContent/Description.json';
import PathFinderThumbNail from './PathFinderContent/Thumbnail.png';

let PathFinderContentObj = {
    thumbnail: PathFinderThumbNail,
    description: PathFinderDescription,
    title: PathFinderTitle,
    link:"/riz_site/projects/PathFinder"
};

let ConwayGOLContent = {
    thumbnail: null,
    description: null,
    title: "Conway Game Of Life",
    link:"/riz_site/projects/ConwayGOL"
}

export var ProjectContents = {
    PathFinderContent: PathFinderContentObj,
    ConwayGOLContent: ConwayGOLContent
}