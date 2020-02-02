// Default redux createStore function.
import { createStore, applyMiddleware } from "redux";

// Debug.
import { composeWithDevTools } from "redux-devtools-extension";

// Sagas!
import createSagaMiddleware from "redux-saga";

// Import all our custom sagas.
import sagas from "~/store/modules/rootSaga";

// Import all our custom reducers.
import reducers from "~/store/modules/rootReducer";

// Create a saga middleware.
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  // Build store.
  // TODO: Disable dev tools on production.
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(sagas);
  };

  store.runSagaTask();
  return store;
}

export default configureStore;
