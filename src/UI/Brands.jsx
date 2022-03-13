import React, { useEffect } from "react";
import { Grid, Card, useMediaQuery, useTheme } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import contactbg from "../Assets/contact-copy.svg";
import contacttdown from "../Assets/cntaccc.svg";
import { Facebook, Twitter, Email, GitHub, LinkedIn } from "@material-ui/icons";
import cbg from "../Assets/SVG/contactbg.svg";

import "aos/dist/aos.css";

import Aos from "aos";

/**
 * @author
 * @function Brands
 **/

const useStyles = makeStyles((theme) => ({
  mainheading2: {
    fontSize: "30px",
    fontWeight: "bolder",
    color: theme.palette.secondary.main,
  },
  TextField3: {
    width: "390px",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover.MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "& .MuiFilledInput-root": {
      background: "#e4f5fc",
    },
    [theme.breakpoints.down("md")]: {
      width: "354px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  mainheading1: {
    fontSize: "30px",
    fontWeight: "bolder",
    color: theme.palette.secondary.main,
    marginBottom: "8px",
    fontFamily: theme.font.primary.main,
  },
  TextFieldContainer: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  TextField1: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover.MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    width: "135px",
    // marginRight:'6px',

    "& .MuiFilledInput-root": {
      background: "#e4f5fc",
    },
    // [theme.breakpoints.down("md")]: {
    //   // width: "169px",
    // },
    [theme.breakpoints.only("sm")]: {
      width: "84px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  TextField2: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover.MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "& .MuiFilledInput-root": {
      background: "#e4f5fc",
    },
    width: "135px",
    [theme.breakpoints.down("md")]: {
      // width: "169px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "84px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  contactMsgGrid: {
    // width: "40%",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      textAlign: "center",
    },
  },

  cardMsFrid:{
    position: "relative",
    [theme.breakpoints.only("sm")]: {
      width: "100%",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
      marginTop:'30px'
    },
  },
  contactMsg: {
    ...theme.typography.typo,
    fontSize: "34px",
    zIndex: 1,
    position: "absolute",
    top: "40%",
    left: "50%",
    color: theme.palette.common.blue,
    transform: "translate(-50%, -50%)",
    [theme.breakpoints.only("md")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "25px",
    },
  },

  cintactCoverImg: {},
  btn: {
    width: "100px",
    marginTop: "10px",
    // backgroundColor: "#96dcfa",
    textTransform: "none",
    fontFamily: "poppins",
    color: "#457cbf",
    fontSize: "15px",
    borderRadius: 10,
    boxShadow: "0px 9px 15px #fa9a1c",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      marginTop: "10px",
    },
    "&:hover": {
      backgroundColor: "#96dcfa",
      boxShadow: "0px 9px 15px black",
    },
  },
  btnMsg: {
    width: "130px",
    marginTop: "10px",
    // padding:'20px',
    marginLeft: "40px",
    color: "457cbf",
    backgroundColor: theme.palette.secondary.main,
    textTransform: "none",
    fontFamily: "poppins",
    fontSize: "15px",
    borderRadius: 10,
    boxShadow: "0px 9px 15px #fa9a1c",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      marginTop: "10px",
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: "0px 9px 15px black",
    },
  },
  mainheading3: {
    fontSize: "13px",
    width: "50%",
  },
  iconCard: {
    borderRadius: "50%",
    width: "300px",
    height: "300px",
    boxShadow: " 0px 9px 15px #457cbf",
    zIndex: 1,
    position: "absolute",
    top: "50%",
    left: "32%",
    color: theme.palette.common.blue,
    transform: "translate(-50%, -50%)",
    // transform: "rotate(0deg)",


    [theme.breakpoints.only("md")]: {
      width: "300px",
      height: "300px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "250px",
      height: "250px",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "50%",
      width: "255px",
      height: "255px",
      marginTop: "30px",
      top: "38%",
      left: "40%",
    },
  },

  contactCoverImg: {
    width: "900px",
    height: "320px",
    [theme.breakpoints.only("md")]: {
      width: "450px",
      height: "350px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "320px",
      height: "250px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "900px",
      height: "350px",
    },
  },
  iconCardCoverImg: {
    width: "900px",
    height: "350px",
    [theme.breakpoints.only("md")]: {
      width: "400px",
      height: "350px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "320px",
      height: "250px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "830px",
      height: "280px",
    },
  },
  iconcardcover: {
    boxShadow: "0px 9px 15px rgba(0,0,0,0.4)",
    borderRadius: 100,
    padding: "10px",
    width: "29px",
    height: "29px",

    "&:hover": {
      transition: "transform 0.7s linear",
      top: "-40px" /* -child size/2 */,
      left: "110px",
      transform: "rotate(360deg)",
    },
    

    [theme.breakpoints.down("sm")]: {
      padding: "5px",
      width: "29px",
      height: "29px",
    },

  },
  TwitterIcon: {
    fontSize: "29px",
    color: "#fa9a1c",
    [theme.breakpoints.down("sm")]: {
      fontSize: "29px",
    },

    // paddingRight:'10px'
  },
  twitterdiv: {
    marginTop: "65px",

    // marginLeft:"10px",
    [theme.breakpoints.down("md")]: {
      // marginTop: "25px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "50px",
      },
    },
  },
  instagramIcon: {
    fontSize: "29px",
    color: "#fa9a1c",
  },
  instagramdiv: {
    marginTop: "65px",
    // marginRight:'10px',
    [theme.breakpoints.down("md")]: {
      // marginTop: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
  emailIcon: {
    paddingTop: "",
    color: "#fa9a1c",
    fontSize: "29px",
    [theme.breakpoints.down("md")]: {
      // fontSize: "12px",
    },
  },
  TextField: {
    // "& .MuiOutlinedInput-notchedOutline": {
    //   borderColor: theme.palette.secondary.main,
    // },
    // "&:hover  .MuiOutlinedInput-notchedOutline": {
    //   borderColor: theme.palette.secondary.main,
    // },
  },
  cntbg: {
    backgroundImage: `url(${cbg})`,
    // marginLeft:"20px",
    height: "47vh",
    // backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    [theme.breakpoints.only("md")]: {
      height: "33vh",
      width: "100vh",
    },
    [theme.breakpoints.only("sm")]: {
      height: "23vh",
      width: "100vh",
    },
    [theme.breakpoints.only("xs")]: {
      backgroundPosition: " top right  ",
      backgroundImage: "none",
      width: "",
      height: "59vh",
    },
  },
  emaildiv: {
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      // marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
  },
  img: {
    width: "330px",
    [theme.breakpoints.down("md")]: {
      width: "260px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
    },
  },
}));

