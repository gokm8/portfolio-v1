import React from "react";
import "./About.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { palette } from "@mui/system";
import { Box } from "@mui/material";

const About = ({ personalInformation }) => {
    return (
        <Box className="about__grid-container">
            <Grid container spacing={2}>
                <Grid size={{ xs: 3, md: 2 }}>
                    <Box className="about__logo"></Box>
                </Grid>
                <Grid size={{ xs: 9, md: 10 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{ color: "white.light" }}
                        fontWeight="bold"
                        gutterBottom>
                        {personalInformation.name}
                    </Typography>
                    {/* <hr /> */}
                    <Typography
                        variant="subtitle1"
                        sx={{ color: "white.main" }}
                        gutterBottom>
                        Future Software Engineer | BEng in Software Technology @
                        SDU
                    </Typography>
                </Grid>
                <Grid size={{ xs: 8, md: 10 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                        }}>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{ color: "white.dark" }}>
                            Any queries? Email me @ {personalInformation.mail}
                        </Typography>
                    </Box>
                </Grid>
                {/* SOCIAL MEDIA ICONS */}
                <Grid size={{ xs: 4, md: 2 }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            widows: "100%",
                        }}>
                        <a
                            href="https://www.linkedin.com/in/gokmenozbayir/"
                            target="__blank"
                            rel="noopener norefferer">
                            <LinkedIn sx={{ color: "white.dark" }} />
                        </a>
                        <a
                            href="https://github.com/gokm8"
                            target="__blank"
                            rel="noopener norefferer">
                            <GitHub sx={{ color: "white.dark" }} />
                        </a>
                        {/* MAKE A FUNCTION, WHEN CLICK => COPYING THE MAIL */}
                        <Email sx={{ color: "white.dark" }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;
