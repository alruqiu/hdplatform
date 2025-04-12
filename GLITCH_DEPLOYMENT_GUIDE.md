# Step-by-Step Guide: Deploying to Glitch for 24/7 Free Hosting

This guide will walk you through deploying your Hijab-Ul-Dua manufacturing platform to Glitch.com for free 24/7 hosting.

## Step 1: Sign Up for Glitch

1. Go to [Glitch.com](https://glitch.com) and sign up for a free account
   - You can use GitHub, Google, or email for sign-up

## Step 2: Create a New Project

1. From your Glitch dashboard, click "New Project"
2. Select "Import from GitHub"
3. Enter your GitHub repository URL
   - Alternatively, you can choose "Clone from Git Repository" and enter your repository URL

## Step 3: Configure Environment Variables

1. Once your project is created, click on the project name to open it
2. In the Glitch editor, click on the ".env" file in the file tree
   - If it's not visible, click on "New File" and name it ".env"
3. Copy and paste the following environment variables:
   ```
   DATABASE_URL=postgresql://neondb_owner:npg_c2LCzAIp8eoa@ep-damp-moon-a6ad0s13.us-west-2.aws.neon.tech/neondb?sslmode=require
   PGDATABASE=neondb
   PGHOST=ep-damp-moon-a6ad0s13.us-west-2.aws.neon.tech
   PGPORT=5432
   PGUSER=neondb_owner
   PGPASSWORD=npg_c2LCzAIp8eoa
   SESSION_SECRET=EADd34lY4cO7cliV+Apbt4Q6lQ8RQUpFE6Qpy2X4e9qUIGb++fXa5LwB4TPesfTs2z41BBRU9ykU4/eqJS2SQQ==
   NODE_ENV=production
   ```

## Step 4: Verify Configuration Files

Make sure these files exist in your project:

1. **keep_alive.js** - Prevents the application from sleeping
2. **glitch.json** - Configures how Glitch runs your application
3. **.gitignore** - Prevents sensitive files from being committed

## Step 5: Deploy Your Application

1. Glitch automatically deploys your application as soon as the files are loaded
2. You'll see a loading indicator while your application builds and starts
3. Once complete, click "Show" at the top of the editor to view your application
4. Your application will be available at a URL like: `https://your-project-name.glitch.me`

## Step 6: Set Up External Monitoring (Important!)

While your application includes an internal keep-alive script, it's best to also set up an external monitoring service:

1. Go to [UptimeRobot](https://uptimerobot.com) and create a free account
2. Add a new HTTP monitor for your Glitch application URL
3. Set the check interval to 5 minutes
4. This ensures your application never goes to sleep, even if the internal keep-alive script fails

## Step 7: Test Your Application

1. Visit your Glitch application URL
2. Verify you can log in and access all features
3. Test data persistence by creating and retrieving data

## Maintaining Your 24/7 Application

- **Monitor Uptime**: Check UptimeRobot regularly to ensure your application is running
- **Update Code**: Push changes to your GitHub repository, then refresh your Glitch project or use the "Pull from GitHub" option in the Glitch editor
- **Console Access**: Use the Glitch terminal/console for debugging or to manually run commands

## Troubleshooting

If your application isn't working:

1. **Check Logs**: Click on "Logs" in the Glitch editor to see error messages
2. **Verify Environment Variables**: Ensure all variables in .env are correct
3. **Restart the Application**: Click on "Tools" and select "Restart Project"
4. **Check Terminal**: Use the terminal to manually run commands or see error output