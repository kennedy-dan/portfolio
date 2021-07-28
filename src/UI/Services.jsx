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
  gridCont:{
    marginTop: "180px",
    [theme.breakpoints.down("xs")]: {
    marginTop: "100px",
      
    } 
    
  },
  mainheading2: {
    fontSize: "30px",
    fontWeight: "bolder",
    textAlign: "center",

    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  mainheading1: {
    fontSize: "30px",
    fontWeight: "bolder",
    textAlign: "center",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  mainheading3: {
    fontSize: "12px",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  cardType: {
    // width: "65%",
    textAlign: "center",
    fontSize: "12px",
    paddingTop: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  grid: {
    // paddingLeft: "30px",
    [theme.breakpoints.down("xs")]: {
     marginTop:'20px',
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
    // borderRadius: 90
  },
  btn: {
    ...theme.typography.btn,

    width: 135,
    height: 25,
    marginTop: "30px",
    margin:'0 auto',
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      width: 110,
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
     fontSize:'7px',
     width:80,
     marginTop:'10px',
     margin:"0 auto"
    },

    // width: "20%",
  },
  cardbtn: {
    paddingTop: "19px",
    fontSize: "12px",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      width: 110,
      paddingTop: "12px",
    },
  },
  design:{
    color: theme.palette.primary.main,
    fontWeight: "bolder"
  }
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid
      container
      direction={matchesXS ? "column" : "row"}
      justify="space-evenly"
      style={{ }}
      alignItems="center"
      className={classes.gridCont}
    >
      <Grid item>
        <Typography
          className={classes.mainheading1}
          fontWeight="fontWeightBold"
          m={1}
        >
          My Awesome
        </Typography>
        <Typography
          className={classes.mainheading2}
          fontWeight="fontWeightBold"
          m={1}
        >
          {" "}
          Services
        </Typography>
        <Typography className={classes.mainheading3}>
          Lorem ipsum dolor sit amet, consectetur
        </Typography>
        <Grid container direction={matchesXS? "column": "row"}>
        <Button color="secondary" variant="contained" className={classes.btn}>
          Download CV
        </Button>
        </Grid>
      </Grid>

      <Grid item className={classes.grid}>
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

export default Services;
