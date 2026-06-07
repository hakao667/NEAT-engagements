# Vercel Deployment Guide

## Prerequisites

1. **GitHub Account** - Push your code to GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **MongoDB Atlas** - Cloud MongoDB database at [mongodb.com/cloud](https://www.mongodb.com/cloud)
4. **Resend Account** - Email service at [resend.com](https://resend.com)

## Step 1: Set Up MongoDB Atlas

1. Create a free MongoDB Atlas cluster at https://mongodb.com/cloud
2. Create a database user with a strong password
3. Add your Vercel deployment IP to Network Access (or allow 0.0.0.0/0)
4. Copy your connection string:
   ```
   mongodb+srv://username:password@cluster-name.mongodb.net/neat_engagements?retryWrites=true&w=majority
   ```

## Step 2: Generate NextAuth Secret

Run this in your terminal to generate a secure secret:

```bash
openssl rand -base64 32
```

Or use this online generator: https://generate-secret.now.sh/32

## Step 3: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Next.js + MongoDB setup"

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/neat-engagements.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository
4. Vercel will auto-detect Next.js
5. Click **"Environment Variables"** and add:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | Your MongoDB Atlas connection string |
| `NEXTAUTH_SECRET` | Your generated secret |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` (or custom domain) |
| `NEXT_PUBLIC_SITE_URL` | Same as `NEXTAUTH_URL` |
| `RESEND_API_KEY` | Your Resend API key |
| `ADMIN_EMAIL` | admin@neatengagements.com |
| `NEXT_PUBLIC_CONTACT_EMAIL` | contact@neatengagements.com |

6. Click **"Deploy"**

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts and add environment variables when asked
```

## Step 5: After Deployment

1. **Verify the deployment** at your Vercel URL
2. **Test the contact form** - Submit a test inquiry
3. **Set custom domain** (optional):
   - In Vercel project settings → **Domains**
   - Add your domain and follow DNS instructions

## Step 6: Post-Deployment Database

The database will be created automatically on first request, thanks to Prisma.

To manually set up the database, SSH into your Vercel deployment:

```bash
vercel env pull  # Pull environment variables
npx prisma db push  # Push schema to MongoDB
```

Or run migrations manually:

```bash
npx prisma generate
npx prisma db push
```

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `NEXTAUTH_SECRET` | Session encryption key | Generated via openssl |
| `NEXTAUTH_URL` | NextAuth callback URL | `https://yourdomain.com` |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | `https://yourdomain.com` |
| `RESEND_API_KEY` | Resend email API key | From Resend dashboard |
| `ADMIN_EMAIL` | Where inquiries go | `admin@neatengagements.com` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact form email | `contact@neatengagements.com` |

## Troubleshooting

### Build Fails
- Check logs in Vercel dashboard
- Ensure all environment variables are set
- Run `npm run build` locally to test

### Database Connection Issues
- Verify MongoDB connection string format
- Check MongoDB Atlas network access (allow Vercel IPs)
- Ensure `DATABASE_URL` is set in Vercel environment

### Emails Not Sending
- Verify Resend API key is valid
- Check Resend dashboard for delivery issues
- Ensure `RESEND_API_KEY` is set correctly

### NextAuth Issues
- Verify `NEXTAUTH_SECRET` is set
- Ensure `NEXTAUTH_URL` matches your domain
- Clear browser cookies and try again

## Scaling Tips

- **Database**: MongoDB Atlas auto-scales on free tier
- **Images**: Sharp is optimized for Vercel
- **Serverless**: API routes auto-scale
- **CDN**: Vercel provides global CDN by default

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- MongoDB Docs: https://docs.mongodb.com
- Prisma Docs: https://www.prisma.io/docs
