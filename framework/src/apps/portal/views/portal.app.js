import MenuBar from './portal.menubar';
import NavBar from './portal.navbar';
import { Grid } from '@material-ui/core';

import Dashboard from "../../../pages/dashboard/views/dashboard.app";

var test = 'james';

export default function() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <MenuBar/>    
            </Grid>
            <Grid item xs={2}>
                <NavBar/>
                {test}
            </Grid>
            <Grid item xs={10}>
                <Dashboard/>
            </Grid>
        </Grid>
    );
}