import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import OngoingProjects from "./components/OngoingProjects/OngoingProjects";
import DoneProjects from "./components/DoneProjects/DoneProjects";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import todoProject from "./assets/doneProjects/todo-list.png";
import ticTacToe from "./assets/doneProjects/tictactoe.png";

// Object of personal informations
const personalInfo = {
    name: "Gøkmen Øzbayir",
    mail: "gozbayir@hotmail.com",
    // img: portrait,
};

// Array of educational data
const educationData = [
    {
        universityName: "university of southern denmark, sdu",
        fieldOfStudy: "bachelor of engineering, software technology",
        year: "sep. 2022 - feb. 2026",
    },
    {
        universityName: "zealand academy of technologies and business",
        fieldOfStudy: "ap graduate in marketing management",
        year: "sep. 2018 - sep. 2020",
    },
    {
        universityName: "zealand academy of technologies and business",
        fieldOfStudy: "exchange program in midwest, usa",
        year: "okt. 2019 - okt. 2019",
    },
];

// Array of skills
// img data is from => https://devicon.dev/
const skillsData = [
    {
        technology: "html5",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
        technology: "css3",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
        technology: "bootstrap",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
        technology: "mui",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
        technology: "javascript",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        technology: "react",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        technology: "node.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
        technology: "express",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
        className: "invert-logo",
    },
    {
        technology: "postgresql",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
        technology: "mongodb",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
        technology: "c#",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
        technology: "java",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
        technology: ".net core",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
        technology: "asp.net",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
    },
    {
        technology: "git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
];

// Array of projects right now
const onGoingProjectData = [
    {
        title: "project: qr generator",
        description: "a simple tool to generate qr codes from text or url's.",
    },
    {
        title: "project: pending",
        description: "pending",
    },
];

// Array of done projects
const doneProjectsData = [
    {
        title: "project: todo list",
        description:
            "a task management app that allows users to add, edit, and delete tasks.",
        img: todoProject,
    },
    {
        title: "project: tic-tac-toe",
        description:
            "a classic two-player game where users take turns placing X's and O's on a grid.",
        img: ticTacToe,
    },
];

const App = () => {
    return (
        <>
            <About personalInformation={personalInfo} />
            <Education education={educationData} />
            <Skills skills={skillsData} />
            <OngoingProjects project={onGoingProjectData} />
            <DoneProjects doneProject={doneProjectsData} />
        </>
    );
};

export default App;
