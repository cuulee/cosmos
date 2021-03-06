import React from 'react'
import styled from 'styled-components'

import { metadata as components } from '../metadata.json'
import { Heading3, Subheader } from '../../components'
import Playground from './playground.js'

const Container = styled.div`
  height: 100vh;
`

export default props => {
  let component = components.filter(
    component => component.displayName === props.match.params.componentName
  )[0]
  return (
    <Container>
      <Heading3>{component.displayName}</Heading3>
      <Subheader>{component.description || 'Description missing!'}</Subheader>
      <Playground component={component} />
    </Container>
  )
}
