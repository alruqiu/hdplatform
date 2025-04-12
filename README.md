# Hijab-Ul-Dua Manufacturing Automation Platform

A manufacturing business automation platform focusing on advanced inventory management with robust mobile scanning capabilities.

## Deployment Instructions for Render.com (Free Tier)

1. Create an account on [Render.com](https://render.com) (free)
2. Connect your GitHub account
3. Create a new Web Service
4. Choose your repository
5. Use the following settings:
   - **Name**: hijab-ul-dua-platform (or any name you prefer)
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: Free
   
6. Add the following environment variables:
   - `DATABASE_URL` (Your Neon PostgreSQL database URL)
   - Any other secret environment variables your application needs
   
7. Click "Create Web Service"

## Database Setup

This application uses Neon PostgreSQL for database storage. To connect to your database:

1. Create a free account on [Neon](https://neon.tech)
2. Create a new project
3. Get your connection string
4. Add it as the DATABASE_URL environment variable in your Render service

## Local Development

1. Clone this repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`