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
import {ThemeProvider} from "./components/ThemeProvider";


// const html = document.querySelector('html')
//
// // Real cursor element
// const cursor = document.createElement('div')
// cursor.classList.add('cursor')
// html.appendChild(cursor)
//
// // // Following extra cursor element
// // const follower = document.createElement('div')
// // follower.classList.add('cursor', 'cursor__follower')
// // html.appendChild(follower)
//
//
// html.addEventListener('mousemove', (e) => {
//     // setPosition(follower, e)
//     setPosition(cursor, e)
// })
//
// function setPosition(element, e) {
//     element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

