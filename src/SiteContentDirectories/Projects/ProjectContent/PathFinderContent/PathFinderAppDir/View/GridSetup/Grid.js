/**
 * Modules and class that will compose a grid of tiles that will be the nodes used in the pathfinding algo. 
 */

import React from 'react';
import GridNode from './GridNode';

/**
 * Contains all of the individual grid node elements into one element that is then returned.
 * 
 * @param {h,w,numberOfTiles} props : h = height, w= width, numberOfTiles= number of nodes (the grid is structured
 *  numberOfNodes x numberOfNodes)
 */
function Grid(props){
    let gridHeight = props.h;
    let gridWidth = props.w;
    let tileHeight = gridHeight/props.numberOfTiles;
    let tileWidth = gridWidth/props.numberOfTiles;
    

    const gridMatrix = [];
    for(let i=0;i<props.numberOfTiles;i++){
        let rowArray=[];
        for(let j=0;j<props.numberOfTiles;j++){
            let keyString = i.toString() + j.toString();
            let cprops = {
                w: tileWidth,
                h: tileHeight,
                iCoordinate: i,
                jCoordinate: j,
                nodeType: props.nodeType,
                parentRef: props.parentRef,
                limited: props.limited,
                key: keyString,
                nodeModelMatrix: props.nodeModelMatrix
            };
            rowArray.push(<GridNode {...cprops}/>);
        }
        gridMatrix.push(<div style={{display: "flex", width: gridWidth, height: tileHeight}}>{rowArray}</div>);
    }

    return(
        <div>
            {gridMatrix}
        </div>
    );
}


export default Grid;