import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';


const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    MuiAppBar-colorPrimary: {
      color: grey,
    },
}));



function Navbar() {
    
    return(
        <AppBar position="static" >
            <Toolbar variant="secondary">
            <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
            </Toolbar>

        </AppBar>
    );
};


export default Navbar;