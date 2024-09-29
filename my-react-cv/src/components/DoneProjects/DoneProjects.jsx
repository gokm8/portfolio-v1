// Imports
import React from "react";
import "./DoneProjects.css";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import dummy from "../../assets/dummies/todo-list.png";

function DoneProjects({ doneProject }) {
    return (
        <Box className="doneProjects__hero-container">
            <Typography
                variant="h4"
                component="h2"
                sx={{ color: "white.main", mb: "15px" }}>
                completed projects 🏗️
            </Typography>
            <Box>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    alignItems="center">
                    {doneProject.map((doneProjects, index) => (
                        <Grid
                            size={{ xs: 12, md: 6 }}
                            key={index}
                            className="doneProjects__cards">
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%",
                                }}>
                                <Card sx={{ maxWidth: 450 }}>
                                    <CardActionArea>
                                        {/* This is the image of the cards */}
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={dummy}
                                            alt="project name"
                                        />

                                        {/* This is the content of the cards */}
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div">
                                                {doneProjects.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                }}>
                                                {doneProjects.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default DoneProjects;
