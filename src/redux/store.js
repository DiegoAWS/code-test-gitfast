import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = compose(
    applyMiddleware(sagaMiddleware),

    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f // So test can work properly
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store