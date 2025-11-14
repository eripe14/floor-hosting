# Floor Hosting

Floor Hosting is a responsive, feature-rich landing page for a modern cloud platform. It demonstrates a sleek, professional design with smooth animations, built using Next.js, TypeScript, and Tailwind CSS. The project showcases a fictional hosting service designed for developers, offering features like global edge networks, automatic scaling, and high-reliability infrastructure.

## Key Features

*   **Modern UI/UX:** A clean, dark-themed interface with professionally designed components and animated elements using Framer Motion and `react-tsparticles`.
*   **Responsive Design:** Fully responsive layout that adapts to various screen sizes, from mobile to desktop.
*   **Component-Based Architecture:** Built with reusable React components for easy maintenance and scalability. Core components include Hero, Features, Plans, Stats, Testimonials, and FAQ sections.
*   **Multi-Page Structure:** Includes several pre-built pages:
    *   **Home:** The main landing page showcasing all key features.
    *   **About:** Describes the company's story and philosophy.
    *   **Services:** Details the types of applications that can be deployed.
    *   **FAQ:** An interactive, collapsible FAQ section.
    *   **Contact:** A complete contact form for user inquiries.
*   **Performance Optimized:** Leverages Next.js for server-side rendering and static site generation, ensuring fast load times.

## Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) 16
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4
*   **Animation:** [Framer Motion](https://www.framer.com/motion/) & [tsParticles](https://particles.js.org/)
*   **Linting:** [ESLint](https://eslint.org/)

## Project Structure

The project follows a standard Next.js App Router structure.

```
/src
├── app/                  # Main application routes (pages)
│   ├── about/
│   ├── contact/
│   ├── faq/
│   └── services/
├── components/           # Reusable application components
│   ├── ui/               # Generic UI components (Navbar, Footer, etc.)
│   ├── CallToAction.tsx
│   ├── FaqSection.tsx
│   ├── FeaturesSection.tsx
│   ├── Hero.tsx
│   └── ...
└── public/               # Static assets
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later recommended)
*   npm, yarn, pnpm, or bun

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/eripe14/floor-hosting.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd floor-hosting
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

In the project directory, you can run the following scripts:

*   `npm run dev`: Starts the application in development mode.
*   `npm run build`: Creates an optimized production build of the application.
*   `npm run start`: Starts the production server (requires a build first).
*   `npm run lint`: Runs the ESLint linter to check for code quality issues.
