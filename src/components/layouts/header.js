import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


var headerTextStyles = { //Styling for Material UI AppBar
    color: "#ecf0f1",
}

function Header() {
    return (
<AppBar position="static" color="primary">
 <Toolbar> 
     <Typography variant="title" style={headerTextStyles}>
     Coding Challenge [Larry Singh]
     </Typography>
 </Toolbar>
</AppBar>
    );
}
export default (Header);