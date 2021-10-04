import React from "react";
import { Link } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Pages from "@mui/icons-material/WbSunnyOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles, useTheme } from "@mui/styles";
import { List, Collapse, ListItem } from "@mui/material";

export default function MenuTreeViewItem(prop) {
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