import { useSelector, useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";

import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from "./payment-form.styles";
import { selectCartTotal } from "../../hooks/cart-selector";
import { selectCurrentUser } from "../../hooks/user-selector";
import { useState } from "react";
import { ButtonTypeClasses } from "../UI/button/button.component";
import { setIsModalOpen, setModalContent } from "../../store/action-creators";

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm: React.FC = () => {
  const dispatch = useDispatch();
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
    )
      .then((res) => {
        if (res.status >= 400 && res.status < 600) {
          const errorTemplate = `Bad response from server - ${res.status} ${res.statusText}, Please
              try again later`;

          dispatch(setIsModalOpen(true));
          dispatch(setModalContent(errorTemplate));
          throw new Error(
            `Bad response from server ${res.status} ${res.statusText}`
          );
        }

        return res.json();
      })
      .catch((error) => {
        const errorTemplate = `${error}, Please try again later.`;
        dispatch(setIsModalOpen(true));
        dispatch(setModalContent(errorTemplate));
      });

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement);

    if (!ifValidCardElement(cardDetails)) {
      const validityTemplate = `Please check your card details`;
      dispatch(setIsModalOpen(true));
      dispatch(setModalContent(validityTemplate));
      return;
    }

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      dispatch(setIsModalOpen(true));
      dispatch(setModalContent(paymentResult.error.message as string));
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        dispatch(setIsModalOpen(true));
        dispatch(setModalContent("Payment Success"));
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
