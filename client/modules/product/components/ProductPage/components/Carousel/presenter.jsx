import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

class Carousel extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <div className={styles.carousel}>
        {images.map((img, idx) => (
          <img key={`product-img-${idx}`} src={img} alt="Product image" />
        ))}
      </div>
    );
  }
}

Carousel.propTypes = propTypes;

Carousel.defaultProps = defaultProps;

export default Carousel;
