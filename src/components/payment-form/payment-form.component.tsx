import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment-form.styles";
import { selectCartTotal } from "../../hooks/cart-selector";
import { selectCurrentUser } from "../../hooks/user-selector";
import { useState } from "react";
import { ButtonTypeClasses } from "../UI/button/button.component";

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch(
      `${window.location.origin}/.netlify/functions/create-payment-intent`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify({ amount: amount * 100 }),
      }
    ).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement) as any,
        billing_details: {
          name: currentUser ? currentUser.displayName : ("Guest" as any),
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Success");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={ButtonTypeClasses.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
