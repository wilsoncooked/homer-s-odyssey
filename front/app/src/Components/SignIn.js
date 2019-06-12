import React from 'react';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '80%',
  },
  textField: {
    margin: '20px 0px',
    width: 'flex-grow',
  },
  submit: {
    alignSelf: 'flex-end',
    margin: '20px 0px',
  },
  margin: {
    margin: theme.spacing.unit,
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
            <Button
              type='submit'
              value='Submit'
              variant='contained'
              size='large'
              color='primary'
              className={classes.submit}>
              Sign In
            </Button>
          </form>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

// SingUp.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Signin);
