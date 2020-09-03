import React,{Component} from 'react';
import ProjectTab from './ProjectTab';
import {Switch,Route} from 'react-router-dom';
import PresentationPage from '../ProjectPresentationPages/PresentationPage';
import {ID_PATH_FINDER,ID_CONWAY_GOL} from '../ProjectContent/PCExporter'

/**@typedef {Object} ParameterObject
 * @property {Number} height
 * @property {Number} width
 * @property {Text} projectId
*/

class ProjectsList extends Component{

    constructor(props){
        super(props);
        this.selfRef = React.createRef();
        this.state = {window_width: window.innerWidth};
    }

    componentDidMount(){
        this.selfRef.current.addEventListener('tabresize',()=>{
            this.setState({window_width: window.innerWidth});
        });
    }

    render(){
        return(
            <div className="projectsPage" id='projectPageId' ref={this.selfRef}>
                <Switch>
                    <Route path="/riz_site/projects/PathFinder">
                        <div className="appHolder">
                            <PresentationPage contentId={ID_PATH_FINDER}/>
                        </div>
                    </Route>
                    <Route path="/riz_site/projects">
                        <ProjectTab refwidth={this.state.window_width} contentId={ID_PATH_FINDER}/>
                        <ProjectTab refwidth={this.state.window_width} contentId={ID_CONWAY_GOL}/>
                    </Route>
                </Switch>  
            </div>
        );
    }
}

export default ProjectsList;