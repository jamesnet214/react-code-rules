import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconButton } from '@material-ui/core';

export default function MenuButton(props) {
    const { isOpen, menuClick } = props;
    return (
        <IconButton size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={menuClick}>
            {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
    );

}