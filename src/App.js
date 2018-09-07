import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';

const store = configureStore(); // You can also pass in an initialState here



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ItemList />
      </Provider>
    );
  }
}

export default App;
