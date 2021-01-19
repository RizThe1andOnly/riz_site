import React,{Component} from 'react';
import ProjectTab from './ProjectTab';
import {Switch,Route} from 'react-router-dom';
import PresentationPage from '../ProjectPresentationPages/PresentationPage';
import {ID_PATH_FINDER,ID_CONWAY_GOL,ID_WEBSITE,ID_PTC} from '../ProjectContent/PCExporter';

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
                    <Route path="/riz_site/projects/ConwayGOL">
                        <div className="appHolder">
                            <PresentationPage contentId={ID_CONWAY_GOL}/>
                        </div>
                    </Route>
                    <Route path="/riz_site/projects/Website">
                        <div className="appHolder">
                            <PresentationPage contentId={ID_WEBSITE}/>
                        </div>
                    </Route>
                    <Route path="/riz_site/projects/PTC">
                        <div className="appHolder">
                            <PresentationPage contentId={ID_PTC}/>
                        </div>
                    </Route>
                    <Route path="/riz_site/projects">
                        <div style={{textAlign:'center',paddingTop:"1%"}}>
                            <span><strong>Below are a few of the projects that I have completed. Please click on any of the tabs to view details about the corresponding project. Each project has a brief description, a description video/demo, and a "GithubLink" to the repository where one can view the code.</strong></span>
                        </div>
                        <ProjectTab refwidth={this.state.window_width} contentId={ID_WEBSITE}/>
                        <ProjectTab refwidth={this.state.window_width} contentId={ID_PATH_FINDER}/>
                        <ProjectTab refwidth={this.state.window_width} contentId={ID_CONWAY_GOL}/>
                        <ProjectTab refwidth={this.state.window_width} contentId={ID_PTC}/>
                    </Route>
                </Switch>  
            </div>
        );
    }
}

export default ProjectsList;