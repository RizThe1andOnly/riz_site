import React,{Component} from 'react';
import ResumeSectionTab from './ResumeSectionTab';
import {Switch,Route} from 'react-router-dom';
import ListView from '../CustomComponents/TemplateComponents/ListView';

//import contents of the resume:
import InternshipContent from './ResumeContents/InternshipContent';
import SkillContent from './ResumeContents/SkillsContent';
import TechContent from './ResumeContents/TechContents';
import CourseContent from './ResumeContents/CourseContent';

/**
 * Page that contains details on the resume.
 */
class ResumePage extends Component{
    
    constructor(props){
        super(props);
        this.selfRef = React.createRef();
        this.state = {width_var:window.innerWidth};
    }

    //                                              Lifecycle Methods
    componentDidMount(){
        this.selfRef.current.addEventListener("resumeTabResize",()=>{
            this.setState({width_var:window.innerWidth});
        });
    }
    
    //                                              Create Component
    render(){
        return(
            <div className="resumePageBody" id="resumePageId" ref={this.selfRef}>
                <Switch>
                    <Route path="/riz_site/resume">
                        <div style={{textAlign:'center',paddingTop:"1%"}}>
                            <span><strong>Below are a set of drop-down items each listing my different experiences/skills.</strong></span>
                        </div>
                        <ResumeSectionTab refWidth={this.state.width_var} title={InternshipContent.title} content={InternshipContent.content}/>
                        <ResumeSectionTab refWidth={this.state.width_var} title={SkillContent.title} content={<ListView blurb={SkillContent.listBlurb} listItems={SkillContent.content}/>}/>
                        <ResumeSectionTab refWidth={this.state.width_var} title={TechContent.title} content={<ListView blurb={TechContent.listBlurb} listItems={TechContent.content}/>}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default ResumePage;