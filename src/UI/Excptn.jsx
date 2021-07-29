import React, { useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";

import data from "../Component/data";
/**
 * @author
 * @function Strength
 **/

const useStyles = makeStyles((theme) => ({
  cardsSlider: {
    position: "relative",
    maxWidth: "226px",
    margin: "0 auto",
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "18px",
    },
  },
  cardsSliderWrapper: {
    display: "flex",
    position: "absolute",
    transition: "transform 300ms cubic-bezier(0.455, 0.03,  0.515, 0.955)",
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
  card: {
    flex: 1,
    minWidth: "200px",
    opacity: 0.01,
    transform: "scale(0.7)",
    // overflowX:'hidden',

    transition:
      "opacity 300ms linear,transform 300ms cubic-bezier(0.455, 0.03,  0.515, 0.955) ",
    boxShadow: "0px 9px 15px rgba(0,0,0,0.4)",
    [theme.breakpoints.down("xs")]: {
      minWidth: "150px",
      marginLeft: "10px",
    },
  },
  activeCard: {
    opacity: 1,
    flex: 1,
    width: "200px",
    transform: "scale(1)",
    boxShadow: "0px 9px 15px rgba(0,0,0,0.4)",
    [theme.breakpoints.down("xs")]: {
      minWidth: "150px",
      marginLeft: "40px",
    },
  },
  btnnxt: {
    borderRadius: "0% 100% 100% 2% / 100% 100% 100% 100% ",
    background: theme.palette.secondary.main,
    fontSize: "10px",
    marginRight: "7px",
    boxShadow: "0px 9px 15px #fa9a1c",
    fontFamily: theme.font.primary.main,

    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
    },
  },
  btnprev: {
    borderRadius: "100% 0% 100% 97% / 100% 0% 0% 100% ",
    background: theme.palette.secondary.main,
    fontSize: "10px",
    fontFamily: theme.font.primary.main,

    boxShadow: "0px 9px 15px #fa9a1c",

    color: theme.palette.common.white,
    "&:hover": {
      background: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
      // width:'10px'
    },
  },
}));

const Strength = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[0]);

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const nextProperty = () => {
    const newIndex = property.index + 1;
    setProperty(data.properties[newIndex]);
  };
  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(data.properties[newIndex]);
  };

  return (
    <div style={{ marginTop: "180px" }}>
      <Grid container justify="center" xs={matchesXS ? 12 : 4}>
        <Typography
          className={classes.mainheading2}
          fontWeight="fontWeightBold"
          m={1}
        >
          {" "}
          Tech Stack I use
        </Typography>
      </Grid>
      <Grid container justify="center" xs={matchesXS ? 12 : 4}>
        <Button
          onClick={nextProperty}
          disabled={property.index === data.properties.length - 1}
          className={classes.btnnxt}
        >
          Next
        </Button>
        <Button
          onClick={prevProperty}
          disabled={property.index === 0}
          className={classes.btnprev}
          // color= 'secondary'
        >
          Prev
        </Button>
      </Grid>
      <div className={classes.col}>
        <div className={`${classes.cardsSlider} `}>
          <div
            className={classes.cardsSliderWrapper}
            style={{
              transform: `translate(-${
                property.index * (100 / properties.length)
              }%)`,
            }}
          >
            {properties.map((props, index) => (
              <Card
                className={
                  props.index === property.index
                    ? classes.activeCard
                    : classes.card
                }
              >
                <CardMedia>
                  <img
                    src={props.picture}
                    style={{ width: "120px", marginLeft: "30px" }}
                    alt='stack'
                  />
                </CardMedia>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strength;
