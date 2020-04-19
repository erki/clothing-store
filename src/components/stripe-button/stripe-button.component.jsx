import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
    console.log(token);
    alert('Payment successful');
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100 //price in cents
    const publishableKey = 'pk_test_ZeOmKHHtPHbnbIhZi2uQBsPw00RRwCeoOb';

    return (
        <StripeCheckout label='Pay Now' name='Clothing' billingAddress shippingAddress
                        image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`}
                        amount={priceForStripe} panelLabel='Pay Now' token={onToken} stripeKey={publishableKey}/>
    )
};

export default StripeCheckoutButton;