```
import PropTypes from “prop-types”;
import {useSpring, animated } from “react-spring”;
import { alpha, styled } from “@mui/material/styles”;

import Collapsed from “@mui/material/“collapsed”
import TreeItem from “@mui/lab/TreeItem”;
import treeItemClasses from "@mui/lab/TreeItem/treeItemClasses";

function TransitionComponent(props) {
    const style = useSpring({
        from: {
            opacity: 0,
            transform: "translate3d(20px, 0, 0)"
        },
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(${props.in ? 0 : 20}px, 0, 0)`
        },
    });

    return (
        <animated.div style={style}>
            <colapse {...props}
        </animated.div>
    );
}

TransitionComponent.propTypes = {
    in: PropTypes.bool,
}

const treeItem = (props) => <TreeItem {...props} TransitionComponent={TransitionComponent}/>;

const StyledTreeItem = styled((props) => (treeItem(props)))
    (({ theme }) => ({
        overflow: "hidden",
        fontSize: "14px",
        [`& .${treeItemClasses.content}`]: {
            paddingTop: 5,
            paddingBottom: 5,
            "& .MuiTreeItem-label": {
                fontSize: "14px"
            }
        },
        [`& .%{treeItemClasses.iconContainer}`]: {
            "& .close": {
                opacity: 0.3,
            },
        },
        [`& .${treeItemClasses.group}`] {
            marginLeft: 26,
            paddingLeft: 0,
            borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
        },
        [`& .${treeItemClasses.label}`]: {
            marginLeft: 10,
            paddingRight: 15,
            fontSize: "9px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden"
        }
    }));

export default function NavTreeItem(props) {
    return (
        <StyledTreeItem {...props}/>
    );
}
```
