import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import ClearIcon from "@material-ui/icons/Clear";

import {
  Tabs,
  Tab,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";

import Scrollspy from "react-scrollspy";

const useStyles = makeStyles((theme) => ({
  grow: {
    // flexGrow: 1,
    ...theme.mixins.toolbar,
  },

  growDrawer: {
    // ...theme.mixins.toolbar,
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // display: "none",
    fontFamily: theme.font.primary.main,
    fontWeight: 500,

    [theme.breakpoints.only("sm")]: {
      display: "block",
      marginTop: "5px",
    },
    [theme.breakpoints.only("xs")]: {
      // marginTop: "-5em",
      display: "block",
    marginTop: "5px",

    },
    [theme.breakpoints.down("md")]: {
      // marginTop: "-5em",
      // color: 'red'
    },
    // color: theme.palette.common.blue,
    color: theme.palette.secondary.main,

    // marginLeft: "3em",
    marginTop: "30px",
    fontSize: "25px",
  },
  titleScroll: {
    // display: "none",
    fontFamily: theme.font.primary.main,
    fontWeight: 500,

    [theme.breakpoints.only("xs")]: {
      // marginTop: "5em",
      marginLeft: "1px",
      marginTop: "5px",
    },
    [theme.breakpoints.only("sm")]: {
      display: "block",
      marginTop: "5px",
    },
    color: theme.palette.secondary.main,
    // marginLeft: "1em",
    marginTop: "30px",
    fontSize: "25px",
  },
  appBar: {
    backgroundColor: "transparent",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
    padding: "0 20px",
    // zIndex: theme.zIndex.modal + 1
  },
  appBarScrolled: {
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #ededed",
    transition: theme.transitions.create(["background-color"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.standard,
    }),
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  opa: {
    background: "transparent",
    // opacity: '0.6'
  },
  tabContainer: {
    // marginTop: '-7px'
  },
  tab: {
    marginLeft: "25px",
    minWidth: 5,
    textTransform: "none",
    fontWeight: 9000,
    color: theme.palette.primary.main,
    fontFamily: theme.font.primary.main,

    // color: "white",
    fontSize: "1em",
  },
  tabScrolled: {
    // marginLeft: "25px",
    minWidth: 5,
    textTransform: "none",
    fontWeight: 9000,
    fontFamily: theme.font.primary.main,
    color: "black",
    fontSize: "1em",
  },
  btn: {
    ...theme.typography.btn,
    margin: "10px",
    outline: "none",
    // width: '10px',
    // height: 25,

    "&:hover": {
      boxShadow: "none",
      backgroundColor: theme.palette.secondary.main,
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    "&:active": {
      outline: "none",
    },
  },
  scrollBtn: {
    fontSize: "13px",
    color: "black",
    boxShadow: "none",
    borderRadius: 0,
    fontFamily: theme.font.primary.main,
    textTransform: "none",
  },
  btnCont: {
    marginTop: "6px",
    marginRight: "1em",
  },
  drawerIcon: {
    fontSize: "25px",
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
  },
  drawerList: {
    // color: 'black',
    fontSize: "17px",
    fontWeight: "50px",
    color: theme.palette.primary.main,
    textAlign: "center",
    boxShadow: "none",
    borderRadius: "0px",
    "&:hover": {
      boxShadow: "0px",
      // border:"1px solid white"
    },
    "&:active": {
      // border:'0px solid yellow',
      outline: "none",
    },
  },
  mainListIttem: {
    marginTop: "2em",
  },
  drawerRegBtnItem: {
    color: theme.palette.primary.main,
    fontSize: "17px",
  },
  cancelIcon: {
    fontSize: "30px",
    marginRight: "31px",
    marginTop: "10px",
    color: theme.palette.primary.main,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matchesMD = useMediaQuery(theme.breakpoints.only("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpendrawer] = useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 150,
  });

  const tabs = (
    <React.Fragment>
      <Grid item>
        <Grid container>
        <Scrollspy
              items={["section-1", "section-2", "section-3", "section-4"]}
              // currentClassName="is-current"
            >
          <Tabs
            centered
            className={classes.tabContainer}
            value={value}
            onChange={handleChange}
          >
           
              <Tab
                className={`${classes.tab} ${
                  trigger === false ? "" : classes.tabScrolled
                }`}
                label="Home"
                href="#section-1"
              />
              <Tab
                className={`${classes.tab} ${
                  trigger === false ? "" : classes.tabScrolled
                }`}
                label="Services"
                href="#section-2"

              />
              <Tab
                className={`${classes.tab} ${
                  trigger === false ? "" : classes.tabScrolled
                }`}
                label="Works"
                href="#section-3"

              />
              <Tab
                className={classes.btn}
                variant="contained"
                label="Contact"
                href="#section-4"

              />
          </Tabs>
          </Scrollspy>

        </Grid>
      </Grid>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor={"top"}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpendrawer(false)}
        onOpen={() => setOpendrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.growDrawer} />
        <Grid container direction="column">
          <Grid container justifyContent="flex-end">
            <ClearIcon
              className={classes.cancelIcon}
              onClick={() => setOpendrawer(false)}
            />
          </Grid>
          <Grid
            container
            justifyContent="center"
            align="center"
            style={{ marginTop: "80px" }}
          >
            <List disablePadding justifyContent="center" alignItems="center">
              <ListItem
                button
                onClick={() => setOpendrawer(false)}
                className={classes.mainListIttem}
              >
                <ListItemText disableTypography className={classes.drawerList}>
                  Home
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setOpendrawer(false)}>
                <ListItemText disableTypography className={classes.drawerList}>
                  Services
                </ListItemText>
              </ListItem>

              <ListItem button onClick={() => setOpendrawer(false)}>
                <ListItemText disableTypography className={classes.drawerList}>
                  Contacts
                </ListItemText>
              </ListItem>

              {/* <ListItem
                button
                onClick={() => setOpendrawer(false)}
                style={{ alignSelf: "center" }}
              >
                <ListItemText
                  disableTypography
                  className={classes.drawerRegBtnItem}
                >
                  Register
                </ListItemText>
              </ListItem> */}
            </List>
          </Grid>
        </Grid>
      </SwipeableDrawer>

      <IconButton onClick={() => setOpendrawer(!openDrawer)}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  const styleLG = {
    maxWidth: "80%",
  };

  const styleMD = {
    maxWidth: "85%",
  };

  const styleSM = {
    maxWidth: "90%",
  };

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        elevation={0}
        className={`${classes.appBar} ${
          trigger === false ? "" : classes.appBarScrolled
        }`}
      >
        <Container style={matchesMD ? styleMD : matchesSM ? styleSM : styleLG}>
          <Toolbar disableGutters>
            <Grid container justifyContent="space-between">
              <Grid item xs container justifyContent="space-between">
                <Grid item>
                  <Typography
                    className={`${classes.title} ${
                      trigger === false ? "" : classes.titleScroll
                    }`}
                    noWrap
                  >
                    Ken
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs
                justifyContent={matchesSM ? "flex-end" : "space-evenly"}
              >
                {matchesSM ? drawer : tabs}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
