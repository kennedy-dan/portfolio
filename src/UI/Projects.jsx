import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Ify from "../Assets/ifytry.jpg";
import football from '../Assets/football-project.png'
import myArt from '../Assets/myart.png'

const useStyles = makeStyles((theme) => ({
  myWorks: {
    fontSize: "30px",
    fontWeight: "bolder",
    paddingTop:'40px',
    // textAlign: "center",
    color: theme.palette.primary.main,
    fontFamily: theme.font.primary.main,
  },
  workCard: {
    width: "480px",
    height: "290px",
    
    boxShadow: "0px 0px 5px 5px rgb(26, 25, 25, 0.219)",
    border: "none",
    [theme.breakpoints.only('xs')]:{
      width:'400px',
      height:'220px'
    },
    [theme.breakpoints.only('md')]:{
      width:'380px',
      height:'220px'
    },
    [theme.breakpoints.down('sm')]:{
    marginBottom:"30px"
    },
    "&:hover":{
    boxShadow: "0px 0px 9px 9px rgb(26, 25, 25, 0.219)",

    }

  },
  workCardContainer:{
    marginTop:'40px',
  
  },
  img: {
    width: "480px",
    height: "290px",
    objectFit: 'cover',
    [theme.breakpoints.only('xs')]:{
      width:'400px',
      height:'220px'
    },
    [theme.breakpoints.only('md')]:{
      width:'380px',
      height:'220px'
    },
    // height: "120px",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column"
    id="works"
    
    >
      <Grid item container justifyContent="center">
        <p className={classes.myWorks}>My Works</p>
      </Grid>
      <Grid item container justifyContent={`${matchesSM ? 'center' : "space-between"}`} className={classes.workCardContainer}>
        <div className={classes.workCard}>
          <a href='https://dr-ifeyinwa.vercel.app/'>
            <div>
              <img src={Ify} className={classes.img} alt='ify'/>
            </div>
          </a>
        </div>

        <div className={classes.workCard}>
          <a href='https://myartstocks.com/'>
            <div>
              <img src={myArt} className={classes.img} alt='ify'/>
            </div>
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default Projects;
