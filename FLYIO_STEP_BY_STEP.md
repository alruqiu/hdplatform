# Detailed Step-by-Step Guide: Deploying to Fly.io for 24/7 Free Hosting

This guide will walk you through deploying your Hijab-Ul-Dua application to Fly.io, which offers true 24/7 hosting on their free tier with no sleep periods.

## Prerequisites

1. Your application code (already complete)
2. A GitHub account (to store your code)
3. A Neon PostgreSQL database (free tier)

## Step 1: Push Your Code to GitHub

If your code isn't already on GitHub:

1. Create a new GitHub repository
2. Push your code with these commands:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## Step 2: Install Fly CLI

1. Install the Fly CLI tool:
   - **MacOS/Linux**: Run in terminal:
     ```
     curl -L https://fly.io/install.sh | sh
     ```
   - **Windows**: Run in PowerShell:
     ```
     iwr https://fly.io/install.ps1 -useb | iex
     ```

2. Create a Fly.io account:
   ```
   fly auth signup
   ```
   - Follow the prompts to create an account
   - No credit card is required for the free tier

## Step 3: Configure Your Application

1. Make sure the `fly.toml` file we created is in your project root
2. Update the app name in fly.toml if needed (must be globally unique)

## Step 4: Launch Your Application

1. Navigate to your project directory in the terminal
2. Run:
   ```
   fly launch
   ```
3. When prompted:
   - Confirm your app name
   - Choose a region closest to your users
   - **Say NO to creating a PostgreSQL database** (since you'll use Neon)
   - Say NO to deploying now (we need to set up the database URL first)

## Step 5: Set Up Your Neon PostgreSQL Database

1. Go to [https://neon.tech](https://neon.tech) and sign up
2. Create a new project
3. Once created, go to the "Connection Details" page
4. Copy the connection string (starts with `postgres://` or `postgresql://`)

## Step 6: Configure Environment Variables

1. Set your database connection string on Fly.io:
   ```
   fly secrets set DATABASE_URL="your-neon-database-connection-string"
   ```

2. Set any other required environment variables:
   ```
   fly secrets set SECRET_KEY="your-secret-key"
   ```

## Step 7: Deploy Your Application

1. Deploy with:
   ```
   fly deploy
   ```
2. Wait for the build and deployment to complete
3. Your application will be available at `https://your-app-name.fly.dev`

## Step 8: Set Up Your Database Schema

1. Connect to your Neon database using the Neon console or a tool like pgAdmin
2. Run the database migrations by executing:
   ```
   fly ssh console
   npm run db:push
   ```

## Step 9: Verify Everything Works

1. Visit your application URL: `https://your-app-name.fly.dev`
2. Check that you can log in and access all features
3. Verify database connectivity by creating/retrieving data

## Step 10: Monitor Your Application

1. Check application status:
   ```
   fly status
   ```

2. View logs:
   ```
   fly logs
   ```

## Keeping Your Application Free

Fly.io's free tier includes:
- 3 shared-cpu-1x 256mb VMs
- 3GB persistent volume storage
- 160GB outbound data transfer

To ensure you stay within free limits:
1. Use only 1 VM for your application
2. Monitor your usage in the Fly.io dashboard
3. Be mindful of outbound data transfer

## Troubleshooting

If you encounter issues:

1. **Deployment Failures**: Check `fly logs` for detailed error messages
2. **Database Connection Issues**: Verify your DATABASE_URL is correctly set
3. **Application Crashes**: Check for memory limits (256MB per instance)

Need more help? Visit [Fly.io's Community](https://community.fly.io/) for support