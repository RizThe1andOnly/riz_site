import React from 'react';

function ConwayMainDescription(){
    return(
        <span className="mainTextBody">
            Simulation of Conway Game Of Life using Java. The rules of Conway's Game of Life
            can be found here : https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life .
            This implementation was created using Java Swing and AWT libraries.
            <br/><br/>
            The simulation is run on a grid composed of 100 tiles. Each tile is a Java 
            object that extends the Swing Button class contains properties and methods that 
            make the simulation funtions possible. The button contain several properties that
            are required to run the algorithm. Every button stores its own state, wheter active or
            inactive, and its own indicies in a matrix. Each button changes color based on whether 
            it is supposed to be active or in-active, based on Conway Game Of Life rules. The 
            color change takes place when the model requires it and when user clicks on it, to 
            manually set (in)active state.
            <br/>
            All of the tiles are stored in a matrix and that matrix is what the Conway Game of Life
            algorithm runs on. The rules are applied to each button by analyzing and settin their
            properties. As each button's active/inactive property is changed the button's color is 
            changed to reflect it.
            <p>To run the simulation one would: </p>
            <p style={{marginLeft:"5%"}}>- Select Tiles They wish to set to active, for simulation to run some tile must be active at start or nothing will happen.</p>
            <p style={{marginLeft:"5%"}}>- Either Press Next or Run</p>
            <p style={{marginLeft:"10%"}}>-- Pressing Next: takes simulation to next stage, only does one calculation.</p>
            <p style={{marginLeft:"10%"}}>-- Pressing Run: does continuous simulation until Stop is pressed.</p>
            <p style={{marginLeft:"5%"}}>- Press Stop to stop the simulation</p>
            <p style={{marginLeft:"5%"}}>- Press clear to reset all of the tiles</p>
        </span>
    );
}

function ConwayTabDescription(){
    return(
        <span className="tabText">
            Simulation of Conway's Game of Life using Java.
        </span>
    );
}

let descriptions = {
    mainText: <ConwayMainDescription/>,
    tabText: <ConwayTabDescription/>,
    title: "Conway's Game of Life"
}

export default descriptions;