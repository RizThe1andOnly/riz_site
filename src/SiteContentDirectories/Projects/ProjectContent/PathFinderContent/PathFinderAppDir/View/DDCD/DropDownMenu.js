import React, {Component} from 'react';
import './DropDownMenu.css';
import DropDownItem from './DropDownItem';

var dropItemList = [];

class DropDownMenu extends Component{
    constructor(props){
        super(props);
        this.state = {currentViewable:null};
        this.ddmRef = React.createRef();
    }

    componentDidMount(){
        this.ddmRef.current.addEventListener('dropSelected',(e)=>this.setCurrentViewable(e));
        this.props.dropItems.forEach((element,index) => {
            dropItemList.push(
                <div style={{width:"150px"}}>
                    <DropDownItem blockTypeName={element.name} blockColor={element.color} parentRef={this.ddmRef}
                                selfIndx={index} grandParentRef={this.props.parentRef}/>
                </div>
            );
        });
        this.setState({
            currentViewable: 
                <div style={{width:"150px",backgroundColor:"white"}}>
                    Select Option
                </div>
        });
    }

    setCurrentViewable = (e)=>{
        this.setState({currentViewable:dropItemList[e.detail]});

        let eventName = this.props.dropItems[e.detail].name + "Button";
        let typeSelectedButton = new Event(eventName);
        this.props.parentRef.current.dispatchEvent(typeSelectedButton);
    }

    render(){
        return(
            <div className="dropdownmenuholder" ref={this.ddmRef}>
                <div className="dropDownContents">
                    {dropItemList}
                </div>
                <div className="dropDownMenuView">
                    {this.state.currentViewable}
                    <div className="UpTriangle"></div>
                </div>
            </div>
        );
    }
}

export default DropDownMenu;