import React from 'react';
import { makeStyles, useTheme } from "@mui/styles";
import { Typography } from '@mui/material';

export default function AppTitleTypo(props) {
    const { title } = props;
    const theme = useTheme();
    const useStyles = makeStyles((theme) => ({ }));
    const classes = useStyles();
    
    return (
        <Typography variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}>
            {title}
        </Typography>
    );

}