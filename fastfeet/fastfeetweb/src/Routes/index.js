import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import LogIn from '../pages/LogIn/index'
import Orders from '../pages/Orders/index'
import Couriers from '~/pages/Couriers/index'

// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/couriers" component={Couriers} isPrivate />
    </Switch>
  )
}
