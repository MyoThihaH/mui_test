import { Button, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { makeStyles } from "@mui/styles"
const useStyles = makeStyles(() => ({
    test: {
      flex: 1
    }
  }))

const Header = () => {
    const classes = useStyles();
    return (
<AppBar position="static" color="inherit">
    <Toolbar variant="dense" >
        <Typography variant="h6" color="inherit" className={classes.test}>
            Names
        </Typography>
        <AcUnitIcon />
        
        
    </Toolbar>
</AppBar>
    )
}

export default Header;