import express from "express";
import { Stripe } from "stripe";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.SECRET_KEY);
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  const { id, amount } = req.body;
  console.log(id, amount);
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Gaming Keyboard",
      payment_method: id,
      confirm: true, //confirm the payment at the same time
      return_url: "http://localhost:5173/success",
    });

    return res
      .status(200)
      .json({
        message: "Successful Payment",
        return_url: "http://localhost:5173/success",
      });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});

app.listen(3000, () => {
  console.log("Server on port", 3000);
});
