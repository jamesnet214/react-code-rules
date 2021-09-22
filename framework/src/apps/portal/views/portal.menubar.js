import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

export default function(props) {
    const { isOpen } = props;
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({
        appBar: {
          position: "relative"
        }, 
    }));
    const classes = useStyles();

    function menuClick() {
        props.isOpenChanged(!isOpen);
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={menuClick}>
                    {isOpen ? <MenuIcon /> : <ChevronLeftIcon />}
                </IconButton>
                <Typography variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                    REACT FRAMEWORK
                </Typography>
            </Toolbar>
        </AppBar>
    );
}