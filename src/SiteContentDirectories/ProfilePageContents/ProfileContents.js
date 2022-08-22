import React from 'react';

const linkDivContainer =
{
    display        : "flex",
    justifyContent : "center"
}

const linkDivStyle =
{
    display        : "flex",
    flexDirection  : "row",
    justifyContent : "center"
}


function ProfileContents(){
    return(
        <span>
            <strong>
                <p>I am an Associate Software Engineer at L3Harris Technologies C5 Integrated Systems. As a software engineer, I love being able to write code to solve problems and or make processes more efficient. Furthermore, I also love the process of testing, debugging, and improving my code until its the very best it can be (because of course the code never just works the first time around). Aside from that, I like anime, superhero comics/movies, and generally most fantasy works.</p>
                <p>So far, at L3Harris, I have contributed to a variety of projects ranging from enterprise web applications to embedded systems. My contributions involved development and integration testing for a micro-service architecture written in Java Spring Boot. Then I did hardware software integration (HSI) testing using the Python Unit Test framework and unit testing C/C++ modules using the Parasoft Unit Test Tool. </p>
                <br/>
                <br/>
                <div style={{alignContent:"center"}}>
                    <div style={linkDivStyle}>
                        GitHub Link:
                        <a href="https://github.com/RizThe1andOnly" target="_blank" rel="noreferrer noopener">https://github.com/RizThe1andOnly</a>
                    </div>
                    <div style={linkDivStyle}>
                        LinkedIn:
                        <a href="https://www.linkedin.com/in/rizwan-chowdhury" target="_blank" rel="noreferrer noopener">https://www.linkedin.com/in/rizwan-chowdhury</a>
                    </div>
                </div>
            </strong>
        </span>
    );
}

function ProfilePic(){
    let imageStyle = {
        borderRadius : "50%",
        maxHeight : "20%",
        maxWidth: "20%"
    }
    return(
        <img src={process.env.PUBLIC_URL + "/ProfilePic.jpeg"} alt="Avatar" style={imageStyle}/>
    );
}

let Profile = {
    mainText : <ProfileContents/>,
    profilepic : <ProfilePic/>
}

export default Profile;
