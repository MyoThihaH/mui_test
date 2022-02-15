import { Button, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import '@fontsource/roboto/700.css';

import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";



const App = () => {
    return (

  <ThemeProvider theme={theme}>
    <AppBar position="static" color="inherit">
      <Toolbar variant="dense" >
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
        Photos
        </Typography>
      </Toolbar>
    </AppBar>
  </ThemeProvider>

    )
}

export default App;