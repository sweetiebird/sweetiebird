import * as constants from './constants';

export function requestProduct(productId) {
  return {
    type: constants.PRODUCT_REQUEST,
    payload: {
      productId,
    },
  };
}

export function productSuccess(product) {
  return {
    type: constants.PRODUCT_SUCCESS,
    payload: {
      product,
    },
  };
}

export function productFailure(message) {
  return {
    type: constants.PRODUCT_FAILURE,
    payload: {
      message,
    },
  };
}
