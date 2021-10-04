import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Icon from '@mui/icons-material/Mail';

export default function DocsApp(props) {
    const file_name = 'markdown.md';
    const [post, setPost] = useState('');
    useEffect(() => {
        import(`./${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
    return (
        <Grid container>
            <Grid item width={150}>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon/>
                        </ListItemIcon>
                        <ListItemText primary={'Work'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon/>
                        </ListItemIcon>
                        <ListItemText primary={'Work'} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon/>
                        </ListItemIcon>
                        <ListItemText primary={'Work'} />
                    </ListItem>
                </div>
            </Grid>
            <Grid item xs>
                <MDEditor.Markdown source={post}/>
            </Grid>
        </Grid>
    );
}