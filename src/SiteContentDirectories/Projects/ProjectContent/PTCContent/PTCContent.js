import React from 'react';

let description = (
    <span> 
        A machine learning project completed as part of a group for my cloud computing class. In this project we used PySpark APIs to do clustering analysis on tweets by politicians. We used JupyterLab, Python, and Amazon Web Services (AWS) to complete the project. In the Github repository the main code is within the "FinalProject.ipynb" file.
        <br/><br/>
        We used Natural Language Toolkit (NLTK) libraries and methods for data preprocessing. Then feature extraction was done using PySpark's SQL API's dataframes and PySpark's ML HashingTF and IDF methods. The processed data was finally fed into a K-Means algorithm (from PySpark's ML libraries).
        <br/><br/>
        For this project we ran the script both in local machines and in AWS clusters. One of our tasks was to prove the utility of cloud services by demonstrating how they can outperform regular local machines.
        <br/><br/>
        For this project I:<br/>
        <ul>
            <li>Prepared the PreProcessing Code</li>
            <li>Prepared part of the Feature Extraction Code</li>
            <li>Prepared the code to translate the results from the K-Means algorithm to actual words. (We analyzed the topic clusters.)</li>
            <li>Used AWS EC2 and S3 to run Jupyter code for clustering analysis.</li>
            <li>I formatted the code to abstract the machine learning pipeline and create a driver to easily and efficiently run the code.</li>
        </ul>
    </span>
);

let tabDescription = (
    <span>Machine Learning project involving clustering using PySpark and Amazon Web Services (AWS).</span>
);

let title = "Politician Tweet Clustering"
let thumbnail = null;

let PTCContent = {
    thumbnail : thumbnail,
    description : description,
    tabDescription : tabDescription,
    title : title,
    demo : <video width="100%" height="100%" controls={true}>
            <source src={process.env.PUBLIC_URL + "/Politician_Tweet_Clustering_projectVideo.mp4"} type="video/mp4"/>
            Video Not Supported or Not Found
           </video>,
    githubLink : "https://github.com/RizThe1andOnly/politician_tweet_clustering"
};

export default PTCContent;