import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

import App from './components/App'

firebase.initializeApp({
  apiKey: 'AIzaSyCX7t-2TaUkpu5mJm7fQiTOq_oEQUFIK00',
  authDomain: 'curso-react-9ef15.firebaseapp.com',
  databaseURL: 'https://curso-react-9ef15.firebaseio.com',
  projectId: 'curso-react-9ef15',
  storageBucket: 'curso-react-9ef15.appspot.com',
  messagingSenderId: '435209830919'
})

render(<App />, document.getElementById('root'))
