# TestCLIX Docs

Welcome to the **TestCLIX Docs** repository! This project hosts the documentation for TestCLIX, providing comprehensive guides, references, and tutorials for users and contributors.

## About TestCLIX Docs

TestCLIX Docs is designed to help you get the most out of TestCLIX. Whether you are getting started or looking for advanced configuration options, you'll find the information here.

## How to Run Locally

To run the documentation site locally on your machine, follow these steps:

1. **Clone the repository** (if you haven't already):

    ```bash
    git clone <repository-url>
    cd testclix-docs
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run dev
    ```

    The site will be available at `http://localhost:4321/`.

## How to Contribute

We welcome contributions to improve TestCLIX documentation!

1. **Navigate to the documentation content**:
    All documentation pages are located in `src/content/docs/`.

2. **Create or edit a file**:
    - To add a new page, create a `.md` or `.mdx` file in the appropriate directory.
    - To edit an existing page, simply modify the markdown content.

3. **Preview your changes**:
    Run `npm run dev` to see your changes in real-time.

4. **Submit a Pull Request**:
    Once you are happy with your changes, commit them and push to a new branch, then open a Pull Request.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ⚡ Powered By

This documentation is proudly built with [Astro Starlight](https://starlight.astro.build).
