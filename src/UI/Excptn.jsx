import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Card,

  useTheme,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import dot from "../Assets/dots.svg";


import "aos/dist/aos.css";

import Aos from "aos";


import data from "../Component/data";
import {
  ArrowBack,
  ArrowForward,
} from "@material-ui/icons";
/**
 * @author
 * @function Strength
 **/

const useStyles = makeStyles((theme) => ({
  cardsSlider: {
    position: "relative",
    maxWidth: "826px",
    overflowX: "hidden",
    scroll: "hidden",
    margin: "0 auto",
    marginTop: "70px",

    // marginTop: "10px",
    zIndex: 1,
    [theme.breakpoints.only("md")]: {
      marginTop: "50px",
    },
    [theme.breakpoints.only("sm")]: {
      marginTop: "60px",
    },
    [theme.breakpoints.only("xs")]: {
      marginTop: "38px",
      zIndex: 0,
      overflowX: "visible",
      // width:'1000px',
      maxWidth: "10%",
    },
  },
  cardsSliderWrapper: {
    display: "flex",
    position: "absolute",
    transition: "transform 300ms cubic-bezier(0.455, 0.03,  0.515, 0.955)",
    [theme.breakpoints.only("xs")]: {
      marginTop: "38px",
      zIndex: 0,

      // overflow:'visible'
    },

    // backgroundImage: `url(${dot})`,
    // // height: "100vh",
    // // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "repeat",
  },
  mainheading2: {
    fontSize: "30px",
    fontWeight: "bolder",
    color: theme.palette.secondary.main,
    fontFamily: theme.font.primary.main,

    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  mainheading1: {
    fontSize: "30px",
    fontWeight: 400,
  },
  col: {
    backgroundImage: `url(${dot})`,
    height: "28vh",
    // width:'90px',
    // backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.only("sm")]: {
      height: "22vh",
    },
    [theme.breakpoints.only("xs")]: {
      height: "22vh",
    },
    // yIndex:-1
    // backgroundImage: `url(${dot})`,
    // height: "100vh",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // // backgroundRepeat: "repeat",
    // width: "100%",
  },
  card: {
    display:'flex',

    width: "130px",
    justifyContent:"center",

    opacity: 1,
    transform: "scale(0.7)",
    // overflowX:'hidden',

    transition:
      "opacity 300ms linear,transform 300ms cubic-bezier(0.455, 0.03,  0.515, 0.955) ",
    boxShadow: "0px 9px 15px rgba(0,0,0,0.4)",
    [theme.breakpoints.down("xs")]: {
      minWidth: "10px",
      marginLeft: "1px",
    },
  },
  activeCard: {
    opacity: 1,
    display:'flex',
    // flex: 1,
    width: "130px",
    // heigth:'130px',
    transform: "scale(1)",
    boxShadow: "0px 0px 5px 2px #fa9a1c",
    justifyContent:"center",
    [theme.breakpoints.down("xs")]: {
      minWidth: "10px",
      marginLeft: "1px",
    },
  },
  btnnxt: {
    // borderRadius: "0% 100% 100% 2% / 100% 100% 100% 100% ",
    background: theme.palette.secondary.main,
    fontSize: "10px",
    marginRight: "7px",
    height: "30px",
    boxShadow: "0px 0px 5px 2px #fa9a1c",

    fontFamily: theme.font.primary.main,
    zIndex: 2,
    // color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2px",
      height: 2,
      width: 40,
    },
    // [theme.breakpoints.only("xs")]: {
    //   zIndex: 1,
    // },
  },
  btnprev: {
    // borderRadius: "100% 0% 100% 97% / 100% 0% 0% 100% ",
    background: theme.palette.secondary.main,
    fontSize: "10px",
    fontFamily: theme.font.primary.main,
    zIndex: 2,
    height: "30px",

    boxShadow: "0px 0px 5px 2px #fa9a1c",

    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2px",
      height: 2,
      width: 40,
      // width:'10px'
    },
  },
  colCover:{
    marginTop: "30px" ,
    [theme.breakpoints.only("sm")]: {
      marginTop: "30px" ,
   
      // width:'10px'
    },
  }
}));

const Strength = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [properties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[0]);

  useEffect(() => {
    Aos.init();
  }, []);

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const nextProperty = () => {
    const newIndex = property.index + 1;
    setProperty(data.properties[newIndex]);
  };
  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(data.properties[newIndex]);
  };

  const styleXS = {
    transform: `translate(-${property.index * (120 / properties.length)}%)`,
  };

  const style = {
    transform: `translate(-${property.index * (100 / properties.length)}%)`,
  };

  return (
    <div style={{ marginTop: "180px" }}>
      <Grid
        container
        
        // alignItems="center"
        direction={matchesXS ? "column" : "row"}
        className={classes.col}
      >
        <Grid
          container
          direction="column"
          item
          xs={matchesXS ? 12 : 4}
          style={{ }}
          className={classes.colCover}
        >
          <Typography
            className={classes.mainheading2}
            fontWeight="fontWeightBold"
            m={1}
          >
            {" "}
            Tech Stack I use
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            item
            xs={matchesXS ? 12 : 6}
          >
            <Grid item>
              <IconButton
                onClick={nextProperty}
                disabled={property.index === data.properties.length - 1}
                className={classes.btnnxt}
              >
                <ArrowForward />
                {/* <img src = {Next} /> */}
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={prevProperty}
                disabled={property.index === 0}
                className={classes.btnprev}
                // color= 'secondary'
              >
                <ArrowBack />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className={`${classes.cardsSlider} `}
          item
          xs={matchesXS ? null : 8}
          // style={{ marginTop: "40px" }}
          container
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <div
            className={classes.cardsSliderWrapper}
            style={matchesXS ? styleXS : style}
         
          >
            {properties.map((props, index) => (
              <Card
              key={index}
                className={
                  props.index === property.index
                    ? classes.activeCard
                    : classes.card
                }
               
              >
                <img
                  src={props.picture}
                  style={{
                    maxWidth: "70px",
                    width:'70px',
                    // maxHeight: "40px",

                    // justifyContent: "center",
                    // justifySelf: "center",
                    // paddingLeft: "40px",
                    // paddingTop: "15px",
                    // paddingBottom: "1px",
                    objectFit:"contain"

                    // paddingLeft: "10px",
                    // paddingRight: "10px",
                    // fontSize:'2px'
                  }}
                  alt="stack"
                />
              </Card>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Strength;
