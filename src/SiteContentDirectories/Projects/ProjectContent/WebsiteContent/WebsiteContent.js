import React from 'react';

let websiteDescription = (
    <span> 
        The website you are currently viewing. This is a portfolio website that contains some   information about me, my current skillset, and some of my projects.<br/><br/>
        This website has been created with <strong> ReactJS, HTML, CSS, and JavaScript</strong>. It is a composition of React components. It is built upon the basic React template created using "npx create-react-app appname".<br/><br/>
        My contributions are all within the SiteContentDirectories folder, which can be found in the src folder within the github repository (please use "GithubLink"). There are several directories that contain the custom components and data that can be viewed in this website. All of the code for the components in this website are there. One can also see the code for the various events and actions that are performed in the website.<br/><br/>
        Please look through the website and explore its current capabilties. There will be newer versions that will be released later.
    </span>
);

let websiteTabDescription = (
    <span>
        Some description of the code used to construct this website.
    </span>
);

let title = "Portfolio Website";
let thumbnail = process.env.PUBLIC_URL + "/logo192.png";

let websiteContents = {
    thumbnail : thumbnail,
    description : websiteDescription,
    tabDescription : websiteTabDescription,
    title : title,
    demo : <video width="100%" height="100%" controls={true}>
            <source src={process.env.PUBLIC_URL + "/riz_site_video.mp4"} type="video/mp4"/>
            Video Not Supported or Not Found
            </video>,
    githubLink : "https://github.com/RizThe1andOnly/riz_site"
};

export default websiteContents;
