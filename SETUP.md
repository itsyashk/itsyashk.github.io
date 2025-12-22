# Setup Instructions

## 1. Install Node.js
You need Node.js to run this project.
- **Download**: [https://nodejs.org/](https://nodejs.org/) (LTS Version recommended)
- **Terminal**: Run `node -v` and `npm -v` to verify installation.

## 2. Install Dependencies
Open your terminal in this directory and run:

```bash
npm install
```

## 3. Run Locally
To preview the website:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 4. Build for Production (Static Export)
To see exactly what will be deployed to GitHub Pages:

```bash
npm run build
npx serve@latest out
```
