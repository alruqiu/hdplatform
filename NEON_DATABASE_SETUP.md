# Setting Up Neon PostgreSQL Database (Free Tier)

Follow these steps to set up a free, always-on PostgreSQL database with Neon:

## 1. Create a Neon Account

1. Go to [https://neon.tech](https://neon.tech) and sign up for a free account
2. You can use GitHub, Google, or email for sign-up

## 2. Create a New Project

1. After logging in, click "New Project"
2. Choose a name for your project (e.g., "hijab-ul-dua")
3. Select your region (choose one closest to your users)
4. Click "Create Project"

## 3. Get Your Connection String

1. Once your project is created, find the connection details
2. Look for the connection string that starts with `postgres://` or `postgresql://`
3. Copy this connection string - it will be your DATABASE_URL

## 4. Create Database Schema

Your application already includes the necessary schema definitions and migrations using Drizzle ORM.

1. First, set the DATABASE_URL environment variable in your development environment:
   ```
   export DATABASE_URL=your_neon_connection_string
   ```

2. Run the schema push command:
   ```
   npm run db:push
   ```

This will create all the necessary tables in your Neon database.

## 5. Use in Render Deployment

When setting up your Render deployment:

1. Add the DATABASE_URL as an environment variable
2. Use the exact connection string you copied from Neon

## Benefits of Neon's Free Tier

- Always-on database (no sleep periods)
- 10GB storage
- Unlimited API requests
- Automatic backups
- No credit card required