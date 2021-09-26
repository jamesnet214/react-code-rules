import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box } from '@material-ui/core';
import MenuButton from '../components/MenuButton';
import MailButton from '../components/MailButton';
import NotificationButton from '../components/NotificationButton';
import AccountButton from '../components/AccountButton';
import AppTitle from '../components/AppTitleTypo';

export default function(props) {
    const { isOpen } = props;
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();

    function menuClick() {
        props.isOpenChanged(!isOpen);
    }

    return (
        <AppBar position={'relative'}>
            <Toolbar>
                <MenuButton menuClick={menuClick}/>
                <AppTitle title={'REACT CODE RULES'}/>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <MailButton/>
                    <NotificationButton/>
                    <AccountButton/>
                </Box>
            </Toolbar>
        </AppBar>
    );
}