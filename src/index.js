import {React} from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './components/App';

import './index.css';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>
);