import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer } from '@material-ui/core';
import MenuTreeView from '../components/menu.treeview';

const drawerWidth = 250;

export default function(props) {
    const { isOpen } = props;
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({
        drawer: {
            width: isOpen ? drawerWidth : 0,
            flexShrink: 0,
            position: "relative",
            backgroundColor: "white",
            transition: "width 0.3s",
            zIndex: 0
        },
        drawerPaper: {
            width: isOpen ? drawerWidth : 0,
            position: "absolute"
        }    
    }));
    const classes = useStyles();

    return (
        <Drawer open={isOpen} 
                variant={'persistent'}
                anchor={'left'}
                className={classes.drawer}
                classes={{paper: classes.drawerPaper}}>
            <MenuTreeView/>
        </Drawer>
    );
}