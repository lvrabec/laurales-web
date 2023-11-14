import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import Button from "@material-ui/core/Button";
// import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import NightsStayIcon from "@material-ui/icons/NightsStay";
// import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import { useDarkMode } from "./../util/theme";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 95,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    // setMenuState({ anchor: event.currentTarget, id });
  };

  // const handleCloseMenu = () => {
  //   setMenuState(null);
  // };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link to="/">
              <img src={logo} alt="Logo" className={classes.logo} />
            </Link>
            <div className={classes.spacer} />
            {/* <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden> */}
            {/* <Hidden smDown={true} implementation="css">
              <Button component={Link} to="/about" color="inherit">
                O nama
              </Button>
              <Button component={Link} to="/contact" color="inherit">
                Kontakt
              </Button>
              <Button component={Link} to="/faq" color="inherit">
                FAQ
              </Button>
            </Hidden> */}
          </Toolbar>
        </Container>
      </AppBar>

    </Section>
  );
}

export default Navbar;