const Brands = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    Aos.init();
  }, []);

  const matchesXS = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Grid
      container
      direction={matchesXS ? "column" : "row"}
      justifyContent="space-between"
      style={{ marginTop: "180px" }}
      alignItems="center"
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1200"
      id="contact"
    >
      <Grid
        item
        style={{}}
        className={classes.TextFieldContainer}
        xs={matchesXS ? null : 4}
      >
        <Grid item container className={classes.contactMsgGrid}>
          <img
            src={matchesXS ? contacttdown : contactbg}
            style={{}}
            className={classes.contactCoverImg}
            alt="contact"
          />
          <div style={{ zIndex: 1 }}>
            <h3 className={classes.contactMsg}>Want to get in touch?</h3>
          </div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesXS ? "column" : "row"}
        xs={matchesXS ? 12 : 4}
        justifyContent="center"
        alignItems={matchesXS ? null : "center"}
        // className={classes.cntbg}
      >
       
        {/* <Grid container item className={classes.cntbg} justifyContent="center"> */}
        <Grid item container className={classes.cardMsFrid}>
       
        <img
            src={cbg}
            style={{}}
            className={classes.iconCardCoverImg}
            alt="contact"
          />
          <Card className={classes.iconCard} xs={matchesXS ? 12 : ""}>
            <Grid container direction="column" style={{}}>
              <Grid container justifyContent="center">
                <div style={{ marginTop: "13px" }}>
                  <a href="https://facebook.com/kennedy.daniel.946">
                  <Card className={classes.iconcardcover}>
                    <Facebook style={{ color: "#fa9a1c", fontSize: "29px" }} />
                  </Card>
                  </a>
                </div>
              </Grid>
              <Grid container justifyContent="space-evenly">
                <div className={classes.twitterdiv}>
                  <a href="https://twitter.com/Khennoxx?t=eOrLQ76Pq28JgRF3Cd4MZw&s=09">
                    <Card className={classes.iconcardcover}>
                      <Twitter className={classes.TwitterIcon} />
                    </Card>
                  </a>
                </div>
                <div className={classes.twitterdiv}>
                  <a href="https://www.linkedin.com/in/kennedy-daniel-995855199">
                    <Card className={classes.iconcardcover}>
                      <LinkedIn className={classes.TwitterIcon} />
                    </Card>
                  </a>
                </div>
                <div className={classes.instagramdiv}>
                  <a href="https://github.com/kennedy-dan">
                    <Card className={classes.iconcardcover}>
                      <GitHub className={classes.instagramIcon} />
                    </Card>
                  </a>
                </div>
              </Grid>
              <Grid container justifyContent="center">
                <div className={classes.emaildiv}>
                  <a
                    href="mailto:kennooox@gmail.com"
                    style={{ textDecoration: "none", alignSelf: "center" }}
                  >
                    <Card className={classes.iconcardcover}>
                      <Email className={classes.emailIcon} />
                    </Card>
                  </a>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Brands;
