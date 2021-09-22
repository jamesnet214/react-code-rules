import React from 'react';
import { Typography } from '@material-ui/core';

export default function(props) {
    const { title } = props;
    
    return (
        <Typography variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}>
            {title}
        </Typography>
    );

}