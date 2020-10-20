import React from 'react'
import Input from './components/number/Input';
import Result from './components/number/Result';
import './styles.css';
import reducer from './components/redux/rootReducer/rootReducer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer,applyMiddleware(thunk))

function App() {
    return (
        <Provider store={store}>
        <div id="container">
            <h1>Number API</h1>
            <Input/>
            <Result />
        </div>
        </Provider>
    )
}

export default App
