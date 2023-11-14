import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import { Link } from "./../util/router";
import { useDarkMode } from "./../util/theme";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
  },
  brand: {
    display: "block",
    height: 32,
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 12,
    paddingRight: 12,
  },
  listItemTextHeader: {
    fontWeight: "bold",
  },
  socialIcon: {
    minWidth: 30,
  },
  legal: {
    marginTop: theme.spacing(3),
    fontSize: "0.875rem",
    opacity: 0.6,
    "& a": {
      color: "inherit",
      marginLeft: "0.8rem",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <Grid container={true} justifyContent="space-between" spacing={4}>
          <Grid item={true} xs={12} md={4}>
            <Link to="/">
              <img src={logo} alt="Logo" height={95}  />
            </Link>

            {props.description && (
              <Box mt={3}>
                <Typography component="p" variant="body1">{props.description}</Typography>
                <Typography component="p" variant="body2">{props.description2}</Typography>
              </Box>
            )}

    
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <Grid container={true} spacing={4}>
              <Grid item={true} xs={12} md={4}>
                <List disablePadding={true}>
                  {/* <ListItem className={classes.listItem}>
                    <Typography
                      variant="overline"
                      className={classes.listItemTextHeader}
                    >
                      Pitanja
                    </Typography>
                  </ListItem> */}
                  {/* <ListItem
                    component={Link}
                    to="/faq"
                    button={true}
                    className={classes.listItem}
                  >
                    <ListItemText>FAQ</ListItemText>
                  </ListItem> */}
                </List>
              </Grid>
              <Grid item={true} xs={12} md={4}>
                <List disablePadding={true}>
                  {/* <ListItem className={classes.listItem}>
                    <Typography
                      variant="overline"
                      className={classes.listItemTextHeader}
                    >
                      Laurales
                    </Typography>
                  </ListItem> */}
                  {/* <ListItem
                    component={Link}
                    to="/about"
                    button={true}
                    className={classes.listItem}
                  >
                    <ListItemText>O nama</ListItemText>
                  </ListItem> */}
                  {/* <ListItem
                    component={Link}
                    to="/contact"
                    button={true}
                    className={classes.listItem}
                  >
                    <ListItemText>Kontakt</ListItemText>
                  </ListItem> */}
                </List>
              </Grid>
              <Grid item={true} xs={12} md={4}>
                <List disablePadding={true}>
                  <ListItem className={classes.listItem}>
                    <Typography
                      variant="overline"
                      className={classes.listItemTextHeader}
                    >
                      Društvene mreže
                    </Typography>
                  </ListItem>
                  {/* <ListItem
                    button={true}
                    component="a"
                    href="https://twitter.com/divjoy"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://uploads.divjoy.com/icon-twitter.svg"
                        alt="Facebook"
                      />
                    </ListItemIcon>
                    <ListItemText>Twitter</ListItemText>
                  </ListItem> */}
                  <ListItem
                    button={true}
                    component="a"
                    href="https://www.facebook.com/profile.php?id=100092177121155"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://uploads.divjoy.com/icon-facebook.svg"
                        alt="Facebook"
                      />
                    </ListItemIcon>
                    <ListItemText>Facebook</ListItemText>
                  </ListItem>
                  <ListItem
                    button={true}
                    component="a"
                    href="https://www.instagram.com/laurales_av/?igshid=NjIwNzIyMDk2Mg%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.listItem}
                  >
                    <ListItemIcon className={classes.socialIcon}>
                      <img
                        src="https://uploads.divjoy.com/icon-instagram.svg"
                        alt="Instagram"
                      />
                    </ListItemIcon>
                    <ListItemText>Instagram</ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {props.copyright && (
              <Box>
                <Typography component="p" variant="caption" >{props.copyright}</Typography>
              </Box>
            )}
      </Container>
      
    </Section>
  );
}

export default Footer;
