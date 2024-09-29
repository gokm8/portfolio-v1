import React from "react";
import Typography from "@mui/material/Typography";
import "./OngoingProjects.css";
import { Box } from "@mui/material";

function OngoingProjects({ project }) {
    return (
        <div className="onGoingProjects__hero-container">
            <Typography
                variant="h4"
                component="h2"
                sx={{ color: "white.main" }}>
                current projects 🛠️
            </Typography>
            <hr />
            {project.map((projects, index) => (
                <Box key={index}>
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{ color: "white.light" }}
                        gutterBottom>
                        {projects.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{ color: "white.dark", mb: "20px" }}
                        gutterBottom>
                        {projects.description}
                    </Typography>
                </Box>
            ))}
        </div>
    );
}

export default OngoingProjects;
