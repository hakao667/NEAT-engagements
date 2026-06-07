# NEAT Engagements Website

A modern, professional, and responsive corporate website for NEAT Engagements featuring lead generation, inquiry management, and applicant tracking.

## 🌟 Features

- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Professional Pages**: Home, About Us, Services, History, Contact, and Careers
- **Inquiry System**: Client inquiry submission with automated email notifications
- **Applicant Management**: Job application forms with resume upload capability
- **Admin Dashboard**: Manage inquiries and applicants
- **Email Notifications**: Automatic confirmation emails to users and admin notifications
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **WCAG Accessibility**: Keyboard navigation and screen reader support
- **Database**: PostgreSQL for reliable data storage

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+, React 18+, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Forms**: React Hook Form with Zod validation
- **Email**: Resend API for email delivery
- **Styling**: Tailwind CSS with custom brand colors

## 📋 Brand Colors

### Primary
- Dark Green: `#1B5E20`
- Medium Green: `#2E8B57`
- Light Green: `#7BC67B`

### Secondary
- Navy Blue: `#0F2D52`
- Light Blue: `#7EC8E3`

### Neutral
- White: `#FFFFFF`
- Light Gray: `#F5F7FA`
- Dark Gray: `#333333`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd neat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your environment variables:**
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/neat_engagements
   RESEND_API_KEY=your_resend_api_key
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_CONTACT_EMAIL=contact@neatengagements.com
   ADMIN_EMAIL=admin@neatengagements.com
   ```

5. **Set up the database:**
   ```bash
   npx prisma migrate dev
   ```

6. **Run the development server:**
   ```bash
   npm run dev
   ```

7. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
neat/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form submission
│   │   └── applicants/    # Applicant form submission
│   ├── admin/             # Admin dashboard
│   ├── about/             # About Us page
│   ├── services/          # Services page
│   ├── history/           # Company History page
│   ├── contact/           # Contact Us page
│   ├── careers/           # Careers page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   ├── ContactForm.tsx    # Contact form
│   ├── ApplicantForm.tsx  # Application form
│   └── ...                # Other components
├── lib/                   # Utilities and helpers
├── prisma/               # Prisma schema
│   └── schema.prisma     # Database schema
├── public/               # Static assets
│   └── uploads/          # User uploaded files
├── styles/               # CSS files
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind CSS config
└── next.config.js        # Next.js config
```

## 📝 Pages

### Public Pages
- **Home** (`/`) - Hero section with services preview and CTA
- **About Us** (`/about`) - Company mission, vision, and values
- **Services** (`/services`) - Service offerings and benefits
- **History** (`/history`) - Company timeline and milestones
- **Contact** (`/contact`) - Contact form and information
- **Careers** (`/careers`) - Job application form

### Admin Pages
- **Dashboard** (`/admin`) - Overview and recent submissions
- **Inquiries** (`/admin/inquiries`) - Manage customer inquiries
- **Applicants** (`/admin/applicants`) - Manage job applications

## 🔗 API Endpoints

### POST `/api/contact`
Submit a customer inquiry.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "company": "Acme Inc",
  "email": "john@example.com",
  "phone": "+1234567890",
  "subject": "Service Inquiry",
  "message": "I'm interested in your services..."
}
```

### POST `/api/applicants`
Submit a job application.

**Request Body (FormData):**
- `fullName`: string
- `email`: string
- `phone`: string
- `positionInterest`: string
- `message`: string (optional)
- `resume`: File

## 📧 Email Features

- **Inquiry Notifications**: Admin receives new inquiry submissions
- **Confirmation Emails**: Users receive confirmation of submission
- **Applicant Notifications**: Admin notified of new applications
- **Auto-Reply**: Applicants receive confirmation of application receipt

## 🔐 Security Features

- Form validation with Zod
- HTTPS ready
- Environment variable protection
- Database query parameterization via Prisma
- CSRF protection in forms

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML markup
- Keyboard navigation support
- Screen reader friendly
- Focus visible indicators
- Proper heading hierarchy
- Color contrast compliance

## 📱 Mobile Optimization

- Responsive breakpoints (sm, md, lg, xl)
- Touch-friendly interface
- Mobile-first CSS approach
- Optimized images with Next.js Image component
- Fast page load times

## 🔍 SEO Optimization

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data support
- Semantic HTML
- Sitemap generation ready

## 📊 Database Schema

### Inquiry
- `id`: Unique identifier
- `fullName`: Customer name
- `company`: Company name (optional)
- `email`: Email address
- `phone`: Phone number
- `subject`: Inquiry subject
- `message`: Inquiry message
- `status`: Processing status (new, in-progress, resolved)
- `createdAt`: Submission timestamp
- `updatedAt`: Last update timestamp

### Applicant
- `id`: Unique identifier
- `fullName`: Applicant name
- `email`: Email address
- `phone`: Phone number
- `positionInterest`: Position applied for
- `resumeUrl`: Resume file path
- `message`: Applicant message
- `status`: Application status
- `createdAt`: Submission timestamp
- `updatedAt`: Last update timestamp

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
Follow standard Node.js deployment procedures:
1. Install dependencies
2. Run database migrations
3. Build the project: `npm run build`
4. Start server: `npm start`

## 🔧 Configuration

### Environment Variables
Refer to `.env.example` for all required variables.

### Tailwind CSS
Customize colors in `tailwind.config.ts`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
    }
  }
}
```

### Database Migrations
Create new migrations:
```bash
npx prisma migrate dev --name description
```

## 📚 Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Database Studio
```bash
npm run db:studio
```

Opens Prisma Studio at `http://localhost:5555`

### Linting
```bash
npm run lint
```

## 🐛 Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists

### Email Not Sending
- Verify RESEND_API_KEY is set
- Check admin email configuration
- Review console for errors

### Build Errors
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Run type check: `npx tsc --noEmit`

## 📈 Performance

- Initial page load: < 3 seconds
- Optimized images with Next.js Image
- Static generation for faster pages
- API response caching where appropriate

## 📄 License

This project is proprietary to NEAT Engagements.

## 👥 Support

For support, contact: support@neatengagements.com

---

**Last Updated:** June 2026
