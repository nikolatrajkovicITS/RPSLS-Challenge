# RPSLS Challenge

A web-based implementation of the Rock-Paper-Scissors-Lizard-Spock game, built using the Next.js framework with TypeScript.

## 🚀 Deployed on Vercel

The application is hosted on Vercel. Check it out:
[Live Demo on Vercel](https://rpsls-challenge.vercel.app/)

## 🛠️ Stack

- **Frontend**: Next.js, React, React-Context
- **Backend**: Next.js API routes
- **Styling**: SASS
- **Type Checking**: TypeScript
- **Linting**: ESLint with Prettier
- **Version Control Hooks**: Husky
- **Containerization**: Docker, Docker-Compose
- **Automation**: Makefile
- **CI/CD**: GitHub Actions

## 📌 Prerequisites

Before you begin, ensure you have:

- Node.js (v18.x recommended)
- Yarn package manager
- Docker & Docker Compose

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nikolatrajkovicITS/RPSLS-Challenge.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd rpsls-challenge
   ```

3. **Install Dependencies:**
   ```bash
   yarn install
   ```

4. **Run the development server:**
   ```bash
   yarn dev
   ```

> Access the application at [http://localhost:3000](http://localhost:3000).

### Docker Build

1. **Build the Docker image using the Makefile:**
   ```bash
   make build_docker
   ```

2. **Run the Docker container:**
   ```bash
   make run_docker
   ```

> Once up, visit [http://localhost:3000](http://localhost:3000).

### Full Setup with Makefile

Use the `make all` command for a comprehensive setup:

1. Install dependencies
2. Compile TypeScript
3. Linting
4. Docker image build
5. Run Docker container

**Execute the command:**
```bash
make all
```

> On successful execution, head to [http://localhost:3000](http://localhost:3000).
