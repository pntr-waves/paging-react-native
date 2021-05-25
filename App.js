import React from 'react';
import {Provider} from 'react-redux';
//import main component
import Main from './components/main';
//import store
import {configureStore} from './redux/store/storage';
const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
