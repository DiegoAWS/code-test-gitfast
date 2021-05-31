import { createStore, compose,applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddelware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware= createSagaMiddelware()

const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store