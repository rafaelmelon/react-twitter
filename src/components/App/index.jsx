import React, { Component } from 'react';
import { HashRouter, Match } from 'react-router';
import 'normalize-css';

import styles from './app.css'
import Header from '../Header';
import Main from '../Main';

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        photoURL: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgLAAAAJGE0ZTI5YjA4LWRjMzEtNDAxOS1iMDE1LTE2MDc3MDI1YjM5ZA.jpg',
        email: 'info@rafaelmelon.es',
        displayName: 'Rafael Melón'
      }
    }
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Match exactly pattern='/' render={ () => {
            if(this.state.user){
              return (
                <Main user={ this.state.user } />
              )
            }else{
              // Render <Login />
            }
          } } />

          <Match pattern='/profile' render={ () => {
            // Render <Profile />
          }} />

          <Match pattern='/user/:username' render={ ({ params }) => {
            // Render <Profile /> pasando params.username
          }} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
