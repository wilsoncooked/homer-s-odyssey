import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    console.log(this.state);
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
