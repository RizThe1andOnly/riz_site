import React, {Component} from 'react';
import './DropDownItem.css';

class DropDownItem extends Component{
    constructor(props){
        super(props);
        this.state = {backgroundColor_var:'white',foreGroundColor_var:'black'};
    }

    onMouseEnterEvent = ()=>{
        this.setState({backgroundColor_var:'aqua',foreGroundColor_var:'white'});
    }

    onMouseLeaveEvent = ()=>{
        this.setState({backgroundColor_var:"white", foreGroundColor_var: 'black'});
    }

    dropItemSelectEvent = ()=>{
        let dropSelectedEvent = new CustomEvent('dropSelected',{detail:this.props.selfIndx});
        this.props.parentRef.current.dispatchEvent(dropSelectedEvent);
    }

    render(){
        let colorBlockStyle = {
            backgroundColor : this.props.blockColor,
            width: "15px",
            height: "15px",
            marginLeft: "15px",
            border: "solid",
            borderWidth: "thin"
        };

        let dropItemStyle = {backgroundColor:this.state.backgroundColor_var,color:this.state.foreGroundColor_var};
        
        return(
            <div className="dropItem" style={dropItemStyle} onClick={this.dropItemSelectEvent}
            onMouseEnter={this.onMouseEnterEvent} onMouseLeave={this.onMouseLeaveEvent}>
                <div className="blockType">
                    {this.props.blockTypeName}
                </div>
                <div className="blockColor" style={colorBlockStyle}> </div>
            </div>
        );
    }
}

export default DropDownItem;

//{this.props.changeDropViewable(this.props.selfIndx)}
//onMouseEnter={this.onMouseEnterEvent} onMouseLeave={this.onMouseLeaveEvent}