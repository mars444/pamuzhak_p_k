import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'primeflex/primeflex.min.css'
import "primereact/resources/themes/nova/theme.css";                //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import '../src/static/fonts/montserrat/montserrat.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

