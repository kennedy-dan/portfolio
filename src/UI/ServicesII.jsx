import React,{useEffect} from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Headset from "../Assets/headsett.svg";
import Seo from "../Assets/seo.svg";
import sign from "../Assets/sigg.svg";
import "aos/dist/aos.css";

import Aos from "aos";
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
    fontSize: "11px",
    paddingTop: "15px",
    fontFamily: theme.font.primary.main,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      paddingTop: "11px",
    },
  },
  grid: {
    marginTop: "-50px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "20px",
    },
  },
  root: {
    maxWidth: "220px",
    height: "250px",
    boxShadow: "0px 9px 25px #fa9a1c",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "200px",
      height: "230px",
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
    height: 10,
    border: "none",
    marginBottom: "10px",
  },
  design: {
    fontFamily: theme.font.primary.main,
    fontWeight: "bolder",
  },
  gridii: {
    paddingLeft: "47px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "25px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      paddingTop: "20px",

    },
  },
  img: {
    width: "97px",
    height: "60px",
    paddingBottom: "5px",
  },
  tryim: {
    width: "97px",
    height: "60px",
    paddingBottom: "5px",
  },
}));

const ServicesII = (props) => {
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
      justifyContent="center"
      style={{ marginTop: "60px" }}
      alignItems="center"
    >
      <Grid item className={classes.grid}>
        <Card className={classes.root}   data-aos="flip-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200">
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              // style={{ padding: "10px" }}
            >
              <img src={Headset} alt="developer" className={classes.img} />

              <Typography
                fontWeight="fontWeightBold"
                style={{ fontWeight: "bolder" }}
              >
                Developer
              </Typography>
              <p className={classes.cardType}>
                I create intuitive and user-friendly cross-platform mobile
                applications, using React-native.
              </p>
              <>
                <img src={sign} alt='sign' className={classes.tryim} />
              </>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item className={classes.gridii}>
        <Card
          className={classes.root}
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1200"
        >
          <CardContent>
            <Grid container direction="column" alignItems="center">
              <img src={Seo} alt="developer" className={classes.img} />

              <Typography
                fontWeight="fontWeightBold"
                style={{}}
                className={classes.design}
              >
                Seo
              </Typography>
              <p className={classes.cardType}>
                Today it’s not about ‘get the traffic’ — it’s about ‘get the
                targeted and relevant traffic.
              </p>
              <>
                <img src={sign} alt='sign' className={classes.tryim} />
              </>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ServicesII;
