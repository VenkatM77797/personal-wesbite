
# Minimal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Lucide React.
cdsmk
cncnweim
inekmkmm
The portfolio highlights professional experience, capabilities, education, certifications, projects, and contact information through a clean tab-based interface with light and dark themes.

## Features

- Responsive design for mobile, tablet, and desktop
- Light and dark theme support
- Theme preference saved in local storage
- Animated tab navigation
- About section
- Professional experience timeline
- Expandable experience details
- Skills and capabilities section
- Education and certifications
- Project case studies
- Contact section
- Smooth transitions and hover effects
- Custom gradient branding
- Custom SVG favicon
- Accessible buttons and navigation

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- CSS variables for theme management

## Project Structure

```text
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── portrait.jpg
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
````

## Getting Started

### Prerequisites

Make sure Node.js and npm are installed.

Recommended versions:

```bash
node --version
npm --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-portfolio-repository.git
```

Open the project directory:

```bash
cd your-portfolio-repository
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

Usually:

```text
http://localhost:5173
```

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Customization

### Personal Information

Update the following information inside `src/App.tsx`:

* Name
* Professional title
* Email address
* Phone number
* Location
* GitHub URL
* LinkedIn URL
* About section
* Work experience
* Capabilities
* Education
* Certifications
* Projects

### Profile Image

Replace:

```text
src/assets/portrait.jpg
```

with your own image.

Keep the same filename or update the import inside `src/App.tsx`:

```tsx
import portrait from "./assets/portrait.jpg";
```

### Social Links

Update the placeholder links inside `src/App.tsx`:

```tsx
href="https://github.com/your-username"
```

```tsx
href="https://www.linkedin.com/in/your-profile"
```

```tsx
href="mailto:your-email@example.com"
```

### Theme Colors

Theme variables are defined inside:

```text
src/styles.css
```

Light-theme variables are available under:

```css
:root {
  /* Light theme colors */
}
```

Dark-theme variables are available under:

```css
html.dark {
  /* Dark theme colors */
}
```

The main brand gradient is controlled by:

```css
--gradient-brand: linear-gradient(
  135deg,
  #6576ff,
  #20c9df
);
```

### Browser Tab Icon

The favicon is located at:

```text
public/favicon.svg
```

It is connected inside `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Theme System

The website supports light and dark modes.

The selected theme is stored in the browser using:

```text
portfolio-theme
```

When no saved preference exists, the website uses the operating system theme preference.

## Responsive Breakpoints

The interface is designed for:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

Tailwind responsive prefixes used in the project include:

```text
sm:
md:
lg:
```

## Deployment

### Vercel

Create a new project in Vercel and connect the GitHub repository.

Use the following settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

### Netlify

Use the following settings:

```text
Build Command: npm run build
Publish Directory: dist
```

### GitHub Pages

Install the GitHub Pages package:

```bash
npm install --save-dev gh-pages
```

Add the following scripts to `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy the project:

```bash
npm run deploy
```

For GitHub Pages, also configure the Vite base path inside `vite.config.ts` when required:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/your-repository-name/",
});
```

## Production Build

Generate the optimized production files:

```bash
npm run build
```

The generated files will be available inside:

```text
dist/
```

## Accessibility

The project includes:

* Semantic HTML elements
* Accessible navigation labels
* Button labels
* Theme-toggle labels
* Keyboard-accessible controls
* Responsive text sizing
* Sufficient color contrast
* Alternative text for the profile image

## License

This project is available for personal portfolio use.

## Author

**Venkat Mandarapu**

* GitHub: https://venkatm77797.github.io/
* LinkedIn: https://www.linkedin.com/in/venkat-mandarapu/
* Email: mailto:venkat77797@gmail.com]

```
```
