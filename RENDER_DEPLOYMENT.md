# Deploying to Render.com (Free Tier)

Follow these detailed steps to deploy your application to Render.com's free tier:

## 1. Prepare Your Code Repository

1. Make sure your code is in a GitHub repository
2. Ensure you have the following files in your repository:
   - `Procfile` (contains: `web: npm run start`)
   - `render.yaml` (deployment configuration)
   - Your application code

## 2. Sign Up for Render

1. Go to [https://render.com](https://render.com) and create a free account
2. You can sign up with GitHub for easier repository linking

## 3. Create a New Web Service

1. From your Render dashboard, click "New" and select "Web Service"
2. Connect your GitHub account if you haven't already
3. Select the repository with your application code
4. You'll be taken to the configuration page

## 4. Configure Your Web Service

Enter the following settings:
1. **Name**: Choose a name for your service (e.g., hijab-ul-dua-platform)
2. **Region**: Select a region closest to your users
3. **Branch**: Choose your main branch (usually `main` or `master`)
4. **Runtime**: Node
5. **Build Command**: `npm install && npm run build`
6. **Start Command**: `npm run start`
7. **Plan**: Select Free

## 5. Add Environment Variables

1. Scroll down to the "Environment Variables" section
2. Add the following variables:
   - Key: `NODE_ENV`, Value: `production`
   - Key: `DATABASE_URL`, Value: [Your Neon PostgreSQL connection string]
   - Add any other environment variables your application needs

## 6. Deploy Your Application

1. Click "Create Web Service"
2. Render will begin deploying your application
3. The deployment process may take a few minutes
4. You can monitor the deployment in the "Logs" tab

## 7. Access Your Deployed Application

1. Once deployment is complete, Render will provide a URL for your application
2. The URL will be in the format: `https://your-service-name.onrender.com`
3. Your application is now running 24/7 for free!

## Important Notes About the Free Tier

1. **Sleep Mode**: Free services on Render will spin down after 15 minutes of inactivity. When a new request comes in, the service will spin up again (may take 15-30 seconds for the first request).
2. **Usage Limits**: Free tier has 750 hours of runtime per month, which is enough for a single service to run continuously.
3. **No Custom Domains**: The free tier does not support custom domains, only the default `.onrender.com` domain.

## How to Keep Your Application "Always On"

To prevent your application from spinning down (optional):
1. Set up a free service like UptimeRobot (https://uptimerobot.com) 
2. Configure it to ping your application URL every 10-15 minutes
3. This will keep your application active and prevent it from entering sleep mode