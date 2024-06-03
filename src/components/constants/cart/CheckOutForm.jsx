import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slice/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export const CheckOutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();

  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart());
  };

  const STRIPE_API = import.meta.env.STRIPE_ID;

  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey={STRIPE_API}
        amount={total * 100}
        name="Eccommence Website "
        email="info@gmail.com"
        description="Payment test using stripe"
      >
        <button className="w-full  bg-gray-200 py-3.5 my-3 font-medium">
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
