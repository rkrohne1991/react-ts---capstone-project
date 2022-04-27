import { loadStripe } from '@stripe/stripe-js';

const StripeKey: string | undefined = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

export const stripePromise = loadStripe(StripeKey || '');
