//initialize Express in project
const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("knex")(require("./knexfile"));
const reviewsRoutes = require("./routes/reviewsRoutes");

//Middleware
app.use(
  cors({
    origin: [/^http:\/\/localhost:\d+$/, process.env.CLIENT_URL],
  }),
);
app.use(express.json());

app.use("/", reviewsRoutes);

const PORT = process.env.PORT || 8080;

//Bring the database schema up to date, then start the server. Running
//migrations on boot means a fresh database (e.g. a new Neon project) is set up
//automatically on the next deploy without a manual migration step.
async function start() {
  try {
    await knex.migrate.latest();
    console.log("Database migrations are up to date");
  } catch (error) {
    console.error("Could not run database migrations:", error.message);
  }

  app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
    console.log("Press CTRL + C to stop server");
  });
}

start();
