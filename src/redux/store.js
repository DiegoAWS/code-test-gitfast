import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
// Chrome Dev Tools
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

//Workaround to avoid SAGA warning while runing the tests
//As indicated here https://github.com/babel/babel/issues/10086
if (process.env.NODE_ENV !== 'test') {
    sagaMiddleware.run(rootSaga);
}

export default store