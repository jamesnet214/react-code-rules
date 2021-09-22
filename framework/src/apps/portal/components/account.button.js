import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

export default function() {
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