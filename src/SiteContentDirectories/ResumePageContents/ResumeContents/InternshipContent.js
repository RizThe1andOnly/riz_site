import React from 'react';

let Internship = {
    title : "Work Experience",
    content : 
        <div>
            <h3>L3Harris Technologies - C5 Integrated Systems - Associate Software Engineer</h3>
            <p>At L3Harris I have contributed to several projects and have obtained experince with a variety of technologies. My experiences involve the following:</p>
            <ul>
                
                <li>
                    Working on a <strong>Java Spring Boot</strong> web service. The application was designed with a <strong>micro service architecture</strong> which used <strong>REST APIs</strong> for 
                    communications between services and with clients..
                    <ul>
                        <li>
                            To investigate and resolve bugs I traced through code using IntelliJ debugger and put in log statements using Log4J.
                        </li>
                        <li>
                            I did integration testing with the various services by launching them in a development environment. I utilized <strong>Docker Compose</strong> to launch
                            each service, since each of them were <strong>Docker</strong> containers. The actual tests were run using <strong>Postman</strong>, where I set up each request and then
                            wrote scripts to validate results.
                        </li>
                        <li>
                            I used <strong>Jaeger Tracing</strong> to trace requuests across the different services for debugging purposes.
                        </li>
                        <li>
                            I developed a feature to move data from one service to another utilizing REST endpoints and Java BufferedStreams.
                        </li>
                    </ul>
                </li>

                <li>
                    I was tasked with collecting network logs from a router, parsing those logs into metrics, and then presenting them in a meaningful way.
                    <ul>
                        <li>
                            I used a combination of shell commands and Python's subprocess module to collect logs produced by the router. The router had a Linux
                            OS so I was able to use Linux tools and aid in my work. The router reported logs which were obtained from the Linux "tc" tool. 
                            I used Python's subprocess module to open an ssh connection to the router, then apply a "tail" command for the file with the logs 
                            to extract the most recent logs.
                        </li>

                        <li>I used Python string operations and <strong>Regular Expressions</strong> to parse the logs into meaningful metrics for our project.</li>

                        <li>For this project I used <strong>multi-threading with Python</strong> to manage retreiving and reporting metrics from several different sources.</li>

                        <li>I used <strong>Python Socket Programming</strong> to open sockets to other components of the project to transfer metrics.</li>

                        <li>Worked with <strong>Prometheus Database</strong> to store metrics and <strong>Grafana</strong> to display the metrics.</li>

                        <li>I used the <strong>singleton design pattern</strong> to create a single instance object for access to data storage across the project. This object would be shared by the various parts of the projects that handled the processing of the metrics.</li>
                    </ul>
                </li>

                <li>
                    Extensive Hardware Software Integration (HSI) testing for an embedded system using the Python Unit Test framework.
                    <ul>
                        <li>
                            I wrote scripts to initiate tests and validate the results. This invovled working with Python strings and byte arrays.
                        </li>
                    </ul>
                </li>

                <li>
                    Do <strong>C/C++</strong> development for an embedded system.
                    <ul>
                        <li>
                            I used the <strong>rule engine design pattern</strong> to cretate an Ip validator. Validation would involve checking Ip addresses or
                            subnets to ensure they were not erroneous.
                        </li>

                        <li>
                            Used <strong>Parasoft Unit Test Tool for C/C++</strong> to create and run unit test on modules I created and already existing modules. Since this was
                            for an embedded system, testing also involved starting a QEMU instance setting up proper configurations to enable tests to run.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
};

export default Internship;