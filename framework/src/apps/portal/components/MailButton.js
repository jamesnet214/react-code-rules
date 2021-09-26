import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { IconButton, Badge } from '@material-ui/core';

export default function MailButton() {
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();
    
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