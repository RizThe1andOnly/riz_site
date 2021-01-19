import React from 'react';

function ProfileContents(){
    return(
        <span>
            <strong>
                <p>I am a 4th year at Rutgers The State University of New Jersey New Brunswick pursuing a major in Computer Engineering and a minor in Computer Science. I like anime, superhero comics/movies, and creating apps that go with my interests like a digital comic reader that is customized to my preferences. </p>
                <p>Currently, I am most proficient at Java and Android application development. I am also proficient in Python and Machine Learning libraries such as PyTorch. I have some experience with HTML, CSS, and JavaScript (this website is created with these three and ReactJS). </p>
                <p>I am looking for a job as an entry level Software Developer/Engineer. Please take a look at the Resume and Projects tabs to see my skills/experiences.</p>
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