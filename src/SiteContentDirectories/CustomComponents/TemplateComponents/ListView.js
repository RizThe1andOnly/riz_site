import React,{Component} from 'react';

/** @typedef {Object} ListViewProps
 * @property {String} blurb
 * @property {string[]} listItems
 */


/**
 * Creates a div that contains an initial blurb (optional) and then a list of items.
 * The list should be passed in as an array to be iterated through.
 * 
 * Will have the following properties:
 *  - blurb : brief description or text to along with the list
 *  - listItems : the array with the items to go into the list view
 *  - singleList : true if one list false otherwise
 */
class ListView extends Component{
    //                                                  Lifecycle Methods:

    /**
     * Class / view item constructor. will take in the props provided.
     * @param {ListViewProps} props 
     */
    constructor(props){
        super(props);
    }

    
    //                                                  Component Construction

    
    /**
     * Create the bit of text description for the list that goes above the list. This method is called by the render method to generate the element.
     */
    generateBlurbComponent(){
        let blurbStyle = {

        }
        let blurbComponent = (this.props.hasOwnProperty("blurb")) ? <div className="blurbContainer" style={blurbStyle}>{this.props.blurb}</div> : null;
        return blurbComponent;
    }


    //  - Section for constructing the list of items to be displayed. This section contains code to generate lists with single or multiple columns.
    /**
     * styling for the list items, currently they will remain unstyled (with default settings).
     */
    listDivStyle = {

    };
    
    /**
     * Abstraction that handles generating single or multi list based on the props passed to the component. This method specifically checks
     * the singleList boolean prop to see whether a list with one column or more that one columns should be generated.
     */
    generateListComponent(){
        if(this.props.hasOwnProperty("singleList")){
            if(this.props.singleList === true){
                return this.generateSingleList();
            }
        }
        return this.generateMultiList();
    }

    /**
     * Creates a list with one column.
     */
    generateSingleList(){
        let listItems = (this.props.listItems).map(item=><li>{item}</li>);
        return(
            <td>
                <ul>
                    {listItems}
                </ul>
            </td>
        );
    }

    /**
     * List with multiple columns. The multiple columns are only used to make the presentation of the list items better, they do not
     * serve any data related purpose.
     */
    generateMultiList(){
        
        let listItems = (this.props.listItems).map(item=><li>{item}</li>);
        let listDivisions = [];
        let tempListItemHolder = [];
        for(let i=0;i<(listItems.length);i++) {
            tempListItemHolder.push(listItems[i]);
            if((i!==0) && ((i+1)%4 === 0)){
                listDivisions.push(<td><ul>{tempListItemHolder}</ul></td>);
                tempListItemHolder = [];
            }
        }
        if(tempListItemHolder.length !== 0){
            listDivisions.push(<td><ul>{tempListItemHolder}</ul></td>);
        }

        let listDiv = (
            <div className="listDiv" style={this.listDivStyle}>
                <table>
                    <tr>
                        {listDivisions}
                    </tr>
                </table>
            </div>
        );

        return listDiv;
    }


    render(){

        let mainContainerStyle = {

        }

        let toBeReturned = (
            <div className="mainContainer" sytle={mainContainerStyle}>
                {this.generateBlurbComponent()}
                {this.generateListComponent()}
            </div>
        );
            
        return(toBeReturned);
    }
}

export default ListView;