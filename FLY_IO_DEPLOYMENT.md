# Deploying to Fly.io (Free Tier)

Fly.io offers a generous free tier that allows you to run small applications 24/7 without any sleep periods.

## 1. Install Flyctl Command Line Tool

1. Install the Fly CLI following instructions at: https://fly.io/docs/hands-on/install-flyctl/
   - For MacOS/Linux: `curl -L https://fly.io/install.sh | sh`
   - For Windows: Use PowerShell with `iwr https://fly.io/install.ps1 -useb | iex`

2. Sign up and log in:
   ```
   flyctl auth signup
   ```
   (Or `flyctl auth login` if you already have an account)

## 2. Prepare Your Application

1. Create a `fly.toml` file in your project root:

```toml
app = "hijab-ul-dua-platform"

[build]
  builder = "heroku/buildpacks:20"

[env]
  PORT = "5000"
  NODE_ENV = "production"

[http_service]
  internal_port = 5000
  force_https = true
  auto_stop_machines = false
  auto_start_machines = true
  min_machines_running = 1

[checks]
  [checks.http]
    grace_period = "30s"
    interval = "15s"
    method = "get"
    path = "/api/setup"
    port = 5000
    timeout = "10s"
    type = "http"
```

## 3. Launch Your Application

1. Navigate to your project directory and run:
   ```
   flyctl launch
   ```

2. This will guide you through the setup process:
   - Choose a name for your app
   - Choose a region closest to your users
   - Select "No" when asked about setting up a PostgreSQL database (since you're using Neon)

## 4. Set Environment Variables

1. Set your database connection string:
   ```
   flyctl secrets set DATABASE_URL="your-neon-db-connection-string"
   ```

2. Set any other required environment variables:
   ```
   flyctl secrets set KEY="VALUE"
   ```

## 5. Deploy Your Application

1. Deploy your application with:
   ```
   flyctl deploy
   ```

2. Monitor the build and deployment process

## 6. Access Your Application

Once deployment is complete, you can access your application at:
```
https://your-app-name.fly.dev
```

## Free Tier Limitations

Fly.io's free tier includes:
- 3 shared-cpu-1x 256mb VMs
- 3GB persistent volume storage
- 160GB outbound data transfer
- No credit card required for free resources

This is sufficient to run your application 24/7 with persistent storage.

## Monitoring and Scaling

- Check application status: `flyctl status`
- View logs: `flyctl logs`
- Scale your application (if needed): `flyctl scale count 1`