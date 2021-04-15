import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import 'antd/dist/antd.css';

const NodeBird = ({ Component, store }) => {
  return (
      <Provider store={store}>
          <Head>
              <title>NodeBirds</title>
          </Head>
          <AppLayout>
              <Component />
          </AppLayout>
      </Provider>
  )
};

NodeBird.prototype={
    Component: PropTypes.elementType,
    store: PropTypes.object,
}

export default withRedux((initialState, options) => {
    const middlewares = [];
    const enhancer = compose(
        applyMiddleware(...middlewares),
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(NodeBird);