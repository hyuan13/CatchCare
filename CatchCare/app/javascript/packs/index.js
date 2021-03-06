// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { CookiesProvider } from 'react-cookie';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

import Routes from './routes';
import reducers from './reducers';
import history from './history';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CookiesProvider>
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Router history={history}><Routes /></Router>
      </Provider>
    </CookiesProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
