require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const authRoute = require("./routes/auth-route");
const adminRoute = require("./routes/admin-route");

const notFoundMiddleware = require("./middlewares/not-founds");
const errorMiddleware = require("./middlewares/error");

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
app.use("/admin", adminRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server running on port" + port));
