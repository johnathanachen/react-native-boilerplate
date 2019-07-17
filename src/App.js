import React from 'react';
import Navigation from './navigation'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
