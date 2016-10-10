import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

// Define our login comp

Login = class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  _login(event) {
    event.preventDefault();
    Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile'] }, (err) => {
      if(err) {
        throw err;
      }
    });
  }

  render() {
    return (
    <div className="login ui middle aligned center aligned grid">
      <div className="column">
        <h2>Login</h2>
        <Button className="fluid large blue facebook" onClick={(e) => this._login(e)}>
          <Icon name="facebook"/>
          Login with Facebook
        </Button>
        <h4>
          We will never post to Facebook or make visible your usage of Out in Science
          without your explicit permission.  (This will not out you)
          <br/>
          <br/>
          Logging in with Facebook gives us access to your email and public profile only.
        </h4>
      </div>
    </div>);
  }
}
