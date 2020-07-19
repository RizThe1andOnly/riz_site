import React,{Component} from 'react';
import ProjectTab from './ProjectTab';
import {ProjectContents} from '../ProjectContent/PCExporter';
import {Switch,Route} from 'react-router-dom';
import PathFinderApp from '../ProjectContent/PathFinderContent/PathFinderAppDir/PathFinderApp';

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
                            <PathFinderApp/>
                        </div>
                    </Route>
                    <Route path="/riz_site/projects">
                        <ProjectTab refwidth={this.state.window_width} projectContents={ProjectContents.ConwayGOLContent}/>
                        <ProjectTab refwidth={this.state.window_width} projectContents={ProjectContents.PathFinderContent}/>
                    </Route>
                </Switch>  
            </div>
        );
    }
}

export default ProjectsList;