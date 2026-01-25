# Portfolio Deployment & Maintenance Guide

This guide will help you manage, update, and deploy your portfolio website.

## 🛠️ Prerequisites

Before you start, ensure you have the following installed:
- **Node.js**: [Download here](https://nodejs.org/) (Version 16+ recommended).
- **Git**: [Download here](https://git-scm.com/).
- **VS Code**: Recommended editor.

## 🚀 Getting Started

1.  **Clone the Repository** (if not already open):
    ```bash
    git clone https://github.com/SiddeshUbalePersonal/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Locally**:
    Starts a local development server at `http://localhost:5173/`.
    ```bash
    npm run dev
    ```

## 📝 How to Update Content

### 1. Updating Text & Data
Most content is stored in `src/data.json`. You can edit this file to update:
- **Profile Info**: Name, title, summary, social links.
- **Skills**: Add or remove items from the skills list.
- **Experience**: Add new jobs or update existing ones.
- **Projects**: Add new projects with descriptions, tech stacks, and responsibilities.

### 2. Updating Images
- Place new images in the `public/images/` folder.
- Reference them in your components or `data.json` as `./images/filename.jpg`.
- **Profile Pictures**: 
    - Hero Image: `public/images/hero-profile.jpg`
    - About Image: `public/images/about-profile.jpg`
    - *To replace them, simply overwrite these files with new images of the same name.*

### 3. Modifying Code
- **Pages/Sections**: Located in `src/components/`.
- **Styles**: `src/index.css` (Tailwind directives) or inline Tailwind classes.
- **Global Settings**: `src/App.jsx` (Routing, Background, Layout).

## 🚢 How to Deploy

The site is hosted on **GitHub Pages**. Deploying is automated via a script.

1.  **Commit your changes**:
    ```bash
    git add .
    git commit -m "Description of changes"
    ```

2.  **Run the Deploy Script**:
    This command builds the project and pushes it to the `gh-pages` branch.
    ```bash
    npm run deploy
    ```

3.  **Verify**:
    Visit [https://SiddeshUbalePersonal.github.io/portfolio/](https://SiddeshUbalePersonal.github.io/portfolio/).
    *Note: Updates may take 1-5 minutes to appear.*

## ⚠️ Troubleshooting

- **"Command not found"**: Ensure Node.js is installed and added to your PATH.
- **Changes not showing**: Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R) to clear the cache.
- **Deployment fails**: Check your internet connection and ensure you have write permissions to the GitHub repository.
