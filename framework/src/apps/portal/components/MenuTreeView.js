import React from "react";
import DateRangeIcon from '@material-ui/icons/DateRange';
import InboxIcon from "@material-ui/icons/Inbox";
import MemoryIcon from '@material-ui/icons/Memory';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuItem from './MenuTreeViewItem';

export default function MenuTreeView() {
  const theme = useTheme();
  const useStyles = makeStyles((theme) => ({ }));
  const classes = useStyles();

  return (
    <div>
        <MenuItem pages={[1, 2, 3]} header={'System'} icon={<MemoryIcon/>}/>
        <MenuItem pages={[4, 5, 6]} header={'Reference'} icon={<InboxIcon/>}/>
        <MenuItem pages={[7, 8, 9]} header={'Schedule'} icon={<DateRangeIcon/>}/>
    </div>
  );
}