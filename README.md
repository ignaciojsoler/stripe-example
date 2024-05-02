# Stripe Payment Integration Demo

This repository contains a demonstration of integrating Stripe payments into a simple web application. The application consists of client-side and server-side code, allowing users to make payments for a gaming keyboard using Stripe.

## Features

- **Client-Side Code (Folder: client):**
  - Utilizes React with Stripe Elements for creating payment forms.
  - Implements a checkout form for users to input card details securely.
  - Submits payment information to the server for processing.

- **Server-Side Code (Folder: server):**
  - Built with Express.js for handling HTTP requests.
  - Utilizes the Stripe API for processing payments securely.
  - Implements a POST endpoint `/api/checkout` for processing payments.

## Getting Started

To run this demo locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ignaciojsoler/stripe-example
   ```

2. Install dependencies for both the client and server:

   ```bash
   cd client
   pnpm install
   cd ../server
   pnpm install
   ```

3. Set up your environment variables:
   - In the `server` folder, create a `.env` file and add your Stripe API secret key.

4. Run the server:
   ```bash
   cd server
   pnpm run dev
   ```

5. Run the client:
   ```bash
   cd client
   npm run dev
   ```

6. Open your web browser and visit `http://localhost:5173` to see the application in action.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

