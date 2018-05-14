import { call, fork, put, take } from 'redux-saga/effects';

import * as actions from './actions';
import * as api from './api';
import * as constants from './constants';

/**
 *  requestProduct
 *
 *  Generator function to handle the PRODUCT_REQUEST action
 *
 *  Calls the appropriate action, given the api call response
 *
 *  @param productId {string}
 */
function* requestProduct(productId) {
  try {
    const response = yield call(api.requestProduct, productId);

    if (response.error) {
      yield put(actions.productFailure(response.error.message));
    } else {
      const { data } = response.data;

      yield put(actions.productSuccess(data));
    }
  } catch (error) {
    yield put(actions.productFailure(error.message));
  }
}

/**
 *  Generator function to listen for redux actions
 *
 *  Handles any action api requests as non-blocking calls and
 *    returns the appropriate action responses
 */
function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      constants.PRODUCT_REQUEST,
    ]);

    switch (type) {
      case constants.PRODUCT_REQUEST:
        yield fork(requestProduct, payload.productId);
        break;
      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
