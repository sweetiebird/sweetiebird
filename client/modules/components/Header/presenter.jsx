import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>SweetieBird</h1>
      </div>
    );
  }
}

Header.propTypes = propTypes;

Header.defaultProps = defaultProps;

export default Header;
