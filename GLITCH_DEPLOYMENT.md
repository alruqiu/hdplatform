# Deploying to Glitch.com (Free Tier)

Glitch is a platform that allows you to deploy and host web applications for free. Here's how to deploy your application on Glitch:

## 1. Create a Glitch Account

1. Go to [https://glitch.com](https://glitch.com) and sign up for a free account
2. You can use GitHub, Google, or email for sign-up

## 2. Create a New Project

1. From your Glitch dashboard, click "New Project"
2. Select "Import from GitHub"
3. Enter your GitHub repository URL
4. Glitch will clone and set up your project

## 3. Configure Your Application

1. Once your project is created, click on the project to open it
2. In the editor, click on the ".env" file in the file tree (or create it if it doesn't exist)
3. Add your environment variables:
   ```
   NODE_ENV=production
   DATABASE_URL=your_neon_database_connection_string
   ```
4. Add any other environment variables your application needs

## 4. Modify package.json (if needed)

1. Make sure your `package.json` includes the correct start script:
   ```json
   "scripts": {
     "start": "NODE_ENV=production node dist/index.js",
     "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
     ...
   }
   ```

## 5. Add a .gitignore file

1. Create or update the `.gitignore` file to exclude unnecessary files:
   ```
   node_modules
   .env
   dist
   ```

## 6. Set Up Auto-Refresh to Keep Your App Awake

Glitch free projects go to sleep after 5 minutes of inactivity. To keep it awake:

1. Create a file called `keep_alive.js` in your project:
   ```javascript
   const http = require('http');
   
   function keepAlive() {
     const options = {
       host: 'your-project-name.glitch.me',
       port: 80,
       path: '/'
     };
     
     http.get(options, function(res) {
       res.on('data', function() {});
       res.on('end', function() {
         console.log('Ping completed');
       });
     }).on('error', function(err) {
       console.log('Error during ping: ' + err.message);
     });
   }
   
   // Ping the application every 4 minutes to keep it awake
   setInterval(keepAlive, 240000);
   ```

2. Update your main server file to include this keep-alive script:
   ```javascript
   // Add this near the end of your server/index.ts file
   if (process.env.NODE_ENV === 'production') {
     require('./keep_alive.js');
   }
   ```

## 7. Deploy Your Application

1. Glitch will automatically build and serve your application
2. You can find your application URL at the top of the editor (it will be something like https://your-project-name.glitch.me)

## 8. External Service to Keep Awake (For More Reliability)

For even more reliability, set up an external service to ping your app:

1. Create an account at [UptimeRobot](https://uptimerobot.com)
2. Set up a monitor to ping your Glitch URL every 5 minutes
3. This ensures your app stays awake even if the internal keep-alive script fails

## Free Tier Limitations

Glitch's free tier includes:
- Projects sleep after 5 minutes of inactivity (can be avoided with the keep-alive script)
- 1000 hours of runtime per month (enough for continuous operation)
- 512MB RAM, 200MB storage
- Custom domains are not supported in the free tier