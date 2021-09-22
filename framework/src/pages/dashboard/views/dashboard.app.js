import React from 'react';
import { Grid } from '@material-ui/core';
import Search from './dashboard.search';
import Content from './dashboard.content';
export default function() {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Search/>
            </Grid>
            <Grid item xs>
                <Content/>
            </Grid>
        </Grid>
    );
}