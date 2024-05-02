import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51O8Cn3Jp19xVOJHBL2jVIpcKglv2E9Q5SDFDVBzPEMK05Nh1G4fCs2QBbmUmVG6R3MGXLqpezAyPdEB1KqzmkyhH00j5cs9HgJ"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardNumberElement),
      });

      if (!error) {
        const { data } = await axios.post(
          "http://localhost:3000/api/checkout",
          {
            id: paymentMethod.id,
            amount: 100,
          }
        );
        console.log(data);
        if (data.return_url) window.location.href = data.return_url;
      }
      console.log(paymentMethod)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <img
        src="https://www.chuwi.com/public/upload/image/20230208/f3bb643dcd24141261324785d0c8523b.jpg"
        alt=""
        className="border border-slate-400"
      />
      <h1 className="font-bold">Teclado</h1>
      <CardNumberElement className="p-4 bg-slate-100" />
      <CardExpiryElement className="p-4 bg-slate-100"/>
      <CardCvcElement className="p-4 bg-slate-100" />
      <button className="bg-emerald-600 text-white py-4 px-4 w-full rounded">
        Comprar
      </button>
    </form>
  );
};

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Elements stripe={stripePromise}>
        <div className="m-auto bg-slate-200 shadow-xl text-black w-[273px] p-4 rounded">
          <CheckoutForm />
        </div>
      </Elements>
    </div>
  );
}

export default App;
