# Overview

ChittyPro is a comprehensive web application designed to help landlords and tenants navigate Chicago's Residential Landlord and Tenant Ordinance (RTLO) - Chapter 5-12 of the Chicago Municipal Code. The application provides AI-powered guidance, property verification, document generation, and legal aid resources to ensure RTLO compliance.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/UI components built on Radix UI primitives with custom styling
- **Styling**: Tailwind CSS with custom design system featuring primary (blue), secondary (blue), and accent (yellow) colors
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Authentication**: Replit Auth integration with session-based authentication

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database interactions
- **API Design**: RESTful API endpoints following conventional patterns
- **Session Management**: Express sessions with PostgreSQL session store using connect-pg-simple
- **Authentication**: OpenID Connect integration with Replit's authentication system

## Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Key Tables**:
  - Users table for authentication and profile data
  - Properties table for RTLO coverage verification
  - RTLO questions/answers for AI-powered guidance
  - Documents table for generated legal documents
  - AI analyses for lease compliance checking
  - Sessions table for authentication state

## Authentication and Authorization
- **Provider**: Replit Auth using OpenID Connect protocol
- **Session Storage**: Server-side sessions stored in PostgreSQL
- **Authorization**: Route-level protection with authenticated user context
- **User Management**: Automatic user creation/updates on login
- **Subscription Management**: Stripe integration for premium feature access

## External Dependencies

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **OpenAI API**: GPT-5 model for RTLO analysis and document generation
- **Stripe**: Payment processing and subscription management for premium features
- **Replit Auth**: OAuth2/OpenID Connect authentication provider

### Key Libraries
- **Frontend**: React, Vite, TanStack Query, Wouter, Radix UI, Tailwind CSS
- **Backend**: Express.js, Drizzle ORM, Passport.js, OpenAI SDK, Stripe SDK
- **Development**: TypeScript, ESBuild for production builds, TSX for development server

### Payment Integration
- **Stripe Elements**: Secure payment form handling with React Stripe.js
- **Subscription Model**: Freemium model with basic RTLO guidance free and premium AI features paid
- **Payment Flow**: Client-side payment collection with server-side subscription management