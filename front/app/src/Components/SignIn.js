import React from 'react';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    margin: '20px 0px',
    width: '100%',
  },
  submit: {
    margin: '35px 0px',
    textDecoration: 'none',
  },
  signup: {
    textDecoration: 'none',
    margin: '35px 0px',
  },
  cssLabel: {
    '&$cssFocused': {
      backgroundColor: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
  typography: {useNextVariants: true},
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/auth/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(
        res => this.setState({flash: res.flash}),
        err => this.setState({flash: err.flash}),
      );
    this.setState({
      email: '',
      name: '',
      lastname: '',
      password: '',
      flash: '',
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        {/* <h1>{JSON.stringify(this.state, 1, 1)}</h1> */}
        <MuiThemeProvider theme={theme}>
          <form className={classes.root} onSubmit={this.handleSubmit}>
            <Grid container justify='center'>
              <Grid item xs={10}>
                <TextField
                  className={classes.textField}
                  label='Email'
                  type='email'
                  name='email'
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid xs={10}>
                <TextField
                  className={classes.textField}
                  label='Password'
                  type='password'
                  alignItems
                  name='password'
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid xs={10} container justify='space-between'>
                <Link className={classes.signup} to='/signup'>
                  <Button
                    className={classes.button}
                    size='large'
                    color='primary'>
                    Sing Up?
                  </Button>
                </Link>
                <Link className={classes.submit} to='/profile'>
                  <Button
                    type='submit'
                    value='Submit'
                    variant='contained'
                    size='large'
                    color='primary'>
                    Sign In
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

// SingUp.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SignIn);
