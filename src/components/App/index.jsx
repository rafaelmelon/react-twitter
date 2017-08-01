import React, { Component } from 'react';
import { HashRouter, Match } from 'react-router';
import 'normalize-css';

import styles from './app.css'
import Header from '../Header';
import Main from '../Main';
import Profile from '../Profile';

class App extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        photoURL: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgLAAAAJGE0ZTI5YjA4LWRjMzEtNDAxOS1iMDE1LTE2MDc3MDI1YjM5ZA.jpg',
        email: 'info@rafaelmelon.es',
        displayName: 'Rafael Melón',
        location: 'Madrid, España'
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
            return (
              <Profile
                picture={ this.state.user.photoURL }
                username={ this.state.user.email.split('@')[0] }
                displayName={ this.state.user.displayName }
                location={ this.state.user.location }
                emailAddress={ this.state.user.email }
              />
            )
          }} />

          <Match pattern='/user/:username' render={ ({ params }) => {
            return (
              <Profile
                displayName={ params.username }
                username={ params.username }
              />
            )
          }} />
        </div>
      </HashRouter>
    )
  }
}

export default App;
