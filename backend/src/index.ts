import express from "express";
import mongoose from "mongoose";
import membersRouter from "./routes/members";

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => console.log("connected successfully"))
  .catch(() => console.log("something happened"));

const PORT = 9000;

const app = express();

app.use(express.json());

// app.use("/registeration", registeraRouter);
app.use("/members", membersRouter);
// app.use("/courses", coursesRouter);
// app.use("/articles", articlesRouter);
// app.use("/contacts", contactsRouter);
// app.use("/admin", auth_middleware, adminRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
