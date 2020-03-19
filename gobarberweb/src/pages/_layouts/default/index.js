import React from 'react'
import { Wrapper } from './styles'
import PropTypes from 'prop-types'

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
}
