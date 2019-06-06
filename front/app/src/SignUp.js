import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    margin: '10px',
    width: '300px',
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRep: '',
      flash: '',
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
      name: '',
      lastname: '',
      email: '',
      password: '',
      passwordRep: '',
      flash: '',
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <TextField
          className={classes.textField}
          label='First Name'
          type='text'
          name='firstName'
          onChange={this.handleChange}
        />
        <TextField
          className={classes.textField}
          label='Last Name'
          type='text'
          name='lastName'
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
          name='passwordRep'
          onChange={this.handleChange}
        />
        <TextField
          className={classes.textField}
          label='Password'
          type='password'
          name='password'
          onChange={this.handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default withStyles(styles)(SignUp);
