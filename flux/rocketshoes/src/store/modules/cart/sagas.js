// * this is a generator, in our case generator replaces async/await
// this will be called before the reducer, and this will call the reducer
import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSucess } from './actions';

// when the user clicks the button the first thing that place is this function being called
// ADD_REQUEST searches the database for the product, and once the product is found
// it calls calls addToCartSucess which in return calls our reducer

function* addToCart({ id }) {
  // call to do api calls, you cannot do api.get()
  const response = yield call(api.get, `/products/${id}`);
  // use put to fire the action
  yield put(addToCartSucess(response.data));
}

// @ all, you can register listeners here,
// @ take latest takes the last click, in case user clicks multiple times before api call.
// saves resources, only last call will be made, opposite is @ takeEvery

// this will listen for add request, which is the function called when user clicks

export default all([takeLatest(`@cart/ADD_REQUEST`, addToCart)]);
