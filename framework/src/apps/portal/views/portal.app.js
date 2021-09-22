import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuBar from './portal.menubar';
import NavBar from './portal.navbar';
import Dashboard from "../../../pages/dashboard/views/dashboard.app";
import '../design/portal.css';

export default function() {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ 
        content: {
            flexGrow: 1,
            padding: "20px",
        }
    }));
    const classes = useStyles();

    const isOpenChanged = (changedValue) => {
        setIsOpen(changedValue);
    }

    return (
        <div className={'root'}>
            <div className={'drawerDiv'}>
                <MenuBar isOpen={isOpen} isOpenChanged={isOpenChanged}/>    
                <div className={'frame'}>
                    <NavBar isOpen={isOpen}/>
                    <main className={classes.content}>
                        <Dashboard/>
                    </main>
                </div>
            </div>
        </div>
    );
}