import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

import { BaseContainerView, CenterView } from './styles'
import LoginForm from './components/LoginForm'

const store = createStore(reducers)

class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBFhy4xlAnUfty0qo_8z80eUdEEinZIvEE',
      authDomain: 'manager-2f2ae.firebaseapp.com',
      databaseURL: 'https://manager-2f2ae.firebaseio.com',
      projectId: 'manager-2f2ae',
      storageBucket: 'manager-2f2ae.appspot.com',
      messagingSenderId: '575634517818',
    }
    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={store}>
        <BaseContainerView>
          <LoginForm />
        </BaseContainerView>
      </Provider>
    )
  }
}

export default App
