import React from "react";
import "./skills.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

const Skills = ({ skills }) => {
    return (
        <Box className="skills__hero-container">
            <Typography
                variant="h4"
                component="h2"
                sx={{ color: "white.main" }}>
                technologies 💡
            </Typography>
            <hr />
            <Grid container spacing={5} sx={{ mb: "10px" }}>
                {skills.map((skill, index) => (
                    <Grid size={{ xs: 6, md: 3 }} key={index}>
                        <Box
                            className="skills__darkness-text-icon"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "start",
                            }}>
                            <img
                                src={skill.img}
                                className="dark-image"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                }}></img>
                            <Typography
                                variant="h5"
                                component="h3"
                                className="dark-text"
                                sx={{ color: "white.dark", mt: "10px" }}>
                                {skill.technology}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
