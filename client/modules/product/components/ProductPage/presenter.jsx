import React from 'react';
import qs from 'query-string';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

import { Offering, Carousel } from './components';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.saveUserPayment = this.saveUserPayment.bind(this);
  }

  saveUserPayment(guid, payment) {
    const { user } = this.state;
    const { saveUserPayment, product } = this.props;
    saveUserPayment(user, payment, product, guid);
  }

  componentDidMount() {
    const { requestProduct, match, location } = this.props;
    const { productId } = match.params;
    const { search } = location;
    const { u } = qs.parse(search);

    this.setState({
      user: u,
    }, () => {
      requestProduct(productId);
    });
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
            guid={offering.guid}
            onPayment={this.saveUserPayment}
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
