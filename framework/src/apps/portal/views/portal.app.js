import React, { useCallback } from 'react';
import Icon from "@material-ui/icons/ImportContactsTwoTone";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import MenuBar from './portal.menubar';
import NavBar from './portal.navbar';
import Dashboard from "../../../pages/dashboard/views/dashboard.app";

export default function() {
    const [isOpen, setIsOpen] = React.useState(true);
    
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({
        root: {
            height: "100%",
            position: "absolute",
            left: 0,
            width: "100%",
            overflow: "hidden"
        },   
        drawerDiv: {
            height: "100%"
        },
        appBar: {
          position: "relative"
        },    
        frame: {
            display: "flex",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            height: "100%"
        },    
    }));
    const classes = useStyles();

    function menuClick() {
        setIsOpen(!isOpen);
    }

    const isOpenChanged = (changedValue) => {
        setIsOpen(changedValue);
    }

    return (
        <div className={classes.root}>
            <div className={classes.drawerDiv}>
                <MenuBar isOpen={isOpen} isOpenChanged={isOpenChanged}/>    
                <div className={classes.frame}>
                    <NavBar isOpen={isOpen}/>
                    <main>
                        <Dashboard/>
                        <IconButton onClick={menuClick}>
                            <Icon/>
                        </IconButton>
                    </main>
                </div>
            </div>
        </div>
    );
}