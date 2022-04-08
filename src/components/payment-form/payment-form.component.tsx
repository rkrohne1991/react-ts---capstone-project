import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { ButtonType } from "../../state/button-types";
import Button from "../UI/button/button.component";

import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) return;
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={ButtonType.INVERTED}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
