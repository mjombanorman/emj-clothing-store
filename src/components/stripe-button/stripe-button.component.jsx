import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TYmK7SmsygTXURLaXVWHZha1'

    const onToken = (token) => {
        console.log(token);
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Emjay Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}.`}
            amount={priceForStripe}
            panelLabel='Complete your purchase'
                token={onToken}
          stripeKey={publishableKey}
      />
  );
};

export default StripeCheckoutButton;

