import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <MuiThemeProvider>
      <Grid container alignItems='center' style={{height: '100%'}}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{margin: 50}}>
            <Grid container alignItems='center' justify='center'>
              <Grid
                item
                xs={12}
                sm={6}
                md={5}
                style={{
                  'text-align': 'center',
                  padding: '30px',
                }}>
                <img src='http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png' />
              </Grid>
              <Grid item xs={12} sm={6} md={7} alignContent='center'>
                <BrowserRouter>
                  <Switch>
                    <Route exact path={['/', '/signin']} component={SignIn} />
                    <Route path={'/signup'} component={SignUp} />
                    <Route path={'/profile'} component={Profile} />
                  </Switch>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
