const cors = require("cors");
const express = require("express");
const Stripe = require("./stripe");
// const session = require('express-session')
// var memeorystore = require('memorystore')(session)

const app = express();

// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.path, req.method);
  next();
});
const priceToProductMap = {
  basicMonthly: "price_1LoMhzFOlrjAHlmzpSvyrxNX",
  basicYearly: "price_1LoMhzFOlrjAHlmzwTj6iS6u",
  standardMonthly: "price_1LoMibFOlrjAHlmzbBxbjtN3",
  standardYearly: "price_1LoMibFOlrjAHlmzGzXefTiF",
  premiumMonthly: "price_1LoMjBFOlrjAHlmzSiByY7Ki",
  premiumYearly: "price_1LoMjBFOlrjAHlmzCncSxsCP",
  regularMonthly: "price_1LoMjiFOlrjAHlmzTF4huC3K",
  regularYearly: "price_1LoMjiFOlrjAHlmzfyEifscy",
};

app.post("/login", async (req, res) => {
  const { email, name, desc } = req.body;
  const customer = await Stripe.addNewCustomer(email, desc, name);
  res.send(customer);
  // res.redirect("http://localhost:3000/login");
});

app.post("/checkout", async (req, res) => {
  const { email, name, desc, product, isMonthly } = req.body;
  const realProduct = isMonthly ? product + "Monthly" : product + "Yearly";
  const priceID = priceToProductMap[realProduct];
  const customer = await Stripe.addNewCustomer(email, desc, name);
  const session = await Stripe.createCheckoutSession(customer.id, priceID);

  res.send({
    url: session.url,
    stripeID: customer.id,
    subID: session.id,
    sub: session,
  });
});

app.post("/cancel", async (req, res) => {
  const { custID } = req.body;

  const session = await Stripe.cancelSubscription(custID);
  res.send(session);
});

// routes
app.get("/", (req, res) => {
  res.send({ mess: "Working" });
});

// listen
app.listen(4000, () => console.log("Server is running on port 4000"));
