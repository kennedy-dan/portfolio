import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Ify from "../Assets/ifytry.jpg";
import football from '../Assets/football-project.png'

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
    "&:hover":{
    boxShadow: "0px 0px 9px 9px rgb(26, 25, 25, 0.219)",

    }

  },
  workCardContainer:{
    marginTop:'40px',
    padding: '20px'
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
      <Grid item container justifyContent="space-between" className={classes.workCardContainer} spacing={2}>
        <div className={classes.workCard}>
          <a href='https://dr-ifeyinwa.vercel.app/'>
            <div>
              <img src={Ify} className={classes.img} alt='ify'/>
            </div>
          </a>
        </div>

        <div className={classes.workCard}>
          <a href='https://football-flame.vercel.app/'>
            <div>
              <img src={football} className={classes.img} alt='ify'/>
            </div>
          </a>
        </div>
      </Grid>
    </Grid>
  );
};

export default Projects;
