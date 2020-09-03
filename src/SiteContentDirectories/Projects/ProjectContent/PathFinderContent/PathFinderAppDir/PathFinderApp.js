import React,{Component} from 'react';
import Grid from './View/GridSetup/Grid';
import './PathFinderApp.css';
import {constructNodePropArray,RunDijsktraAlgo} from './Model/DijkstraAlgo';
import DropDownMenu from './View/DropDownComponentDir/DropDownMenu';

//constants and global variables:
//constants:
export const NUMBER_OF_NODES = 20;
const NODE_TYPE = {
  none:'none',
  block: 'block',
  start: 'start',
  end: 'end',
  unBlock: 'unBlock'
};
const HEIGHT = "500";
const WIDTH = "500";
const BUTTON_ARRAY = [{name:'Start',color:'green'},{name:'End',color:'blue'},
                      {name:'Block',color:'brown'},{name:'Unblock',color:'white'}];
//global vars:
var nodeModelMatrix = [];


//objects used for the project
/** Define an edge between two nodes aside from already existing one
 * @typedef {Object} edge
 * @property {node} otherNode node at the other side of edge
 * @property {Number} weight value of edge to be used in distance calculations
 */

/** Define the node type to be used for calculations for the model.
 * @typedef {Object} node
 * @property {Number} distanceFromSource current distance value of node
 * @property {Number} extraWeight for cases such as blocks
 * @property {node} parent node which connects to current node
 * @property {Number} i coordinate of node
 * @property {Number} j coordinate of node
 * @property {any} domId string representing the dom id for the node
 * @property {Boolean} visited boolean value representing wheter this node has been visted already
 * @property {Array<edge>} edges that exist between nodes aside from the regular distance between them
*/

/**
 * The Pathfinding app containing for components to set and carry out pathfinding process and listen for relevant events
 * while doing so. 
 *  - Grid component with each node being a GridNode that change color upon assignment of type and while pathfinding procedure
 *    running.
 *  - Buttons to set the start and destination points, set/unset blocks, run algo, and clear screen.
 */
