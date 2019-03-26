import styled from 'styled-components'
import { Text, View } from 'react-native'

// Container Views

export const BaseContainerView = styled.View`
  flex: 1;
  background-color: ${props => props.backgroundColor || '#fff'};
`

export const CardView = styled.View`
  elevation: ${props => props.elevation || 1};
  margin-horizontal: ${props => props.marginHorizontal || 30};
  margin-top: ${props => props.marginTop || 10};
`

export const CardSectionView = styled.View`
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  padding-vertical: ${props => props.paddingVertical || 5};
  padding-horizontal: ${props => props.paddingHorizontal || 0};
  background-color: ${props => props.backgroundColor || '#fff'};
  border-bottom-width: ${props => props.borderBottonWidth || 1};
  border-color: ${props => props.borderColor || '#ddd'};
  position: ${props => props.position || 'relative'};
`

// Text Styles

const PaddingText = styled.Text`
  padding-left: ${props => props.paddingLeft || 0};
  padding-right: ${props => props.paddingRight || 0};
`

export const TitleText = styled(PaddingText)`
  font-size: ${props => props.fontSize || 18};
`

export const DescriptionText = styled(PaddingText)`
  font-size: ${props => props.fontSize || 14};
`
