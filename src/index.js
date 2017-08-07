import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const confStore = () => {
    return createStore(combineReducers({
        form: formReducer
    }))
};

const App = () => (
    <Provider store={confStore()}>
        <Form/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
