import expess from "express";
import mongoose from "mongoose";
import router from "../backend/routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
const app = expess();

app.use(expess.json()); //midware pass data in json form data
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://admin:Rbl8eXy2VawEencB@cluster1.dtv7rvt.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => {
    console.log("Connected to Database and Listening to Localhost 5000");
  })
  .catch((err) => console.log(err));
