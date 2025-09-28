# Zenith Seller

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cabakdogus/generated-app-20250928-102956)

A visually stunning and insightful analytics dashboard for eBay sellers to optimize listings and accelerate sales growth.

Zenith Seller is a high-performance dashboard designed exclusively for eBay sellers. It transforms raw sales and listing data into actionable insights through an elegant, intuitive interface. The application provides a central hub for sellers to monitor key performance metrics, track listing performance, analyze sales trends, and discover opportunities for growth. Built on Cloudflare Workers, it ensures lightning-fast performance and global reach.

## Key Features

-   **Stunning Landing Page:** A visually breathtaking marketing page to introduce the product and engage users.
-   **Insightful Dashboard:** A central hub with at-a-glance metrics for total sales, active listings, views, and conversion rates.
-   **Comprehensive Listings Management:** A clean, sortable, and filterable view of all eBay listings (active, sold, and unsold).
-   **Powerful Analytics:** An interactive section with rich data visualizations to analyze sales trends and identify top-performing products.
-   **Blazing Fast Performance:** Built on Cloudflare Workers for a globally distributed, low-latency experience.
-   **Fully Responsive:** A flawless and beautiful user experience across all devices, from mobile to desktop.

## Technology Stack

-   **Frontend:** React, Vite, TypeScript
-   **UI Framework:** Tailwind CSS with shadcn/ui components
-   **Routing:** React Router
-   **State Management:** Zustand
-   **Animation:** Framer Motion
-   **Data Visualization:** Recharts
-   **Backend:** Hono on Cloudflare Workers
-   **Storage & Persistence:** Cloudflare Durable Objects

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [Bun](https://bun.sh/) package manager
-   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/zenith-seller.git
    cd zenith-seller
    ```

2.  **Install dependencies:**
    This project uses Bun for package management.
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, which includes both the Vite frontend and the Hono backend worker, run:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

-   `src/`: Contains the React frontend application source code.
    -   `pages/`: Top-level page components.
    -   `components/`: Reusable UI components.
    -   `lib/`: Utility functions and API client.
-   `worker/`: Contains the Hono backend application for the Cloudflare Worker.
    -   `index.ts`: The main worker entry point.
    -   `user-routes.ts`: Application-specific API routes.
    -   `entities.ts`: Data models and logic for Durable Objects.
-   `shared/`: Contains shared TypeScript types used by both the frontend and backend.

## Available Scripts

-   `bun run dev`: Starts the local development server.
-   `bun run build`: Builds the frontend and worker for production.
-   `bun run deploy`: Deploys the application to your Cloudflare account.
-   `bun run lint`: Lints the codebase.

## Deployment

This application is designed to be deployed to Cloudflare Workers.

1.  **Login to Wrangler:**
    Authenticate the Wrangler CLI with your Cloudflare account.
    ```bash
    wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script to build and publish your application.
    ```bash
    bun run deploy
    ```

Alternatively, you can deploy your own version of this project with a single click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cabakdogus/generated-app-20250928-102956)