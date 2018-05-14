import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

import { Image, Video } from './components';

class Carousel extends React.Component {
  render() {
    const { images, videos } = this.props;

    return (
      <div className={styles.carousel}>
        {images.map((img, idx) => (
          <Image key={`product-img-${idx}`} src={img} alt="Product image" />
        ))}
        {videos.map((vid, idx) => (
          <Video key={`product-vid-${idx}`} src={vid} />
        ))}
      </div>
    );
  }
}

Carousel.propTypes = propTypes;

Carousel.defaultProps = defaultProps;

export default Carousel;
