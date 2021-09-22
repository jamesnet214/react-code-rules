import React from "react";
import { Link } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Pages from "@material-ui/icons/WbSunnyOutlined";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, Collapse, ListItem } from "@material-ui/core";

export default function(prop) {
  const { header, icon, pages } = prop;
  const [openCollapse, setOpenCollapse] = React.useState(false);    
  const theme = useTheme();
  const useStyles = makeStyles((theme) => ({ }));
  const classes = useStyles();

  function pageEle(page){
    return "(" + page +")";
  }

  function handleOpenSettings(){
    setOpenCollapse(!openCollapse);
  }

  return (
    <div>
        <List>
            <ListItem button onClick={handleOpenSettings}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={header} />
                {openCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
        </List>
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {pages.map((page) =>
                    <ListItem button component={Link} to={"/pages" + page}>
                        <ListItemIcon>
                            <Pages />
                        </ListItemIcon>
                        <ListItemText primary={"Sub Pages" + pageEle(page)}/>
                    </ListItem>
                )}
            </List>
        </Collapse>
    </div>
  );
}