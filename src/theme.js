import { red, blue, purple } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette: {
        secondary: red,
        inherit: '#00008B',
    },
    typography: {
        h1: {
            fontSize: "3rem",
        }
    }
});

export default theme;