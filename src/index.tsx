import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import Hello from './containers/hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
});

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
