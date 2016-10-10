import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Icon } from 'semantic-ui-react';

TopBar = class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isMobile: $(window).width() < 375 };
  }

  _updateScreenSize() {
    this.setState({ isMobile: $(window).width() < 375 });
  }

  _socialButton(link, socialApp, labeled = false) {
    return (
      <a className="item" href={link} target="_blank" key={`${socialApp}-btn`}>
        <Icon name={`large ${socialApp} ${socialApp}-color`}/>
        { labeled ? `${socialApp.slice(0,1).toUpperCase()}${socialApp.slice(1)}` : '' }
      </a>
    );
  }

  _renderSocialButtons() {
    const appButtons = _(Meteor.settings.public.social);

    if (this.state.isMobile) {
      return (
      <div className="ui dropdown item">
        <Icon name="large dark-blue pointing down"/>
        <div className="menu topbar-dropdown-menu">
          { appButtons.map((link, app) => this._socialButton(link, app, true)) }
        </div>
      </div>
      );
    } else {
      return appButtons.map((link, app) => this._socialButton(link, app, false));
    }
  }

  _logout(event) {
    event.preventDefault();
    return Meteor.logout(() => FlowRouter.go('/'));
  }

  _logInLogOutBtn() {
    if (this.props.user) {
      return (
        <a className="item" onClick={(e) => this._logout(e)}>
          <Icon name="large green power"/>
        </a>
      );
    } else {
      return (
        <a className="item" href="/login">
          <Icon name="large gray power"/>
        </a>
      );
    }
  }

  _initDropDownMenus() {
    $(this.refs.topbar).find('.ui.dropdown').dropdown();
  }

  componentDidMount() {
    this._initDropDownMenus();
    window.addEventListener('resize', () => this._updateScreenSize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this._updateScreenSize());
  }

  componentDidUpdate(prevProps, prevState) {
    this._initDropDownMenus();
  }

  render() {
    return (
      <div className="ui fixed icon menu top-bar" ref="topbar">

        <div className="ui dropdown item" ref="menuDropdown">
          <Icon name="large green content"/>

          <div className="menu topbar-dropdown-menu">
            <a className="item" href="/">
              <img className="ui iamage" src="/img/brand/logo.jpg"/>
              Home
            </a>
            <a className="item" href="/archive">
              <Icon name="red list"/>
              Out List
            </a>
            <a className="item" href="/contact">
              <Icon name="orange book"/>
              Glossary
            </a>
            <a className="item" href="/resume">
              <Icon name="yellow life ring"/>
              Resources
            </a>
            <a className="item" href="/info">
              <Icon name="green comments outline icon"/>
              Forum
            </a>
            <a className="item" href="/info">
              <Icon name="blue lab icon"/>
              Science
            </a>
            <a className="item" href="/info">
              <Icon name="purple users"/>
              The Team
            </a>
          </div>
        </div>

        { this._renderSocialButtons() }

        <div className="right menu">
          {this._logInLogOutBtn()}
        </div>
      </div>
    );
  }
}
