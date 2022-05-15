import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './estilos.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDv6_v1rFeORZBVafq8eC2oi7fsRsPCtHI",
  authDomain: "elleandchic.firebaseapp.com",
  projectId: "elleandchic",
  storageBucket: "elleandchic.appspot.com",
  messagingSenderId: "279403266613",
  appId: "1:279403266613:web:feb793164ad4366fe6a77c"
};

const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
