import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";

/**
 * @author
 * @function Services
 **/

const useStyles = makeStyles((theme) => ({
  mainheading2: {
    fontSize: "30px",
    fontWeight: 400,
    color: theme.palette.secondary.main,
    fontFamily: theme.font.primary.main,

  },
  mainheading1: {
    fontSize: "30px",
    fontWeight: 400,
    fontFamily: theme.font.primary.main,

  },
  cardType: {
    textAlign: "center",
    fontSize: "10px",
    paddingTop: "15px",
    fontFamily: theme.font.primary.main,
    width:'100%',
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  grid: {
    marginTop: "-50px",
    [theme.breakpoints.down("xs")]: {
      // marginTop: "10px",
    },
  },
  root: {
    maxWidth: "190px",
    height: "190px",
    boxShadow: "0px 9px 15px rgba(0,0,0,0.4)",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "160px",
      height: "160px",
    },
    //
  },
  btn: {
    borderRadius: "15%",
    marginTop: "30px",
    color: theme.palette.common.white,
    fontFamily: theme.font.primary.main,

  },
  cardbtn: {
    paddingTop: "19px",
    fontSize: "12px",
    color: theme.palette.secondary.main,
    fontFamily: theme.font.primary.main,

  },
  design:{
    fontFamily: theme.font.primary.main,
    fontWeight: "bolder"

  },
  gridii: {
    paddingLeft: "47px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "25px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
    },
  },
}));

const ServicesII = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid
      container
      direction={matchesXS ? "column" : "row"}
      justify="center"
      style={{ marginTop: "60px" }}
      alignItems="center"
    >
      <Grid item className={classes.grid}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <Typography
                fontWeight="fontWeightBold"
                style={{ fontWeight: "bolder" }}
              >
                Design
              </Typography>
              <Typography className={classes.cardType}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                maiores
              </Typography>
              <>
                <Button className={classes.cardbtn}>Learn More</Button>
              </>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item className={classes.gridii}>
        <Card className={classes.root}>
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <Typography
                fontWeight="fontWeightBold"
                style={{  }}
                className={classes.design}
              >
                Design
              </Typography>
              <Typography className={classes.cardType}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                maiores
              </Typography>
              <>
                <Button className={classes.cardbtn}>Learn More</Button>
              </>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ServicesII;
