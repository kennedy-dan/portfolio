import React from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import mainbg from "../Assets/mainbg1.png";
import {  makeStyles } from "@material-ui/core/styles";
import Services from "../UI/Services";
import ServicesII from "../UI/ServicesII";
import Brands from "../UI/Brands";
import mainp from "../Assets/mainp2.svg";
import Strength from "../UI/Excptn";

/**
 * @author
 * @function Home
 **/

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url(${mainbg})`,
    height: "2824px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    maxWidth: "1465px",
  },
  firstRow: {
    marginTop: "80px",
    [theme.breakpoints.down("xs")]: {
    marginTop:"20px"
    },
  },
  mainHeading1: {
    fontSize: "80px",
    fontWeight: "bolder",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      textAlign: "center",
    },
  },
  mainHeading2: {
    fontSize: "60px",
    color: theme.palette.secondary.main,
    fontWeight: "bolder",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      textAlign: "center",
    },
  },
  mainHeading3: {
    width: "80%",
    fontSize: "12px",
    textAlign: "center",

    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "11px",
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
      width: "50%",
      textAlign: "center",
    },
  },
  img: {
    width: "420px",
    [theme.breakpoints.down("md")]: {
      width: "320px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "280px",
      marginTop: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "210px",
      marginTop: "58px",
    },
  },
  btn: {
    ...theme.typography.btn,
    width: 85,
    height: 25,
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      width: 65,
      height: 20,
      marginTop: "15px",
      fontSize: "8px",
    },
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column" className={classes.bg}>
      <Container Container className={`${classes.secondSection} container`}>
        <Grid
          item
          container
          direction={matchesXS ? "column" : "row"}
          justify={matchesMD ? "space-evenly" : "space-evenly"}
          className={classes.firstRow}
          alignItems={matchesSM ? "center" : ""}
        >
          
          <Grid
            item
            direction="column"
            style={{ height: "" }}
            alignItems={"center"}
            container
            xs
            // justify='center'
          >
            <Typography
              className={classes.mainHeading1}
              fontWeight="fontWeightBold"
              m={1}
            >
              Hy! I Am
            </Typography>
            <Typography
              className={classes.mainHeading2}
              fontWeight="fontWeightBold"
              m={1}
            >
              Daniel Kennedy
            </Typography>
            <Typography className={classes.mainHeading3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              maiores est magni voluptas saepe, error corporis, neque
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              className={classes.btn}
            >
              Hire Me
            </Button>
          </Grid>
          <Grid item justify="center" style={{}} alignItem container xs>
            <img src={mainp} alt="descriptive" className={classes.img} />
          </Grid>
        </Grid>
        <React.Fragment>
          <Services />
          <ServicesII />
          <Strength />

          <Brands />
        </React.Fragment>
      </Container>
    </Grid>
  );
};

export default Home;
