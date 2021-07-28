import React from "react";
import {
  Grid,
  Typography,
  Card,
  Button,
  TextField,
  FormControl,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";
import mainp from "../Assets/cnt.svg";
import { Facebook, Twitter, Instagram, Email } from "@material-ui/icons";

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
  mainheading1: {
    fontSize: "30px",
    fontWeight: "bolder",
    color: theme.palette.secondary.main,
    marginBottom: "8px",
  },
  btn: {
    ...theme.typography.btn,
    width: 105,
    height: 25,
    marginTop: "10px",
  },
  mainheading3: {
    fontSize: "13px",
    width: "50%",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "250px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  iconCard: {
    borderRadius: "50%",
    width: "240px",
    height: "240px",
    boxShadow: " 0px 9px 15px #fa9a1c",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "150px",
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: "50%",
      width: "180px",
      height: "180px",
      marginTop: "30px",
    },
  },
  iconcardcover: {
    boxShadow: "0px 9px 15px rgba(0,0,0,0.4)",
    borderRadius: 100,
    padding: "10px",
    height: "15px",
    width: "15px",
    [theme.breakpoints.down("md")]: {
      padding: "5px",
      height: "14px",
      width: "14px",
    },
    [theme.breakpoints.down("sm")]: {},
  },
  TwitterIcon: {
    fontSize: "16px",
    color: "#fa9a1c",
  },
  twitterdiv: {
    marginTop: "70px",
    [theme.breakpoints.down("md")]: {
      marginTop: "25px",
      [theme.breakpoints.down("xs")]: {
        marginTop: "40px",
      },
    },
  },
  instagramIcon: {
    fontSize: "16px",
    color: "#fa9a1c",
  },
  instagramdiv: {
    marginTop: "70px",
    [theme.breakpoints.down("md")]: {
      marginTop: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40px",
    },
  },
  emailIcon: {
    paddingTop: "",
    color: "#fa9a1c",
    fontSize: "15px",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
  },
  TextField: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover  .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.secondary.main,
    },
  },
  emaildiv: {
    marginTop: "70px",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
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
  
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid
      container
      direction={matchesXS ? "column" : "row"}
      justify="space-between"
      style={{ marginTop: "180px" }}
      alignItems="center"
    >
      <Grid
        item
        container
        direction="column"
        xs={matchesXS ? "null" : 4}
        alignItems="center"
      >
        <Typography
          className={classes.mainheading1}
          fontWeight="fontWeightBold"
          m={5}
        >
          Contact Us
        </Typography>
        <FormControl className={classes.formControl}>
          <TextField
            id="outlined-multiline-static"
            label="contact"
            multiline
            rows={12}
            defaultValue="Default Value"
            variant="outlined"
            className={classes.TextField}
          />
        </FormControl>
        <Button color="secondary" variant="contained" className={classes.btn}>
          send
        </Button>
      </Grid>
      <Grid
        item
        container
        xs={matchesXS ? "null" : 4}
        justify="center"
        alignItems="center"
      >
        <Card item container className={classes.iconCard}>
          <Grid
            container
            direction="column"
            justify=""
            alignItems=""
            style={{}}
          >
            <Grid container justify="center">
              <div style={{ marginTop: "13px" }}>
                <card className={classes.iconcardcover}>
                  <Facebook style={{ color: "#fa9a1c", fontSize: "16px" }} />
                </card>
              </div>
            </Grid>
            <Grid container justify="space-between">
              <div className={classes.twitterdiv}>
                <Card className={classes.iconcardcover}>
                  <Twitter className={classes.TwitterIcon} />
                </Card>
              </div>
              <div className={classes.instagramdiv}>
                <Card className={classes.iconcardcover}>
                  <Instagram className={classes.instagramIcon} />
                </Card>
              </div>
            </Grid>
            <Grid container justify="center">
              <div className={classes.emaildiv}>
                <card className={classes.iconcardcover}>
                  <Email className={classes.emailIcon} />
                </card>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid
        item
        container
        direction={matchesXS ? "column" : "row"}
        xs={matchesXS ? "null" : 4}
        justify="flex-end"
        alignItems="center"
      >
        <img src={mainp} alt='contact' className={classes.img} />
      </Grid>
    </Grid>
  );
};

export default Brands;
