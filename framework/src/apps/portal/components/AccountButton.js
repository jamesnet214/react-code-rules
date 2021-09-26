import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { IconButton } from '@material-ui/core';

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