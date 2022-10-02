import './index.css';

import * as React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/app/App';

const vanillaRoot = document.getElementById('root');
if (vanillaRoot === null) {
    throw new Error('Root container missing in index.html');
}

const root = ReactDOM.createRoot(vanillaRoot);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
