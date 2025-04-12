# Deploying to Railway.app (Free Tier)

Railway.app offers a developer-friendly platform with a generous free tier that includes 5$ worth of free credits per month. Here's how to deploy your application:

## 1. Prepare Your GitHub Repository

Make sure your code is in a GitHub repository with:
- All your application code
- package.json with proper build and start scripts

## 2. Sign Up for Railway

1. Go to [https://railway.app](https://railway.app) and create an account
2. You can sign up with GitHub for easier integration

## 3. Create a New Project

1. In your Railway dashboard, click "New Project"
2. Select "Deploy from GitHub repo"
3. Select your repository from the list
4. Railway will automatically detect your Node.js application

## 4. Configure Your Application

1. Click on your newly created service
2. Go to the "Variables" tab
3. Add the following environment variables:
   - Key: `NODE_ENV`, Value: `production`
   - Key: `DATABASE_URL`, Value: [Your Neon PostgreSQL connection string]
   - Add any other environment variables your application needs

## 5. Configure Build & Start Commands

1. Go to the "Settings" tab
2. Under "Build Command", enter: `npm install && npm run build`
3. Under "Start Command", enter: `npm run start`
4. Set the "Watch Path" to exclude node_modules: `**/*,!node_modules/**/*`

## 6. Set Up a Railway PostgreSQL Database (Optional)

If you prefer to use Railway's database instead of Neon:

1. Click "New" and select "Database"
2. Choose "PostgreSQL"
3. Railway will create a PostgreSQL instance
4. Go to your service's "Variables" tab
5. Railway will automatically inject the `DATABASE_URL` variable

## 7. Deploy Your Application

1. Your application should deploy automatically
2. You can monitor the deployment in the "Deployments" tab
3. Once complete, click "Generate Domain" to get a public URL

## 8. Keep Your Application Within Free Tier Limits

Railway's free tier provides $5 of free credits per month, which is typically enough for a small application. To ensure you stay within the free tier:

1. Monitor your usage in the "Usage" tab
2. Be aware that your free credits reset each month

## Important Notes

1. Railway's free tier is limited to $5 worth of usage per month
2. There are no sleep/inactive periods like on Render
3. You can connect a custom domain if needed
4. Railway will automatically scale based on usage (but this might exceed free tier limits)