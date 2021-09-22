import NotificationsIcon from '@material-ui/icons/Notifications';
import { IconButton, Badge } from '@material-ui/core';

export default function() {
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