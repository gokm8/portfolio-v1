import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        white: {
            light: "#f9f9f9",
            main: "#e5e7eb",
            dark: "#9ca3af",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Standard skrifttype
        fontSize: 14, // Basis skrifttype størrelse, kan justeres
        h1: {
            fontSize: "2rem", // Størrelse for h1
        },
        h2: {
            fontSize: "1.75rem", // Størrelse for h2
        },
        h3: {
            fontSize: "1.5rem", // Størrelse for h3
        },
        h4: {
            fontSize: "1.25rem", // Størrelse for h4
        },
        h5: {
            fontSize: "1rem", // Størrelse for h5
        },
        h6: {
            fontSize: "0.875rem", // Størrelse for h6
        },
        subtitle1: {
            fontSize: "0.875rem", // Størrelse for subtitle1
        },
        body1: {
            fontSize: "0.875rem", // Størrelse for body1
        },
        body2: {
            fontSize: "0.75rem", // Størrelse for body2
        },
    },
});

export default theme;
