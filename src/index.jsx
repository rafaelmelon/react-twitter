import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCX7t-2TaUkpu5mJm7fQiTOq_oEQUFIK00',
  authDomain: 'curso-react-9ef15.firebaseapp.com',
  databaseURL: 'https://curso-react-9ef15.firebaseio.com',
  projectId: 'curso-react-9ef15',
  storageBucket: 'curso-react-9ef15.appspot.com',
  messagingSenderId: '435209830919'
})

import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
