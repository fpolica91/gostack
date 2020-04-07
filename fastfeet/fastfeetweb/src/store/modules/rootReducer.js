import { combineReducers } from 'redux'
import auth from './auth/reducer'
import admin from './admin/reducer'
import order from './order/reducers'
export default combineReducers({
  auth,
  admin,
  order,
})
