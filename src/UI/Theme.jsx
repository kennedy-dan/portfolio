import { createTheme } from "@material-ui/core/styles";
import {
 
} from "@material-ui/core";

const whiteTheme = "#FFFFFF";
const darkBlue = "#2a0e49";
const orange = "#fa9a1c";
// const lightGreen = '#f9fbf9'
const fontFamily = "Poppins";
const blueTheme = "#0B72B9";

export default createTheme({
  palette: {
    common: {
      blue: `${blueTheme}`,
      white: `${whiteTheme}`,
    },
    primary: {
      main: `${darkBlue}`,
    },
    secondary: {
      main: `${orange}`,
    },
    tertiary: {
      main: "rgba(0,0,0,0.4)",
    },

    preSec: {
      main: `${orange}`,
    },
  },
  font: {
    primary: {
      main: `${fontFamily}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    btn: {
      paddingTop:5,
      paddingBottom:5,
      fontSize: "13px",
      // position: "relative",
      boxShadow: "2px 3px 8px #fa9a1c",
      textTransform: "none",
      borderRadius: 90,
    //   marginTop: "30px",
      background: "#fa9a1c",
      // width:'28%'
    },
  },
  overrides:{
    MuiInputLabel:{
      root:{
        color:orange,
        fontSize:'1rem'
      }
    },
    MuiInput:{
      underline:{
        "&:before":{
          borderBottom:`2px solid ${orange}`
        },
        "&:hover:not($disabled):not($focused):not{$error):before": {
          borderBottom:`2px solid ${orange}`
        }
      }
    }
  }
});
