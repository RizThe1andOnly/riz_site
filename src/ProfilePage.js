import React from 'react';
import './SiteContentDirectories/Resources/CssFiles/App.css';
import './SiteContentDirectories/ProfilePageContents/ProfilePage.css';
import SlideComponent from './SiteContentDirectories/CustomComponents/ContainerComponents/SlideComponent';
import Profile from './SiteContentDirectories/ProfilePageContents/ProfileContents';
import {ProfilePage_mainTextStyling} from './SiteContentDirectories/ProfilePageContents/ProfilePageCss';

function ProfilePage() {
  return (
    <div className="App">
      <SlideComponent>
        <div className="mainText" style={ProfilePage_mainTextStyling}>
          <div style={{flex:0.4}}>{Profile.profilepic}</div>
          <div style={{flex:0.6,textAlign:"center",maxWidth:"75%",paddingLeft:"12.5%"}}>{Profile.mainText}</div>
        </div>
      </SlideComponent>
    </div>
    
  );
}

export default ProfilePage;
