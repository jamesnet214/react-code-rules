import React from "react";
import DateRangeIcon from '@mui/icons-material/DateRange';
import InboxIcon from "@mui/icons-material/Inbox";
import MemoryIcon from '@mui/icons-material/Memory';
import { makeStyles, useTheme } from "@mui/styles";
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