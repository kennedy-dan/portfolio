import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import santa from "../Assets/santa.svg";
import sign from "../Assets/sigg.svg";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

import Aos from "aos";

/**
 * @author
 * @function Services
 **/

const useStyles = makeStyles((theme) => ({
  gridCont: {
    marginTop: "180px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
    },
  },
  mainheading2: {
    fontSize: "30px",
    fontWeight: "bolder",
    // textAlign: "center",
    fontFamily: theme.font.primary.main,

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
    // textAlign: "center",
    color: theme.palette.common.blue,
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  mainheading3: {
    fontSize: "14px",
    // textAlign: "center",
    fontFamily: theme.font.primary.main,
    color: theme.palette.common.blue,

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
    fontSize: "11px",
    paddingTop: "15px",
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      paddingTop: "11px",
    },
  },
  grid: {
    // paddingLeft: "30px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
  },
  root: {
    maxWidth: "220px",
    height: "250px",
    boxShadow: "0px 7px 25px #fa9a1c",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
      height: "230px",
    },
    // borderRadius: 90
  },
  btn: {
    ...theme.typography.btn,
    fontFamily: theme.font.primary.main,

    width: 135,
    height: 25,
    marginTop: "20px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      width: 110,
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: 105,
      height: 23,
      marginTop: "20px",
      margin: "0 auto",
    },

    // width: "20%",
  },
  cardbtn: {
    paddingTop: "19px",
    fontSize: "11px",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      width: 110,
      paddingTop: "12px",
    },
  },
  img: {
    width: "97px",
    height: "45px",
    paddingBottom: "15px",
  },
  design: {
    color: theme.palette.primary.main,
    fontFamily: theme.font.primary.main,

    fontWeight: "bolder",
  },
  tryim: {
    width: "97px",
    height: "60px",
    paddingBottom: "5px",
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    Aos.init();
  }, []);

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid
      container
      direction={matchesXS ? "column" : "row"}
      justifyContent="space-evenly"
      style={{}}
      alignItems="center"
      className={classes.gridCont}
      id="section-2"
    >
      <Grid
        item
        data-aos="flip-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1200"
      >
        <Typography
          className={classes.mainheading1}
          fontWeight="fontWeightBold"
          m={1}
          data-aos="flip-right"
          data-aos-offset="200"
          // data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
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
          From fullstack web development to Performance.
        </Typography>
        <Grid container direction={matchesXS ? "column" : "row"}>
          <Link target="_blank" to="/cv/kennedy_daniel_cv.pdf" download style={{textDecoration:'none', alignSelf:'center'}}>
            <Button
              color="secondary"
              variant="contained"
              className={classes.btn}
            >
              Download CV
            </Button>
          </Link>
        </Grid>
      </Grid>

      <Grid item className={classes.grid}>
        <Card
          className={classes.root}
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
        >
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              // style={{ padding: "10px" }}
            >
              <img src={santa} alt="developer" className={classes.img} />

              <Typography
                fontWeight="fontWeightBold"
                style={{ fontWeight: "bolder" }}
              >
                Design
              </Typography>
              <p className={classes.cardType}>
                I strive for two things in design: simplicity and clarity. Great
                design is born of those two things
              </p>
              <>
                <img src={sign} alt="signature" className={classes.tryim} />
              </>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Services;
