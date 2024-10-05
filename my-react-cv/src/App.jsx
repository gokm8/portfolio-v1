import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import OngoingProjects from "./components/OngoingProjects/OngoingProjects";
import DoneProjects from "./components/DoneProjects/DoneProjects";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import data from "./data/data";

const App = () => {
    return (
        <>
            <About personalInformation={data.personalInfo} />
            <Education education={data.educationData} />
            <Skills skills={data.skillsData} />
            <OngoingProjects project={data.onGoingProjectData} />
            <DoneProjects doneProject={data.doneProjectsData} />
        </>
    );
};

export default App;
