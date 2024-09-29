import React from "react";
import "./Education.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

const Education = ({ education }) => {
    return (
        <div className="education__hero-container">
            <Typography
                variant="h4"
                component="h2"
                sx={{ color: "white.light" }}>
                education 🏛️
            </Typography>
            <hr />
            {education.map((education, index) => (
                <Grid container spacing={1} key={index}>
                    <Grid size={{ xs: 7, md: 9 }}>
                        <Typography
                            variant="h5"
                            component="h3"
                            sx={{ color: "white.main" }}>
                            {education.universityName}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 5, md: 3 }}>
                        <Typography
                            variant="body2"
                            component="p"
                            sx={{ color: "white.main" }}
                            align="right">
                            {education.year}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 7, md: 12 }}>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{ color: "white.dark" }}
                            marginBottom={3}
                            gutterBottom>
                            {education.fieldOfStudy}
                        </Typography>
                    </Grid>
                    <br />
                </Grid>
            ))}
        </div>
    );
};

export default Education;
