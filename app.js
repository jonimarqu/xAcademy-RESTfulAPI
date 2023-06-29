const express = require("express");
const { initializeDB } = require("./config/db-config");
const { loggingMdw } = require("./middleware");
const { bookRouter, libraryRouter, userRouter } = require("./routes");

const app = express();
const PORT = 9000; // process.env.PORT

app.use(express.json());
app.use(loggingMdw);
app.use("/book", bookRouter);
app.use("/library", libraryRouter);
app.use("/user", userRouter);

app.listen(PORT, async () => {
  try {
    await initializeDB();
    console.log(`Listening on port ${PORT}..`);
  } catch (err) {
    console.error("Error initializing DB.", err);
  }
});
