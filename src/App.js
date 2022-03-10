import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import React from "react";
import Header from "./UI/Header";
import theme from "./UI/Theme";
import Home from "./Component/Home";
import img from './Assets/mainbg1.png'
import Footer from "./UI/Footer";


const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
          backgroundImage: `url(${img})`,
    }
  }
}))


function App() {
  const classes= useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header className={classes}/>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
