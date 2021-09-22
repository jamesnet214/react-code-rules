import React from 'react';
import Icon from "@material-ui/icons/ImportContactsTwoTone";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import MenuBar from './portal.menubar';
import NavBar from './portal.navbar';
import Dashboard from "../../../pages/dashboard/views/dashboard.app";
import '../design/portal.css';

export default function() {
    const [isOpen, setIsOpen] = React.useState(true);
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();

    function menuClick() {
        setIsOpen(!isOpen);
    }

    const isOpenChanged = (changedValue) => {
        setIsOpen(changedValue);
    }

    return (
        <div className={'root'}>
            <div className={'drawerDiv'}>
                <MenuBar isOpen={isOpen} isOpenChanged={isOpenChanged}/>    
                <div className={'frame'}>
                    <NavBar isOpen={isOpen}/>
                    <main>
                        <Dashboard/>
                        <IconButton onClick={menuClick}>
                            <Icon/>
                        </IconButton>
                    </main>
                </div>
            </div>
        </div>
    );
}