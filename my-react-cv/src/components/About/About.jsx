import React from "react";
import "./About.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { palette } from "@mui/system";
import { Box } from "@mui/material";
import aboutMe from "../../assets/about/about__me.jpg";

const About = ({ personalInformation }) => {
    return (
        <Box className="about__grid-container">
            <Grid container spacing={2}>
                <Grid size={{ xs: 3, md: 2 }}>
                    <img
                        src={aboutMe}
                        alt="About me"
                        className="about__image"
                    />
                </Grid>
                {/* <Box> */}
                <Grid
                    size={{ xs: 9, md: 10 }}
                    sx={{ marginTop: "28px" }}
                    className="about__first-section">
                    <Typography
                        variant="h2"
                        component="h1"
                        fontWeight="bold"
                        sx={{ color: "white.light" }}
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
                {/* </Box> */}
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
                            Any inquiries? Email me @ {personalInformation.mail}
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
