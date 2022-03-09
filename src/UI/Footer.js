import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: "40px",
  },
  p: {
    textAlign:'center',
    color: theme.palette.common.blue,
    fontSize:'28px',

  },
  fb: {
    color: theme.palette.secondary.main,
    padding: "10px",
  },
  p2: {
    color: theme.palette.secondary.main,
    textAlign:'center',
    marginTop:'60px'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column' className={classes.footerContainer}>
      <p className={classes.p2}>© 2018 kennedy Daniel. All Rights Reserved.</p>

    </Grid>
  );
};

export default Footer;
