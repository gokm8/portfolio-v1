import React from "react";
import "./DoneProjects.css";
import Grid from "@mui/material/Grid2";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";

function DoneProjects({ doneProject }) {
    return (
        <Box className="doneProjects__hero-container">
            <Typography
                variant="h4"
                component="h2"
                sx={{ color: "white.main", mb: "15px" }}>
                projects 🏗️
            </Typography>
            <Box>
                <Grid container spacing={3}>
                    {doneProject.map((doneProjects, index) => (
                        <Grid
                            size={{ xs: 6, md: 6 }}
                            key={index}
                            className="doneProjects__cards">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="src/assets/dummies/todo-list.png"
                                        alt="project name"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div">
                                            {doneProjects.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary" }}>
                                            {doneProjects.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default DoneProjects;
