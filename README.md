# RemitLink Frontend - Production MVP

> **Connecting Hearts, Bridging Borders, Moving Money**

A modern, production-ready Next.js 14 application for cross-border payments. Built for the **IDDA Hackathon 2025** by the DiasporaFlow team.

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8)](https://tailwindcss.com/)
[![Build](https://img.shields.io/badge/build-passing-brightgreen)](#)

## 🎯 Project Status

**✅ PRODUCTION MVP COMPLETE** - All core features implemented and tested.

### Demo Path (Fully Working)
```
Landing Page → Register → Login → Dashboard → Transfer Wizard → Transactions ✓
```

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/DiasporaFlow/remitlink-frontend.git
cd remitlink-frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✨ Features

### Authentication & Security
- ✅ Registration with full validation
- ✅ Login with JWT token management
- ✅ Protected routes with auto-redirect
- ✅ Password strength validation
- ✅ Remember me functionality
- ✅ Toast notifications

### Dashboard
- ✅ Real-time stats (Balance, Pending, Completed, Total Sent)
- ✅ Recent transactions with status badges
- ✅ Quick actions menu
- ✅ Responsive design
- ✅ Loading skeletons

### Transfer Wizard (2-Step)
- ✅ Live exchange rate calculation
- ✅ Automatic fee calculation (1.5%)
- ✅ Currency conversion preview
- ✅ Recipient selection
- ✅ Review & confirmation
- ✅ Terms acceptance
- ✅ Progress indicator

### Transactions
- ✅ List view with filtering
- ✅ Status badges & colors
- ✅ Date/amount formatting
- ✅ Click-through details

## 🛠️ Tech Stack

**Core**
- Next.js 14.0.4 (App Router)
- TypeScript 5.3.3
- Tailwind CSS 3.4.1

**State & Data**
- Zustand 4.4.7 (state management)
- React Hook Form 7.49.2 (forms)
- Zod 3.22.4 (validation)
- Axios 1.6.2 (API client)
- React Query 5.17.0 (async state)

**UI & Components**
- Radix UI (primitives)
- Lucide React (icons)
- Sonner (notifications)
- class-variance-authority (styling)

## 📂 Project Structure

```
src/
├── app/                      # Pages
│   ├── (auth)/              # Login, Register
│   ├── dashboard/           # Dashboard
│   ├── transfer/            # Transfer wizard
│   └── transactions/        # Transaction list
│
├── components/
│   ├── ui/                  # Base components (Button, Input, Card, etc.)
│   ├── features/            # Feature components (Auth, Dashboard, Transfer)
│   └── shared/              # Shared components (Header, Footer)
│
├── lib/                     # Utilities, constants, validators
├── hooks/                   # Custom React hooks
├── store/                   # Zustand stores
├── services/                # API services
└── types/                   # TypeScript types
```

## 🎨 UI Components (shadcn-style)

All components are fully typed and accessible:

- **Form Controls**: Button, Input, Label, Checkbox, Select
- **Layout**: Card, Dialog, Tabs, Progress
- **Feedback**: Badge, Toast (Sonner)
- **Forms**: Integrated with React Hook Form

## 📜 Scripts

```bash
npm run dev         # Development server
npm run build       # Production build
npm run start       # Production server
npm run lint        # ESLint check
npm run type-check  # TypeScript check
npm run format      # Prettier format
```

## 🔧 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ENVIRONMENT=development
```

## 🏗️ Build Output

```
Route (app)                   Size      First Load JS
├ /                          175 B      88.7 kB
├ /login                     1.21 kB    157 kB
├ /register                  2.71 kB    181 kB
├ /dashboard                 3.42 kB    133 kB
├ /transfer                  6.33 kB    184 kB
└ /transactions              1.44 kB    131 kB

✓ Build completed successfully
```

## 🔐 Authentication Flow

1. User registers → JWT token received
2. Token stored in Zustand (persisted to localStorage)
3. All API requests include `Authorization: Bearer {token}`
4. 401 responses → auto-logout + redirect to login
5. Protected routes check auth state before rendering

## 📊 State Management

**authStore** (Persisted)
- User data, JWT token, auth status

**transferStore** (Session)
- Wizard step, transfer details, rates

## 🎯 Key Features in Detail

### Registration Form
- First/last name, email, phone (optional)
- Password with strength validation
- Country selection with flags
- Terms & conditions checkbox
- Real-time validation with Zod

### Login Form
- Email & password
- Show/hide password toggle
- Remember me checkbox
- Forgot password link (disabled for MVP)
- ASAN Login button (mock)

### Transfer Wizard

**Step 1: Details**
- Amount input
- From/To currency selectors
- Live exchange rate (mocked: 0.92)
- Fee calculation (1.5%)
- Recipient dropdown
- Real-time total calculation

**Step 2: Review**
- Complete summary
- Exchange rate locked
- Important notice
- Terms acceptance required
- Confirm button with loading state

## 🧪 Testing

Build verification:
```bash
npm run build
# ✓ Compiled successfully
# ✓ All pages generated
# ✓ No errors
```

Manual testing:
- [x] All pages load correctly
- [x] Forms validate properly
- [x] State persists across refreshes
- [x] Mobile responsive
- [x] Toast notifications work
- [x] Navigation functions
- [x] Logout clears state

## 🚢 Deployment

### Vercel (Recommended)
1. Connect repository
2. Configure environment variables
3. Deploy automatically

### Manual
```bash
npm run build
npm run start
```

## 🗺️ Roadmap

**Phase 1: MVP** ✅ Complete
- Auth, Dashboard, Transfer, Transactions

**Phase 2: Enhanced** (Future)
- Profile management & KYC
- Recipient management
- Advanced filtering
- Email notifications
- Blockchain integration

**Phase 3: Advanced** (Future)
- Recurring transfers
- Mobile app
- Admin panel
- Analytics

## 👥 Team

**DiasporaFlow** - IDDA Hackathon 2025

## 📄 License

MIT License - See LICENSE file

## 🙏 Acknowledgments

- Next.js team for amazing framework
- shadcn for UI component patterns
- Radix UI for accessible primitives
- IDDA Hackathon 2025 organizers

---

**Made with ❤️ for IDDA Hackathon 2025**

*Last Updated: November 3, 2025*
