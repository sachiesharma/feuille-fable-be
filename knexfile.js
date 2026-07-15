// Import dotenv to process environment variables from `.env` file.
require("dotenv").config();

// Local Postgres doesn't support SSL; hosted databases (Supabase, Render) require it
const isLocalDb = /localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL || "");

module.exports = {
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: isLocalDb ? false : { rejectUnauthorized: false },
  },
};
