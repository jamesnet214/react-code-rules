import MailIcon from '@material-ui/icons/Mail';
import { IconButton, Badge } from '@material-ui/core';

export default function() {
    return (
        <IconButton size="large" 
                    aria-label="show 4 new mails"
                    color="inherit">
            <Badge badgeContent={4} 
                color="error">
                <MailIcon />
            </Badge>
        </IconButton>
    );

}