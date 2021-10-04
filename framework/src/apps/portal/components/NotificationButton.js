import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { makeStyles, useTheme } from "@mui/styles";
import { IconButton, Badge } from '@mui/material';

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