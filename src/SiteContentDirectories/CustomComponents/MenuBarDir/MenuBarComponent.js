import React, {Component,useState} from 'react';
import {Link} from 'react-router-dom';
import './MenuBar.css';


function MenuItem(props){
    const[background_Color,setBackgroundColor] = useState("black");
    const[font_Color,setFontColor] = useState("white");

    console.log(props.linkPath);

    function actionWhenMouseEnter(){
        setBackgroundColor('white');
        setFontColor('black');
    }

    function actionWhenMouseLeave(){
        setBackgroundColor('black');
        setFontColor('white');
    }

    let stylingVar = {
        backgroundColor : background_Color,
        color : font_Color,
        textDecoration: "none"
    };

    return(
        <Link to={props.linkPath} className="menuItem" style={stylingVar} onMouseEnter={actionWhenMouseEnter} onMouseLeave={actionWhenMouseLeave}>
            {props.children}
        </Link>
    );
}

function MenuBar(){
    return(
        <div className="mainBar" id="mainBarId">
            <div id="holdPic">
                x
            </div>
            <div id="holdName">Rizwan Chowdhury</div>
            <div id="holdMenuItems">
                <MenuItem linkPath="/riz_site">
                    Profile
                </MenuItem>
                <MenuItem linkPath="/riz_site/resume">
                    Resume
                </MenuItem>
                <MenuItem linkPath="/riz_site/projects">
                    Project
                </MenuItem>
            </div>
        </div>
    );
}

export default MenuBar;