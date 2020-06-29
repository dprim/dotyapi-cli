import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Bye } from "./pages/Bye";
import { Header } from "./pages/Header";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

export const Routes: React.FC = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={2}>
          <Header />
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/bye" component={Bye}></Route>
          </Switch>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};
