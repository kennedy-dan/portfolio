import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Ify from "../Assets/ifytry.jpg";

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
    boxShadow: "0px 0px 5px 2px #fa9a1c",
    border: "none",
    [theme.breakpoints.only('xs')]:{
      width:'400px',
      height:'220px'
    }

  },
  workCardContainer:{
    paddingTop:'40px'
  },
  img: {
    width: "480px",
    height: "290px",
    [theme.breakpoints.only('xs')]:{
      width:'400px',
      height:'220px'
    }
    // height: "120px",
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Grid container direction="column"
    id="works"
    
    >
      <Grid item container justifyContent="center">
        <p className={classes.myWorks}>My Works</p>
      </Grid>
      <Grid item container justifyContent="center" className={classes.workCardContainer}>
        <div className={classes.workCard}>
          <a href='https://dr-ifeyinwa.vercel.app/'>
            <div>
              <img src={Ify} className={classes.img} alt='ify'/>
            </div>
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default Projects;
