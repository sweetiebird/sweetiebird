import React from 'react';

import propTypes from './prop-types';
import defaultProps from './default-props';
import styles from './styles.css';

class PaypalButton extends React.Component {
  componentDidMount() {
    const { amount, id } = this.props;
    const paypal = window.paypal;

    if (paypal) {
      paypal.Button.render({
        env: 'sandbox', // Or 'sandbox',
        client: {
          sandbox: 'Af9lKt1UI_oRIYUXG3UPR5fFbrLy-mvSnFsyuBaXAX48-Diu4HQS6jzMhSK4UqIrNPQb7SY7VsweodqX',
        },
        commit: true, // Show a 'Pay Now' button
        style: {
          color: 'gold',
          size: 'small'
        },
        payment: function(data, actions) {
          return actions.payment.create({
            payment: {
              transactions: [
                {
                  amount: { total: `${amount}`, currency: 'USD' }
                }
              ]
            }
          });
        },
        onAuthorize: function(data, actions) {
          /*
           * Execute the payment here
           */
        },
        onCancel: function(data, actions) {
          /*
           * Buyer cancelled the payment
           */
        },
        onError: function(err) {
          /*
           * An error occurred during the transaction
           */
        }
      }, `#${id}`);
    }
  }

  render() {
    const { id } = this.props;

    return (
      <div id={id} />
    );
  }
}

PaypalButton.propTypes = propTypes;

PaypalButton.defaultProps = defaultProps;

export default PaypalButton;
