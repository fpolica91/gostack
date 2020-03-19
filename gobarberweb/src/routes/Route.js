import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function RouteWrapper({
  // THE COMPONENT WE ARE RENDERING
  component: Component,
  // IF IT IS A PRIVATE ROUTE OR NOT
  isPrivate = false,
  // ANY OTHER PROPERTY
  ...rest
}) {
  const signed = false
  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }
  return <Route {...rest} component={Component} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
  isPrivate: false
}
