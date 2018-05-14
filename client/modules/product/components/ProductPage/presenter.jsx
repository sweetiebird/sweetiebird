import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

import { Offering, Carousel } from './components';

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
        <Carousel videos={product.videos} images={product.screenshots} />
        <p>{product.description}</p>
        <h3>Offerings:</h3>
        {product.offerings !== undefined &&product.offerings.map((offering, idx) => (
          <Offering
            offeringIndex={idx}
            title={offering.title}
            price={offering.price}
            key={`offering-${idx}`} />
        ))}
      </div>
    );
  }
}

ProductPage.propTypes = propTypes;

ProductPage.defaultProps = defaultProps;

export default ProductPage;
