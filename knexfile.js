// Import dotenv to process environment variables from `.env` file.
require("dotenv").config();

module.exports = {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
};
