import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './SiteContentDirectories/Resources/CssFiles/index.css';
import ProfilePage from './ProfilePage';
import * as serviceWorker from './SiteContentDirectories/misc/serviceWorker';
import {setSlideDimensions} from './SiteContentDirectories/Utilities/SetDimensions';
import whileScrolling from './SiteContentDirectories/Utilities/WhileScrolling';
import ProjectsPage from './SiteContentDirectories/Projects/ProjectsPage/ProjectsPage';
import MenuBar from './SiteContentDirectories/CustomComponents/MenuBarDir/MenuBarComponent';
import ResumePage from './SiteContentDirectories/ResumePageContents/ResumePage';

window.onresize = ()=>{
  setSlideDimensions();
  
  let tabResizeEvent = new Event('tabresize');
  let projPageElem = document.getElementById('projectPageId');
  if(projPageElem != null) projPageElem.dispatchEvent(tabResizeEvent);

  let resumeTabResizeEvent = new Event('resumeTabResize');
  let resumePageElem = document.getElementById('resumePageId');
  if(resumePageElem != null) resumePageElem.dispatchEvent(resumeTabResizeEvent);
};
//window.onscroll = whileScrolling;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MenuBar/>
      <Switch>
        <Route path="/riz_site/resume">
          <ResumePage/>
        </Route>
        <Route path="/riz_site/projects">
          <ProjectsPage/>
        </Route>
        <Route path="/riz_site">
          <ProfilePage/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
