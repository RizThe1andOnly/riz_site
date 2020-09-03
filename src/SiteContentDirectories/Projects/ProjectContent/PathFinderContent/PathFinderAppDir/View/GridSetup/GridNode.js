import React,{Component} from 'react';
import {startPointSelected,endPointSelected,blockSelected,unBlockSelected} from '../../Controller/ViewToModel';

const INNERDOT_SCALING_FACTOR = 0.1;

/**
 * Each node/tile of the grid, will be the visual representation of a node in the pathfinding algo. These nodes are the visual
 * mapping of the nodes, they will not contain any data and will only change color based on type and wheter or not they have been
 * visited. 
 * 
 * The type/color changing will be controlled through 'changeColor' event, this event is added in 'componentDidMount()' by
 * locating the node in the ReactDOM and adding the event listener. Upon the trigger of the 'changeColor' event the setState()
 * function will change the color value and re-render the node.
 */
class GridNode extends Component{
    constructor(props){
        super(props);
        this.state = {color:'white',innerColor:'white',type:'none'};
        this.selfRef = React.createRef();
    }

    componentDidMount(){
        //events that will be listened for while model is running:
        this.selfRef.current.addEventListener("beingVisited",this.handleVisted);
        this.selfRef.current.addEventListener("beingExtracted",this.handleExtracted);
        this.selfRef.current.addEventListener("isInPath",this.handleIsInPath);
        this.selfRef.current.addEventListener("isEnd",this.handleIsEnd);
        this.selfRef.current.addEventListener("reset",this.resetEvent);
    }

    //event handlers:
    setTypeofNode = ()=>{
        let bgColor = this.state.color;
        let updatedState = this.state.type;
        if(this.props.nodeType === 'start' && this.props.limited[0]===0){
            bgColor = 'green';
            updatedState = 'start';
            startPointSelected(this.props.iCoordinate,this.props.jCoordinate,this.props.parentRef);
        }
        else if(this.props.nodeType === 'end' && this.props.limited[1]===0){
            bgColor = 'blue';
            updatedState = 'end';
            endPointSelected(this.props.iCoordinate,this.props.jCoordinate,this.props.parentRef);
        }
        else if(this.props.nodeType === 'block' && this.state.type === 'none'){
            bgColor = 'brown';
            updatedState = 'block';
            blockSelected(this.props.iCoordinate,this.props.jCoordinate,this.props.parentRef);
        }
        else if(this.props.nodeType === 'unBlock' && this.state.type === 'block'){
            bgColor = 'white';
            updatedState = 'none';
            unBlockSelected(this.props.iCoordinate,this.props.jCoordinate,this.props.parentRef);
        }
        this.setState(()=>({color:bgColor,type:updatedState}));
    }

    handleVisted = ()=>{
        let visitedColor = 'rgb(158, 215, 255)';
        this.setState(()=>({color:visitedColor}));
    }

    handleExtracted = ()=>{
        let extractedColor = 'rgb(120, 122, 235)';
        this.setState(()=>({color:extractedColor}));
    }

    handleIsInPath = ()=>{
        let inPathColor = 'rgb(245, 197, 24)';
        this.setState(()=>({color:inPathColor}));
    }

    handleIsEnd = ()=>{
        let isEndColor = 'red';
        this.setState(()=>({color:isEndColor}));
    }

    resetEvent = ()=>{
        this.setState(()=>({color:'white',type:'none'}));
    }
    // end of event handler section

    render(){
        let nodeWidth = this.props.w - 1;
        let nodeHeight = this.props.h - 1;

        let styleObj = {
            width: nodeWidth,
            height: nodeHeight,
            backgroundColor: this.state.color,
            border: "solid",
            borderWidth: '1px',
            borderColor: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };

        let innerDotDim = (nodeWidth + nodeHeight) * INNERDOT_SCALING_FACTOR;
        let innerStyleObj = {
            width: innerDotDim,
            height: innerDotDim,
            backgroundColor: this.state.innerColor,
            borderRadius: '50%'
        }

        let nodeId = this.props.iCoordinate + "-" + this.props.jCoordinate;
        
        return(
            <div id={nodeId} style={styleObj} onClick={this.setTypeofNode} ref={this.selfRef}>
                <div style={innerStyleObj}></div>
            </div>
        );
    }
}

export default GridNode;