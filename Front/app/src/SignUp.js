import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: 'Bond',
      email: 'mon@email.com',
      password: 'monPassw0rd',
      passwordRep: 'monPassw0rd',
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
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{JSON.stringify(this.state, 1, 1)}</h1>
        <input type='text' name='firstName' />
        <input type='text' name='lastName' />
        <input type='email' name='email' onChange={this.handleChange} />
        <input type='password' name='password' />
        <input type='password' name='passwordRep' />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default SignUp;
