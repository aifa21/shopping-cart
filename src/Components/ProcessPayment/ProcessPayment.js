import React from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from "./SimpleCardForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IVr35DGdtwRWtu1oyX34LXUeadOVxyqDfRmKm3qtS7gHevdPH1I5mBYGINCvoOHbuBTzEX4d25fqM1Znq4H1Zqf00EXJGjFKO');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
     <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};
export default ProcessPayment;