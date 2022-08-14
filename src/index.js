import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'primeflex/primeflex.min.css'
import "primereact/resources/themes/nova/theme.css";                //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

