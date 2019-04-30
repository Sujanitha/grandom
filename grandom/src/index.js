import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
//firebase configuration
var config = {
    apiKey: "AIzaSyCN7ZgwYt_mFOaTOWTjKVOosm0JKtWTWeY",
    authDomain: "grandom-2.firebaseapp.com",
    databaseURL: "https://grandom-2.firebaseio.com",
    projectId: "grandom-2",
    storageBucket: "grandom-2.appspot.com",
    messagingSenderId: "255878573"
};
firebase.initializeApp(config);

//database connection
var database = firebase.database();
// ReactDOM.render(, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
