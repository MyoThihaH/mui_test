
import Grid from '@mui/material/Grid';
import Header from "./Header"
import { makeStyles } from "@mui/styles"

const App = () => {
  
    return (
      <Grid container direction="column">
        <Grid item>
            <Header/>
        </Grid>
        <Grid item container>
            <Grid item xs={0} lg={2}/>
            <Grid item xs={12} lg={8}>Content Hello WorldContent Hello WorldContent Hello WorldContent Hello WorldContent Hello WorldContent Hello WorldContent Hello WorldContent Hello WorldContent Hello WorldContent Hello WorldContent Hello World</Grid>
            <Grid item xs={0} lg={2}/>
        </Grid>
        
      </Grid>
  
    )
}

export default App;