class PathFinderApp extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      type:NODE_TYPE.none,
      limitMet:[0,0],
      startNode:null,
      endNode:null,
      blockButtonSelected:false,
      commandButtonColor: 'black',
      height_vars : this.setSubComponentHeights(this.props.height_var),
      width_var : this.props.width_var
    };
    this.pappRef = React.createRef();
  }


  /**
   * Component did mount and event handler functions for events 'startSE' and 'endSE'
  */
  componentDidMount(){
    nodeModelMatrix = constructNodePropArray();
    this.eventsBeingListenedFor();
  }


  setSubComponentHeights(totalHeight){
    let mainAppHeight = (0.9) * totalHeight;
    let topSecHeight = 0.05 * totalHeight;
    let bottomSecHeigt = 0.05 * totalHeight;

    return {
      mainAppHeight : mainAppHeight,
      topSectionHeight : topSecHeight,
      bottomSectionHeight : bottomSecHeigt
    };
  }


  //event handlers section:
  /**
   * adds the event listeners to the component
   */
  eventsBeingListenedFor(){
    this.pappRef.current.addEventListener('startSE',(e)=>this.handleStartSE(e));
    this.pappRef.current.addEventListener('endSE',(e)=>{this.handleEndSE(e)});
    this.pappRef.current.addEventListener('blockSE',(e)=>{this.handleBlockSE(e)});
    this.pappRef.current.addEventListener('unBlockSE',(e)=>this.handleUnBlockSE(e));

    //drop down item selection event listener:
    this.pappRef.current.addEventListener('StartButton',this.handleStartSelectButtonClick);
    this.pappRef.current.addEventListener('EndButton',this.handleEndSelectButtonClick);
    this.pappRef.current.addEventListener('BlockButton',this.handleBlockButtonClick);
    this.pappRef.current.addEventListener('UnblockButton',this.handleUnBlockButtonClick);
  }

  /**
   * Will set limiteMet[0] (representing whether start point has been chosen) to 1 upon firing of event 'startSE'
   * meaning a start point was chosen
   */
  handleStartSE = (e)=>{
    let tempNode = nodeModelMatrix[e.detail.node_i][e.detail.node_j];
    tempNode.distanceFromSource = 0;
    tempNode.parent = null;
    this.setState({limitMet:[1,this.state.limitMet[1]],startNode:tempNode});
  }

  /**
   * Will set limiteMet[1] (representing whether end point has been chosen) to 1 upon firing of event 'endSE'
   * meaning a end point was chosen
   */
  handleEndSE = (e)=>{
    let tempNode = nodeModelMatrix[e.detail.node_i][e.detail.node_j];
    this.setState({limitMet:[this.state.limitMet[0],1],endNode:tempNode});
  }

  /**
   * Will set the selected ui node's correspond
   * @param {any} e block node selection event
   */
  handleBlockSE = (e)=>{
    let tempNode = nodeModelMatrix[e.detail.node_i][e.detail.node_j];
    tempNode.isBlock = true;
  }

  handleUnBlockSE = (e)=>{
    let tempNode = nodeModelMatrix[e.detail.node_i][e.detail.node_j];
    tempNode.isBlock = false;
  }
  //end of event handler section

  

  //onClick/button handlers:
  /**
   * Button Event handler function. Will utilize the modules imported from GridUtilities in order to carry out 
   * functionalities.
  */
  handleStartSelectButtonClick = ()=>{
    this.setState({type:NODE_TYPE.start});
  }

  handleEndSelectButtonClick = ()=>{
    this.setState({type:NODE_TYPE.end});
  }

  handleRunButtonClick = ()=>{
    if(!(this.state.limitMet[0]===0 || this.state.limitMet[1]===0)){
      RunDijsktraAlgo(nodeModelMatrix,this.state.startNode,this.state.endNode);
    }
    else{
      window.alert("Please set both Start and End points");
    }
  }

  handleBlockButtonClick = ()=>{
    console.log("hello");

    if(this.state.blockButtonSelected === true){
      this.setState({type:NODE_TYPE.none,blockButtonSelected:false});
    }
    else{
      this.setState({type:NODE_TYPE.block,blockButtonSelected:true});
    }
  }

  handleUnBlockButtonClick = ()=>{
    this.setState({type:NODE_TYPE.unBlock});
  }

  handleClearButtonClick = ()=>{
    nodeModelMatrix = constructNodePropArray();
    this.setState(()=>({type:NODE_TYPE.none,limitMet:[0,0],startNode:null,endNode:null,blockButtonSelected:false}));
  }
  //end of button handlers


  /**
   * Component rendering
   */
  render(){
    let propsToChildren = {
      numberOfTiles : NUMBER_OF_NODES,
      h : this.state.height_vars.mainAppHeight,
      w : this.state.width_var,
      nodeType: this.state.type,
      parentRef: this.pappRef,
      limited : this.state.limitMet,
      modelMatrix : nodeModelMatrix
    };
    
    return (
      <div className="App" id="pathApp" ref={this.pappRef}>
        <div className="pathFinderTitle" style={{width:this.state.width_var,height:this.state.height_vars.topSectionHeight}}>
          Dijkstra Algorithm Simulator
        </div>
        <Grid {...propsToChildren}/>
        <div className="controlButtonHolder" style={{width:this.state.width_var,height:this.state.height_vars.bottomSectionHeight}}>
          <DropDownMenu dropItems={BUTTON_ARRAY} parentRef={this.pappRef}/>
          <div className="controlButton" onClick={this.handleRunButtonClick}>Run</div>
          <div className="controlButton" onClick={this.handleClearButtonClick}>Clear</div>
        </div>
      </div>
    );
  }
}

export default PathFinderApp;
