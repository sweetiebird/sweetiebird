import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as selectors from '../../selectors';
import { requestProduct } from '../../actions';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  product: selectors.getProduct,
  isFetching: selectors.getIsFetching,
});

const mapDispatchToProps = {
  requestProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
