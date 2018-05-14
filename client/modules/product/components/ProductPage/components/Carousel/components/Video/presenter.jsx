import React from 'react';
import YouTube from 'react-youtube';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

class Video extends React.Component {
  render() {
    const { src, alt } = this.props;
    const videoId = src.split('v=')[1];

    return (
      <div className={styles.image}>
        {
          src.length > 0 &&
            <YouTube videoId={videoId} opts={{ autoplay: 1 }} />
        }
      </div>
    );
  }
}

Video.propTypes = propTypes;

Video.defaultProps = defaultProps;

export default Video;
