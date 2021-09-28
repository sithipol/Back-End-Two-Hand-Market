import Express from "express";
const app = Express();
const port = 3000;
import getRoute from "./src/routes/getRouter";

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // const allowedOrigins = ['http://localhost:8080'];
  // const origin = req.headers.origin;
  // if (allowedOrigins.includes(origin)) {
  //   res.setHeader('Access-Control-Allow-Origin', origin);
  // }
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", getRoute);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
