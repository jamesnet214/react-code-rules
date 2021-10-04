import React from 'react';
import { makeStyles, useTheme } from "@mui/styles";
import { Drawer } from '@mui/material';
import MenuTreeView from '../components/MenuTreeView';

const drawerWidth = 250;

const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  });

export default function PortalNavBar(props) {
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