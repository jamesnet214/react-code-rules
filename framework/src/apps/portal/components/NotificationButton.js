import React from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { IconButton, Badge } from '@material-ui/core';

export default function NotificationButton() {
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();

    return (
        <IconButton size="large"
                    aria-label="show 17 new notifications"
                    color="inherit">
            <Badge badgeContent={17} 
                   color="error">
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );

}