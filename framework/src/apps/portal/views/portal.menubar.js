import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from "../../../partials/control/icon";

export default function() {
    return (
        <AppBar>
            <Toolbar>
                <IconButton size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}>
                    REACT FRAMEWORK
                </Typography>
            </Toolbar>
        </AppBar>
    );
}