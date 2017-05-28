import Header from './Header';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { APP_LOADED } from '../../constants/actionTypes';
import './App.css';

import Home from '../Home';
import Restaurant from '../Restaurant';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: APP_LOADED, payload, skipTracking: true })
});

class App extends Component {
  componentWillMount() {
    this.props.onLoad(null);
  }

  render() {
    const {
      appLoaded,
      appName
    } = this.props;

    if (appLoaded) {
      return (
        <BrowserRouter>
          <div>
            <Header
              appName={appName} />
          </div>
          <Route exact pattern="/" component={Home} />
          <Route exact pattern="restaurant/:id" component={Restaurant} />
        </BrowserRouter>
      );
    }

    return (
      <div>
        <Header
          appName={appName} />
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
