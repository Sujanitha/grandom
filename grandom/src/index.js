import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Firebase from 'firebase';
//firebase configuration
var config = {
    apiKey: "AIzaSyDrtMstu-qtUgZ80cuuvBDwkf902q0jBys",
    authDomain: "grandom-team2.firebaseapp.com",
    databaseURL: "https://grandom-team2.firebaseio.com",
    projectId: "grandom-team2",
    storageBucket: "grandom-team2.appspot.com",
    messagingSenderId: "721988283958"
};
Firebase.initializeApp(config);
//database connection
var database = Firebase.database();
// ReactDOM.render(, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
