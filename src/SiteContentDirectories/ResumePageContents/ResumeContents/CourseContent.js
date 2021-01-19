import React from 'react';

let courseList = [
    <span><strong>Data Structures :</strong> Learned about linked lists, stacks, trees, graphs, and algorithms to work with these structures.</span>,
    <span><strong>Algorithms :</strong> Covered BigO analysis, recurrence relations, and algorithms. Some algorithms include Djikstra's Shortest Path, Bellman-Ford Algorithm, DFS/BFS, and Max Flow Problem.</span>,
    <span><strong>Computer Architecture :</strong> Learned about components of CPU, memory, virtual memory. Worked with RISC-V and C.</span>,
    <span><strong>Operating Systems :</strong> In this class we went over kernels, processes, interprocess communication, and threads. We also did work with Linux and C.</span>,
    <span><strong>Software Engineering :</strong> Learned about principles of software engineering such as requirements specification and task based project breakdown. We also covered different architectural patterns such as client-server and model-view-controller (MVC). In this course, we were also introduced to programming using JavaScript.</span>,
    <span><strong>Software Methodology :</strong> In this course, we learned the principles of Object Oriented Programming using Java. We learned about inheritance, polymorphism, abstraction, and encapsulation.</span>,
    <span><strong>Intro To Machine Learning for Engineers :</strong> Worked with Jupyter Lab to learn the basics about the machine learning pipeline from data gathering to machine learning algorithms.</span>,
    <span><strong>Intro To Cloud Computing :</strong> Covered mapreduce with Hadoop and PySpark. Also learned about basic cloud computing platforms such as Amazon Web Services.</span>,
    <span><strong>Robotics and Computer Vision :</strong>Learned about image pipline for coverting 3d scenes to 2d images for robot vision, 3d object reconstruction, coordinate plane transformations, and a bit of deep learning. We completed assignments using Google Colab, Python, and Pytorch.</span>,
];

let courseBlurb = "These are the relevant courses I have taken so far. With each course (in bold) there is a small description of what was covered in the course.";

let courseTitle = "Relevant Courses";

let CourseContent = {
    title : courseTitle,
    listBlurb : courseBlurb,
    content : courseList
};

export default CourseContent;