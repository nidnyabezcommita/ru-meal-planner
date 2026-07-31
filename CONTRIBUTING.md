# Contributing to ARPA: Meal Planner

Thank you for your interest in contributing to ARPA: Meal Planner! We welcome contributions from everyone. Following these guidelines helps ensure a smooth contribution process for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Local Development Setup](#local-development-setup)
- [Development Guidelines](#development-guidelines)
  - [Git Commit Guidelines](#git-commit-guidelines)
  - [Coding Standards](#coding-standards)
- [Questions & Support](#questions--support)

---

## Code of Conduct

This project and everyone participating in it is governed by the [ARPA Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [aselekoglu@gmail.com].

---

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates.

When filing a bug report, please use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md) and include:
- A clear and descriptive title
- Steps to reproduce the behavior
- Expected vs. actual results
- Screenshots or error logs if applicable
- Your environment details (browser, OS, Node.js version)

### Suggesting Enhancements

Feature requests and enhancement ideas are welcome! 

When submitting a feature suggestion, please use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md) and include:
- A clear, descriptive title
- A detailed explanation of the proposed feature
- The problem or use case it solves
- Any alternative solutions or ideas considered

### Pull Requests

1. **Fork the Repository**: Create your own fork of `aselekoglu/arpa-meal-planner`.
2. **Create a Feature Branch**: Branch off `main` (`git checkout -b feature/amazing-feature` or `fix/bug-fix`).
3. **Make Your Changes**: Write clean, maintainable code with tests or verification where appropriate.
4. **Lint and Type Check**: Run `npm run lint` locally to check for TypeScript errors.
5. **Commit Your Changes**: Follow clear commit message conventions.
6. **Push to Your Fork**: `git push origin feature/amazing-feature`.
7. **Open a Pull Request**: Submit your PR targeting `main` using the [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md).

---

## Local Development Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aselekoglu/arpa-meal-planner.git
   cd arpa-meal-planner
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and fill in any necessary credentials:
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://127.0.0.1:3000` in your browser.

---

## Development Guidelines

### Git Commit Guidelines

Write clear, imperative commit messages. Format:
```text
<type>: <short description>

[optional body]
```
Examples of `<type>`:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect code logic (formatting, missing semi-colons, etc.)
- `refactor`: Code changes that neither fix bugs nor add features
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build processes or auxiliary tools

### Coding Standards

- **TypeScript**: Ensure strict typing and avoid `any` whenever possible.
- **Components**: Follow modern React patterns (functional components, hooks).
- **Styling**: Maintain UI consistency with Tailwind CSS / CSS design system tokens.
- **Cleanliness**: Run `npm run lint` before committing to verify TypeScript compliance.

---

## Questions & Support

If you have questions or need assistance, feel free to open a discussion or reach out to the project maintainers.
