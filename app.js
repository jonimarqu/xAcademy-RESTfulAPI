const express = require("express");
const { initializeDB } = require("./config/db-config");
const { loggingMdw } = require("./middleware");
const { bookRouter, libraryRouter, userRouter } = require("./routes");

const app = express();
const PORT = 9000;

app.use(loggingMdw);
app.use("/book", bookRouter);
app.use("/library", libraryRouter);
app.use("/user", userRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Listening on port ${PORT}..`);
});
