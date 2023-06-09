require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const authRoute = require("./routes/auth-route");
const cartRoute = require("./routes/cart-route");
const productRoute = require("./routes/product-route");
const additemRoute = require("./routes/additem-route");
const orderRoute = require("./routes/order-router");

const notFoundMiddleware = require("./midlewares/not-founds");
const errorMiddleware = require("./midlewares/error");

const app = express();
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  rateLimit({
    windowMs: 1000 * 60 * 1,
    max: 1000,
    message: { message: "too many requests" },
  })
);

app.use(helmet());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/additem", additemRoute);
app.use("/order", orderRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server running on port" + port));
