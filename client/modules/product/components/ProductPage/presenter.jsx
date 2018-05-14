import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

class ProductPage extends React.Component {
  componentDidMount() {
    const { requestProduct, match } = this.props;
    const { productId } = match.params;
    requestProduct(productId);
  }

  render() {
    const { product } = this.props;

    return (
      <div className={styles.productPage}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    );
  }
}

ProductPage.propTypes = propTypes;

ProductPage.defaultProps = defaultProps;

export default ProductPage;
