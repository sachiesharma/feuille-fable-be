## Feuille Fable Backend is structured for an Express server with functionality for managing reviews.

## Express Server Setup:

The server is set up using Express.js, and is initialized in the server.js file, where routes and middleware are defined.

## Endpoints:

POST /saved-reviews: This endpoint is used to add a new review to the database.
GET /saved-reviews: This endpoint retrieves all reviews from the database.
GET /: This endpoint is a route to check if the server is running.

Not fully implemented to front-end: Additional endpoints for getting all users and getting a single user by ID.

## Middleware:

Middleware being used include:

CORS (Cross-Origin Resource Sharing) middleware is used to handle cross-origin requests.
express.json is used to parse JSON data from incoming requests.

## Database Integration:

Knex.js is being used to interact with the MySQL database.
Database migration files (knexfile.js) define the database schema and configurations.
Controller functions (review_controller.js) interact with the database to perform CRUD operations on reviews.

Server routes (reviewsRoutes.js) use these controller functions to handle HTTP requests related to reviews.

## Environment Variables:

The dotenv package is used to load environment variables from a .env file.

## Additional Functionality:

There is functionality for managing users, with endpoints for retrieving all users and getting a single user by ID. This is not fully implemented into the front-end UI as yet.

There are also basic error handling and response formatting in the controller functions.
