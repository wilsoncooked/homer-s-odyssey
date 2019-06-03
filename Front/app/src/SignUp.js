import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@test.com',
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField(e) {
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input type='email' name='email' onChange={this.updateEmailField} />
      </div>
    );
  }
}

export default SignUp;
