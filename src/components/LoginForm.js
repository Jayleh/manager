import React, { Component } from 'react'
import Card from './common/Card'
import CardSection from './common/CardSection'
// import Input from './common/Input'
import Button from './common/Button'

import { Icon, Input } from 'react-native-elements'

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <Input
          placeholder="email@gmail.com"
          inputContainerStyle={{
            borderBottomColor: '#ddd',
          }}
          inputStyle={{ marginLeft: 0 }}
          leftIcon={
            <Icon
              name="md-mail"
              type="ionicon"
              containerStyle={{ marginLeft: 0 }}
              iconStyle={{ marginLeft: 0 }}
            />
          }
        />
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm
