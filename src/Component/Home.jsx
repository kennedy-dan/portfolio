import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Services from "../UI/Services";
import ServicesII from "../UI/ServicesII";
import Brands from "../UI/Brands";
import mainp from "../Assets/SVG/SVG/Asss.svg";
import Strength from "../UI/Excptn";
import Projects from "../UI/Projects";

import "aos/dist/aos.css";

import Aos from "aos";
/**
 * @author
 * @function Home
 **/

const useStyles = makeStyles((theme) => ({
  bg: {
    // backgroundImage: `url(${mainbg})`,
    // height: "2824px",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // maxWidth: "1465px",
  },
  firstRow: {
    marginTop: "80px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    },
  },
  mainHeading1: {
    fontSize: "90px",
    fontWeight: "bolder",
    color: theme.palette.common.blue,
    fontFamily: theme.font.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "75px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
      textAlign: "center",
    },
  },
  mainHeading2: {
    fontSize: "60px",
    color: theme.palette.secondary.main,
    fontWeight: "bolder",
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.only("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      // textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
      textAlign: "center",
    },
  },
  mainHeading3: {
    // width: "90%",
    fontSize: "14px",
    // textAlign: "center",
    fontFamily: theme.font.primary.main,
    color: theme.palette.common.blue,

    [theme.breakpoints.only("md")]: {
      fontSize: "12px",
      // width: "50%",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "11px",
      // width: "80%",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "10px",
      // width: "50%",
      textAlign: "center",
      alignSelf: "center",
      marginTop: "10px",
    },
  },
  img: {
    width: "620px",
    height: "500px",
    marginTop: "-20px",

    [theme.breakpoints.only("md")]: {
      width: "550px",
      height: "500px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "390px",
      height: "300px",
      marginTop: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "320px",
      height: "300px",
      textAlign: "center",
      marginTop: "58px",
    },
  },
  btn: {
    ...theme.typography.btn,
    width: 85,
    height: 25,
    fontFamily: theme.font.primary.main,
    marginTop: "30px",
    textTransform: "none",
    textDecoration: "none",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      textDecoration: "none",
      boxShadow: "2px 3px 8px #fa9a1c",
    },
    [theme.breakpoints.only("sm")]: {
      width: 85,
      height: 27,
      marginTop: "15px",
      fontSize: "8px",
    },
    [theme.breakpoints.only("xs")]: {
      width: 85,
      height: 23,
      marginTop: "15px",
      fontSize: "10px",
      alignSelf: "center",
      // textAlign:'center'
    },
  },
  hireMe: {
    textDecoration: "none",
    [theme.breakpoints.only("xs")]: {
      alignSelf: "center",
    },
  },
  typo: {
    ...theme.typography.typo,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      textDecoration: "none",
      boxShadow: "2px 3px 8px #fa9a1c",
    },
  
  },
  imgContianer:{
      width: "50%",
    [theme.breakpoints.only("xs")]: {
      width: "100%",

    }

  }
}));

const Home = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.only("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.only("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  // {matchesMD? 'md': matchesSM ? 'sm' : matchesLG? 'md' : ' lg'}

  useEffect(() => {
    Aos.init();
  }, []);

  const styleLG = {
    maxWidth: "80%",
  };

  const styleMD = {
    maxWidth: "85%",
  };

  const styleSM = {
    maxWidth: "100%",
  };
  return (
    <Grid container direction="column" className={classes.bg}>
      <Container
        className={`${classes.secondSection} container lg:max-w-[80%] md:max-w-[85%] max-w-[96%]`}
        // style={matchesMD ? styleMD : matchesSM ? styleSM : styleLG}
      >
        <div
          
          container
          // direction={matchesXS ? "column" : "row"}
          // justifyContent={matchesMD ? "center" : "space-evenly"}
          className={`${classes.firstRow} md:flex `}
          // alignItems={matchesSM ? "center" : matchesXS ? "center" : null}
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
          id="#"
        >
          <div
            className='md:w-[50%]'
            // direction="column"
            // style={{ width: "40%" }}
            // container
            // xs
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
            <p className={`${classes.mainHeading3} md:w-[90%] `}>
              I'm a full stack developer with years of experience building
              mobile and web applications using tools like HTML, CSS and
              Javascript, and the framework, Reactjs and React-native and Nodejs
              and no-SQL database management tools.
            </p>
<div className='w-full flex justify-center md:justify-start mt-3' >
<Button
              color="secondary"
              variant="contained"
              className={` f  `}
            >
              <a
                href="mailto:kennooox@gmail.com"
                className={classes.hireMe}
                style={{}}
              >
                <Typography className={classes.typo}>Hire Me</Typography>
              </a>
            </Button>
</div>
   
          </div>
          <div   className={classes.imgContianer} container>
            <img src={mainp} alt="descriptive" className={classes.img} />
          </div>
        </div>
        <React.Fragment>
          <Services />
          <ServicesII />
          <Strength />
          <Projects />
          <Brands />
        </React.Fragment>
      </Container>
    </Grid>
  );
};

export default Home;
