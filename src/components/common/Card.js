import React from 'react'
import { CardView } from '../../styles'

const Card = props => {
  return <CardView marginTop={100}>{props.children}</CardView>
}

export default Card
