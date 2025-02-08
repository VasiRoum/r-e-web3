# PropGoldenStar Web Application

PropGoldenStar is a pioneering digital real estate platform that combines immersive AR/VR technologies with secure blockchain-based transactions. This repository contains the web application built with Next.js, Three.js, and Web3 technologies.

## Tech Stack

- **Frontend Framework:** Next.js with App Router
- **Language:** TypeScript
- **3D & AR/VR:**
  - Three.js
  - React Three Fiber
  - A-Frame
  - WebXR API
- **Styling:**
  - Tailwind CSS
  - shadcn/ui components
  - SASS
- **Blockchain:**
  - Web3.js
  - Ethers.js

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/              # Authentication routes
│   ├── dashboard/         # User dashboard routes
│   └── property/          # Property listing and details routes
├── components/            # React components
│   ├── ui/               # UI components (buttons, forms, etc.)
│   ├── 3d/               # Three.js and AR/VR components
│   ├── property/         # Property-related components
│   ├── auth/             # Authentication components
│   └── dashboard/        # Dashboard components
├── lib/                  # Utility functions and shared logic
│   ├── blockchain/       # Blockchain integration
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Helper functions
├── types/                # TypeScript type definitions
└── styles/               # Global styles and SASS files
```

## Getting Started

1. **Prerequisites**
   - Bun.js (latest version)
   - Node.js 18+ (for some dependencies)

2. **Installation**
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd [repository-name]

   # Install dependencies
   bun install

   # Start the development server
   bun dev
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_WEB3_PROVIDER=
   NEXT_PUBLIC_CONTRACT_ADDRESS=
   ```

## Development Guidelines

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, maintainable code
- Follow the project's component structure
- Use shadcn/ui components for consistent UI

## Features

- Immersive AR/VR property tours
- Secure blockchain-based transactions
- User authentication and authorization
- Property listing and management
- Interactive 3D visualization
- Responsive design for all devices

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

[License Type] - see LICENSE.md for details 