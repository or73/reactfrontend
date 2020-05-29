import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const $_initialState= {},
      $_middleware  = [ thunk ],
      $$_store       = createStore( rootReducer,
                                    $_initialState,
                                    composeWithDevTools( applyMiddleware( ...$_middleware ) ) );

export default $$_store;
