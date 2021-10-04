import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles, useTheme } from "@mui/styles";
import { IconButton } from '@mui/material';

export default function AccountButton() {
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();
    
    return (
        <IconButton size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={'primary-search-account-menu'}
                    aria-haspopup="true"
                    color="inherit">
            <AccountCircleIcon />
        </IconButton>
    );

}