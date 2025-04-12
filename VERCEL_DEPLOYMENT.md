# Vercel Deployment Guide for Hijab-Ul-Dua Platform

This guide will walk you through deploying your Hijab-Ul-Dua manufacturing platform to Vercel for free hosting with continuous deployment.

## Prerequisites
- A GitHub account
- Your project pushed to a GitHub repository
- A Vercel account (sign up at vercel.com - you can use your GitHub account)

## Step 1: Push Your Code to GitHub

1. If you haven't already, create a GitHub repository and push your code:
```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## Step 2: Connect to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New..." and select "Project"
3. Select your GitHub repository from the list
4. Vercel will automatically detect your project settings

## Step 3: Configure Environment Variables

Add the following environment variables to your Vercel project:

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

## Step 4: Deploy

1. Click "Deploy"
2. Vercel will build and deploy your application
3. Once complete, you'll get a URL for your deployed application

## Step 5: Configure Custom Domain (Optional)

1. From your project in the Vercel dashboard, go to "Settings" > "Domains"
2. Add your custom domain and follow the instructions to configure DNS

## Important Notes

### File Uploads
Vercel uses serverless functions which don't support writing to the local filesystem. For file uploads:

1. You have these options:
   - Use Vercel Blob Storage (recommended)
   - Configure an S3-compatible storage service
   - Use a third-party service like Cloudinary

### Database Connection
Make sure your Neon PostgreSQL database allows connections from Vercel's IP range or is configured to accept connections from any IP.

### Continuous Deployment
Vercel will automatically redeploy your application when you push changes to your GitHub repository. This means you don't have to manually update your deployment each time you make changes.

### Logs and Monitoring
You can access logs and performance metrics from the Vercel dashboard to help debug issues and monitor your application.