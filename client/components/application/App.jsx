// Define our main App component

import React from 'react';

App = React.createClass({
    
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            hasUser: !!Meteor.user(),
            isPublic(route) {
                let publicRoutes = ['home', 'login', 'register', 'requestpasswordreset', 'passwordreset'];

                return publicRoutes.indexOf(route) > -1;
            },
            canView() {
                return this.isPublic(FlowRouter.current().route.name) || !!Meteor.user();
            }
        };
    },

    getView() {
        return this.data.canView() ? this.props.yield : <Login />;
    },

    componentDidMount() {
        let favicon = document.createElement('link');
        let min = 1;
        let max = 12;
        favicon.rel = 'shortcut icon';
        favicon.href = `/img/favicons/favicon${Math.floor(Math.random() * (max - min + 1)) + min}.ico`;
        document.head.appendChild(favicon);
    },

    render() {
        return (
        <div className="app-root">
            <AppHeader hasUser={this.data.hasUser} />
            {this.getView()}
        </div>);
    }
});