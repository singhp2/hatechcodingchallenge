import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


var headerTextStyles = {
    color: "#ecf0f1",
}

function Header() {
    return (
<AppBar position="static" color="primary">
 <Toolbar> 
     <Typography variant="title" style={headerTextStyles}>
     Coding Challenge
     </Typography>
 </Toolbar>
</AppBar>
    );
}
export default (Header);