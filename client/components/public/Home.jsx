import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Image } from 'semantic-ui-react';

Home = class Home extends React.Component {

  render() {
    return (
    <div className="ui container">
      <div className="ui center aligned header">
        <div className="content">
          <h1 className="ui h1">{Meteor.settings.public.siteName}</h1>
          <div className="sub header">
            A group devoted to the promotion and inclusion of LGBTQ+ in the Sciences
          </div>
        </div>
      </div>
    </div>
    );
  }

}
