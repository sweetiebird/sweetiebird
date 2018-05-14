import product from '../product/sagas';

export default function* rootSaga() {
  yield [
    product(),
  ];
}
