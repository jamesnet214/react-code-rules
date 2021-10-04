# 화면 개발 가이드

```jsx
import React from 'react';
import { Grid } from '@mui/material';
import Content from './DocsContent';
import Search from './DocsSearch';

export default function DocsApp(props) {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Search/>
            </Grid>
            <Grid item xs>
                <Content/>
            </Grid>
        </Grid>
    );
}
```