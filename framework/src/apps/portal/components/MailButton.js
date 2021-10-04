import MailIcon from '@mui/icons-material/Mail';
import { makeStyles, useTheme } from "@mui/styles";
import { IconButton, Badge } from '@mui/material';

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