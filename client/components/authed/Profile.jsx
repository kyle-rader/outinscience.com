import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

Profile = class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <AuthedComponentContainer>
      <Container>
        <h1>Profile</h1>
      </Container>
    </AuthedComponentContainer>
    );
  }
}
