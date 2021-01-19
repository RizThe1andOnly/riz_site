import React from 'react';

let Internship = {
    title : "Internship",
    content : 
        <div>
            <h3>Rutgers Cyber Physical Systems Lab Android Application Development Intern</h3>
            <p>A 5 month internship where the tast was to implement the Android version of DP4coRUna. DP4coRUna is an application that aids with pandemic by doing indoor localization (to determine users' exact location down to the room they are in) and make recommendations based on available data. Our implementation was built using <strong>Android Studio and Java</strong></p>
            <ul>
                <li>I utilized <strong>Android Sensor/Network APIs and Google Maps APIs</strong> to find where the users are. Primarily this included initiating wifi-scans and obtaining wifi access point data. I also sampled light levels and geo-magnetic field strength for a particular location (room level). The Google Maps APIs were used for a map user interface and to determine a user's location down to the building location.</li> 
                <li>I also used <strong>Android Handler, LiveBroadcast, and Thread</strong> libraries to work on the infrastructure for the application. To enable asynchronous and multi-threaded processes to take place.</li> 
                <li>I used <strong>Android DialogFragment</strong> class to design some custom alert dialog interfaces (pop up messages with yes/no buttons) to take in user input and do process that data.</li>
                <li> Worked with <strong>Amazon Web Services (AWS)</strong> tools to set up a <strong>EC2 server and RDS MySQL database</strong>. Then I set up a PHP script to enable our Android application to store or query data to/from the AWS database.</li>
                <li>Installed some dependencies and Java external libraries using Maven and Gradle build files</li>
                <li> The project followed some principles of <strong>Agile Development</strong>. We broke the tasks down based on specific required user modules and small sub-groups were assigned modules to work on. We presented progress on modules on a weekly basis.</li>
                <li>Worked with a team of 4 people for the Android implementation and played a coordinator role. I talked with everyone else on the team and helped guide the discussion on who would do what for any particular week.</li>
                <li>I gained experience coordinating with a team and keeping track of all the code through <strong>Slack and GitHub</strong>.</li>
            </ul>
        </div>
};

export default Internship;