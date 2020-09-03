import React, {Component} from 'react';

function PathFinderDescriptionComponent(props){
    return(
        <span className="mainTextBody">
            <p>Employs Dijkstra's algorithm to go from one selected node to another, avoiding blocks when they exist. This program is constructed using React JS and javascript. It is setup using a MVC model. The model currently consists of a Javascript implementaion of Dijkstra's algorithm. The view is constructed using React components. The model and view communicate with each other through events and callbacks linked to those events, these functionalities are abstracted and implemented in the control section of the code.</p>
            <p>To Use This Progam:</p>
            (1)- Select Option for type of block from drop-down menu. There are several options for the type of block to be used.<br/> 
                    The options are as follows: <br/>
                        <p style={{marginLeft:"5%"}}>1:Start-sets the starting node,</p>
                        <p style={{marginLeft:"5%"}}>2:End-sets the ending node,</p>
                        <p style={{marginLeft:"5%"}}>3:Block: sets obstructions for path,</p>
                        <p style={{marginLeft:"5%"}}>4: Un-Block: Clears a block type node.</p> 
            <p>(2)- Upon selecting type of block click on desired block in grid to assign that block to type selected. Select at least a start and end block (only 1 of each). Then if you would like to, add obstructions (called block).</p>
            <p>(3)- Press Run and watch algorithm take effect.</p>
            <br/>
            <p>Output Will: </p>
            <p style={{marginLeft:"5%"}}>The final path will be colored Orange. This will be the first shortest path discovered, if multiple exist.</p>
            <p style={{marginLeft:"5%"}}>Blue colored squares indicate nodes that have been visited during the search.</p>
        </span>
    );
}

var PathFinderTextElems = {
    PathFinderDescription : <PathFinderDescriptionComponent/>,
    PathFinderTitle : "Path Finder",
    PathFinderTabDescription : "Employs Dijkstra's algorithm to go from one selected node to another, avoiding blocks when they exist."
}

export default PathFinderTextElems;