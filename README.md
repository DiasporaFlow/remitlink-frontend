# RemitLink Frontend

> Connecting Hearts, Bridging Borders, Moving Money

A modern, secure, and efficient cross-border payment platform built with Next.js 14, TypeScript, and Tailwind CSS.

## About

RemitLink is a comprehensive web application for cross-border money transfers, designed to make sending money internationally fast, secure, and affordable. Built for the **IDDA Hackathon 2025** by the DiasporaFlow team.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.2+
- **Styling**: Tailwind CSS 3.4+
- **UI Library**: React 18.2+
- **HTTP Client**: Axios
- **Runtime**: Node.js 18+

## Features

- Modern, responsive design with mobile-first approach
- Type-safe development with TypeScript
- Authentication and authorization ready
- API integration with JWT token management
- Comprehensive utility functions and constants
- Clean code architecture with proper separation of concerns
- CI/CD ready with GitHub Actions

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or higher
- npm 9.0 or higher
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DiasporaFlow/remitlink-frontend.git
cd remitlink-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your configuration:
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_BLOCKCHAIN_RPC=your_blockchain_rpc_url
NEXT_PUBLIC_CHAIN_ID=80001
NEXT_PUBLIC_ENVIRONMENT=development
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
remitlink-frontend/
├── .github/workflows/     # GitHub Actions CI/CD
├── public/               # Static assets
│   ├── images/          # Image files
│   └── icons/           # Icon files
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── (auth)/     # Authentication pages (login, register)
│   │   ├── dashboard/  # Dashboard page
│   │   ├── transfer/   # Transfer page
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Landing page
│   │   └── globals.css # Global styles
│   ├── components/      # React components
│   │   ├── ui/         # UI components
│   │   ├── features/   # Feature-specific components
│   │   └── shared/     # Shared components
│   ├── lib/            # Utility libraries
│   │   ├── api.ts      # Axios instance & interceptors
│   │   ├── utils.ts    # Utility functions
│   │   └── constants.ts # App constants
│   ├── hooks/          # Custom React hooks
│   │   └── useAuth.ts  # Authentication hook
│   ├── store/          # State management
│   │   └── authStore.ts # Auth state store
│   └── types/          # TypeScript type definitions
│       └── index.ts
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:8080/api/v1` |
| `NEXT_PUBLIC_APP_URL` | Frontend app URL | `http://localhost:3000` |
| `NEXT_PUBLIC_BLOCKCHAIN_RPC` | Blockchain RPC endpoint | - |
| `NEXT_PUBLIC_CHAIN_ID` | Blockchain chain ID | `80001` |
| `NEXT_PUBLIC_ENVIRONMENT` | Environment (development/production) | `development` |
| `NEXT_PUBLIC_ENABLE_BLOCKCHAIN` | Enable blockchain features | `false` |
| `NEXT_PUBLIC_ENABLE_KYC` | Enable KYC features | `true` |

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Follow ESLint rules
- Use Tailwind CSS for styling
- Keep components small and focused
- Write self-documenting code with clear variable names

### Component Structure

```typescript
// Example component structure
import { ComponentProps } from '@/types'

export default function MyComponent({ prop1, prop2 }: ComponentProps) {
  // Component logic here
  return (
    <div className="container">
      {/* JSX here */}
    </div>
  )
}
```

### API Integration

Use the pre-configured Axios instance from `src/lib/api.ts`:

```typescript
import api from '@/lib/api'

// Make API calls
const response = await api.get('/endpoint')
const data = await api.post('/endpoint', { body })
```

## Key Features Implementation Status

- [x] Project structure setup
- [x] Authentication pages (placeholder)
- [x] Dashboard page (placeholder)
- [x] Transfer page (placeholder)
- [x] API client configuration
- [x] Type definitions
- [x] Utility functions
- [ ] Complete authentication flow
- [ ] Transfer functionality
- [ ] Transaction history
- [ ] KYC verification
- [ ] Blockchain integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Team

**DiasporaFlow** - IDDA Hackathon 2025

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built for IDDA Hackathon 2025
- Powered by Next.js, TypeScript, and Tailwind CSS
- Inspired by the need for efficient cross-border payments

## Support

For support, please contact the DiasporaFlow team or open an issue in the repository.

---

Made with ❤️ by DiasporaFlow
