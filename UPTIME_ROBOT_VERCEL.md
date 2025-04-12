# UptimeRobot Setup Instructions for Vercel Deployment

Follow these steps to set up UptimeRobot to ping your Vercel deployment every 5 minutes, ensuring it stays responsive 24/7:

## Why Use UptimeRobot with Vercel?

While Vercel doesn't have the same sleep behavior as Glitch, UptimeRobot provides several benefits:
1. Monitors your application's uptime
2. Sends alerts if your application goes down
3. Provides uptime statistics
4. Keeps serverless functions warm (prevents cold starts)

## Setup Instructions

1. Create a free account at UptimeRobot.com
   - Go to https://uptimerobot.com/ and sign up

2. After logging in, click "Add New Monitor"
   - Select "HTTP(s)" as the monitor type
   - Enter a friendly name (e.g., "Hijab-Ul-Dua Platform")
   - In the URL field, enter your Vercel deployment URL (e.g., https://hdplatform.vercel.app)
   - Set the monitoring interval to 5 minutes
   - Click "Create Monitor"

3. Additional Settings (Optional)
   - Configure alert contacts (email, SMS, etc.)
   - Set up status page for your application
   - Configure maintenance windows if needed

## Monitoring Endpoints

For better monitoring, create a dedicated health check endpoint in your application:

1. Add a simple endpoint in your Express application:
```javascript
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    host: os.hostname()
  });
});
```

2. Use this endpoint URL in UptimeRobot (e.g., https://hdplatform.vercel.app/api/health)

   This endpoint returns useful information:
   ```json
   {
     "status": "ok",
     "timestamp": "2025-04-12T12:55:26.123Z",
     "environment": "production",
     "host": "vercel-instance-123"
   }
   ```

This will provide more accurate monitoring specific to your application's health rather than just checking if the server responds.