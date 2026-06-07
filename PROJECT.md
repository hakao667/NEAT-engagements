# NEAT Engagements Website

This is the main website project for NEAT Engagements. It includes all public pages, forms, and admin dashboard.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up database
npx prisma migrate dev

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Key Directories

- `/app` - Next.js pages and API routes
- `/components` - React components
- `/prisma` - Database schema and migrations
- `/public` - Static files and uploads

See [README.md](./README.md) for detailed documentation.
