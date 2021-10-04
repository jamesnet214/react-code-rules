import React from 'react';
import { Route } from 'react-router';
import { makeStyles, useTheme } from "@mui/styles";
import MenuBar from './PortalMenuBar';
import NavBar from './PortalNavBar';
import Dashboard from "../../../pages/dashboard/views/DashboardApp";
import DocsApp from "../../../pages/docs/views/DocsApp";
import '../../../design/apps/portal/portal.css';

export default function PortalApp() {
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
                        <Route path='/pages1' component={Dashboard}/>
                        <Route path='/pages9' component={DocsApp}/>
                    </main>
                </div>
            </div>
        </div>
    );
}