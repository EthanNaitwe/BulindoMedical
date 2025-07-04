# Bulindo Medical Centre Website

## Overview

This is a modern healthcare website for Bulindo Medical Centre, built with a full-stack architecture featuring React frontend and Express.js backend. The application provides information about medical services, allows contact inquiries, and showcases the medical center's capabilities across 9 specialized departments.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Design**: RESTful endpoints for contact management
- **Request Handling**: JSON body parsing and URL encoding support
- **Error Handling**: Centralized error middleware with proper HTTP status codes

### Database Architecture
- **ORM**: Drizzle ORM with TypeScript support
- **Database**: PostgreSQL (via Neon serverless)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Key Components

### Frontend Components
1. **Page Components**: Home, Services, About, Contact, and 404 pages
2. **Section Components**: Hero, Services, About, Testimonials, Contact sections
3. **Layout Components**: Header with navigation and Footer
4. **UI Components**: Complete shadcn/ui component library including forms, buttons, dialogs, etc.

### Backend Components
1. **Route Handlers**: Contact inquiry submission and retrieval endpoints
2. **Storage Layer**: Abstracted interface supporting both memory and database storage
3. **Schema Validation**: Zod schemas for type-safe data validation
4. **Development Server**: Vite integration for development mode

### Shared Components
1. **Schema Definitions**: Shared TypeScript types and Zod validation schemas
2. **Database Tables**: Users and contact inquiries with proper relationships

## Data Flow

### Contact Inquiry Flow
1. User fills out contact form on frontend
2. Form data validated using React Hook Form + Zod
3. Frontend sends POST request to `/api/contact`
4. Backend validates data against shared schema
5. Data stored via abstracted storage interface
6. Success/error response sent to frontend
7. Toast notification displayed to user

### Page Navigation Flow
1. Client-side routing handled by Wouter
2. Static pages served with Vite in development
3. React components handle state and user interactions
4. TanStack Query manages server state caching

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, TypeScript support
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom medical theme colors
- **Forms**: React Hook Form with Hookform resolvers
- **HTTP Client**: Native fetch API with TanStack Query wrapper
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript execution via tsx
- **Database**: Drizzle ORM with Neon PostgreSQL serverless driver
- **Validation**: Zod for runtime type checking
- **Development**: Vite for frontend serving and hot reload

### Build Dependencies
- **TypeScript**: Full TypeScript support across frontend/backend
- **Build Tools**: Vite for frontend, esbuild for backend production builds
- **Development**: tsx for TypeScript execution, various dev utilities

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with hot reload
- Backend runs via tsx with auto-restart on changes
- Database uses Neon serverless PostgreSQL
- Replit-specific plugins for development experience

### Production Build Process
1. Frontend built using Vite to static assets
2. Backend compiled using esbuild to single executable
3. Static assets served from Express in production
4. Environment variables for database configuration

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for PostgreSQL connection
- Automatic Vite/development tool detection
- Replit-specific integration when applicable

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```