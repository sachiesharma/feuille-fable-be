// Import dotenv to process environment variables from `.env` file.
require("dotenv").config();

console.log("DATABASE_URL:", process.env.DATABASE_URL);

module.exports = {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
};
