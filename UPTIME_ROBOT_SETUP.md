# Setting Up UptimeRobot to Keep Your Application Always On

Render's free tier puts applications to sleep after 15 minutes of inactivity. However, you can use UptimeRobot (free) to send periodic pings to your application, keeping it awake 24/7.

## 1. Create an UptimeRobot Account

1. Go to [https://uptimerobot.com](https://uptimerobot.com) and sign up for a free account
2. The free plan allows up to 50 monitors with 5-minute check intervals

## 2. Add a New Monitor

1. After logging in, click "Add New Monitor"
2. Configure the monitor:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: Your application name (e.g., "Hijab-Ul-Dua Platform")
   - **URL**: Your Render.com application URL (e.g., https://your-app-name.onrender.com)
   - **Monitoring Interval**: 5 minutes (the shortest free interval)
   - **Monitor Timeout**: 30 seconds (default is fine)

3. Click "Create Monitor"

## 3. Verify the Monitor is Working

1. Wait a few minutes for the first check to complete
2. The status should show "Up" with a green indicator
3. You can view detailed logs by clicking on your monitor

## 4. Set Up Alerts (Optional)

1. Click on the "Edit" button for your monitor
2. Go to the "Alert Contacts" tab
3. Add your email or other notification methods
4. Configure when you want to be notified (e.g., when the site goes down)

## Benefits

- Your application will stay awake 24/7, even on Render's free tier
- Faster response times for users (no cold start delay)
- You'll be notified if your application goes down

## Free Tier Limitations

- 50 monitors maximum
- 5-minute check interval (minimum)
- Basic alerting features

This setup ensures your application remains active without spending money on upgraded hosting tiers.