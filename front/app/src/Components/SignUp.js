import React from 'react';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
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
    margin: '20px 0px',
    textDecoration: 'none',
  },
  signin: {
    margin: '20px 0px',
    textDecoration: 'none',
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

function TransitionDown(props) {
  return <Slide {...props} direction='down' />;
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      lastname: '',
      password: '',
      passwordbis: '',
      flash: '',
      open: 'false',
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
      passwordbis: '',
      flash: '',
      open: true,
    });
  }

  handleClick = Transition => () => {
    this.setState({open: true, Transition});
  };

  handleClose = () => {
    this.setState({open: false});
  };

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
                  label='First Name'
                  type='text'
                  name='name'
                  onChange={this.handleChange}
                />
                <TextField
                  className={classes.textField}
                  label='Last Name'
                  type='text'
                  name='lastname'
                  onChange={this.handleChange}
                />
                <TextField
                  className={classes.textField}
                  label='Email'
                  type='email'
                  name='email'
                  onChange={this.handleChange}
                />
                <TextField
                  className={classes.textField}
                  label='Password'
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                />
                <TextField
                  className={classes.textField}
                  label='Password'
                  type='password'
                  name='passwordbis'
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid xs={10} container justify='space-between' align='center'>
                <Link className={classes.signin} to='/signin'>
                  <Button size='large' color='primary'>
                    Sing In
                  </Button>
                </Link>
                <Link className={classes.submit} to='/'>
                  <Button
                    type='submit'
                    value='Submit'
                    variant='contained'
                    size='large'
                    color='primary'
                    onClick={this.handleClick(TransitionDown)}>
                    Submit
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
          <Snackbar
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={this.state.Transition}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id='message-id'>{this.state.flash}</span>}
          />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

// SingUp.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SignUp);
