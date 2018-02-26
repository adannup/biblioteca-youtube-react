import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './ReduxApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
