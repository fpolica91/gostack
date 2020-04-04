import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'
import LogIn from '~/pages/LogIn/index'
import Orders from '~/pages/Orders/index'
import Couriers from '~/pages/Couriers/index'
import Create from '~/pages/Couriers/Create/index'
import CreateOrder from '~/pages/Orders/Create/index'
import Recipients from '~/pages/Recipients/index'
import CreateRecipient from '~/pages/Recipients/Create/index'
import Problems from '~/pages/Problems/index'

// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/couriers" component={Couriers} isPrivate />
      <Route path="/courier/new" component={Create} isPrivate />
      <Route path="/order/new" component={CreateOrder} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/recipient/new" component={CreateRecipient} isPrivate />
      <Route path="/probs" component={Problems} isPrivate />
    </Switch>
  )
}
