import { createStore } from 'redux';
import { Map, List } from 'immutable';

import rootReducer from './modules';

const configureStore = (preloadedState) => {
  if (preloadedState && List.isList(preloadedState)) {
    return createStore(
      rootReducer,
      Map({users: preloadedState}),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

export default configureStore;
