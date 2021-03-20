import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from './components/Navigation/Navigation'

//import BasicInfoIndex from './components/KYC/BasicInfoKyc/BasicInfoIndex'
import { useEffect, useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
}));

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <Navigation />
      

      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Switch>
            {/* Home page (DashBoard Content) */}
            {/* <Route exact path="/" component={Home} /> */}


            {/* <Route
              path="/orderSuccess/:id"
              render={(props) => {
                return <Success {...props} />;
              }}
            /> */}
            <Redirect to="/" />
          </Switch>
      </main>
    </div>
  );
}



export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);