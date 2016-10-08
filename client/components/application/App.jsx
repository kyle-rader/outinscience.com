// Main App - React Root Component

import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import { Button } from 'semantic-ui-react';

App = class App extends Component {

  componentDidMount() {
    document.title = Meteor.settings.public.siteName;
  }

  componentDidMount() {
    let favicon = document.createElement('link');
    let min = 1;
    let max = 12;
    favicon.rel = 'shortcut icon';
    favicon.href = `/img/favicons/favicon${Math.floor(Math.random() * (max - min + 1)) + min}.ico`;
    document.head.appendChild(favicon);
  }

  render() {
    return (
    <div id="app-root">
      <TopBarContainer />
      {this.props.yield}
      <Footer />

      <ScrollToTop showUnder={1000}>
        <Button labeled="right" icon="up arrow" content="Scroll Up" />
      </ScrollToTop>

    </div>
    );
  }

}
