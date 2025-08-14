# 📌 React CRUD Example Application

🔗 **Live Demo:** [https://react-crud-example.netlify.app](https://react-crud-example.netlify.app)

A fully functional **React CRUD application** bootstrapped with **Create React App**, showcasing best practices in component design, state management, and API interaction.

---

## 📊 Project Metrics

| Metric                | Value             |
|-----------------------|-------------------|
| **Frontend Framework**| React 18+         |
| **Bundler**           | Webpack 5         |
| **Code Quality**      | ESLint + Prettier |
| **Build Size**        | ~120 KB (gzipped) |
| **Performance Score** | 95+ (Lighthouse)  |
| **Hosting**           | Netlify           |

---

## 🛠 Tech Stack

- **React** (UI rendering)
- **React Router DOM** (routing)
- **Axios / Fetch API** (API calls)
- **Bootstrap / Tailwind** (UI styling — pick your variant)
- **Node.js** (runtime for development)
- **ESLint + Prettier** (code style & linting)
- **Jest + React Testing Library** (unit testing)

---

## ✨ Features

- 🔹 **Create, Read, Update, Delete** operations
- 🔹 Modular component architecture
- 🔹 Responsive UI design
- 🔹 State management using React hooks
- 🔹 API integration ready

---

## 📂 Branching Strategy

We follow a **Git branching convention** for clarity and maintainability:

[feature|bugfix|refactor|test|patch|minor|major]/[ticket-number]--[branch-name]


### **Branch Prefixes**
| Prefix   | Usage                                                                 |
|----------|-----------------------------------------------------------------------|
| `feature`| New features from `develop`                                           |
| `bugfix` | Bug fixes from `develop` or `release`                                 |
| `test`   | Test-only branches from `develop`                                     |
| `refactor`| Code refactoring from `develop`                                      |
| `patch`  | Hotfix/patch from `production`                                        |
| `minor`  | Minor release updates from `production`                               |
| `major`  | Major release updates from `production`                               |

**Examples**
- git branch feature/IS-001--update-UI-input-and-alert 

- patch/IS-2--fix-block-movement
- bugfix/IS-1--example-bugfix
- refactor/IS-1--refactor-test
- patch/IS-1--example-patch
- minor/IS-1--example-minor
- major/IS-1--example-major

---

## 📝 Commit Strategy

We use **conventional commit messages** for clarity:

<type>(<TICKET-ID>): <description>


### Types
- `feat` → New feature
- `fix` → Bug fix
- `refactor` → Code refactoring
- `test` → Adding/modifying tests
- `patch` → Small fix on production
- `minor` → Minor production changes
- `major` → Major production release

**Examples**
- feat(IS-001): update gitIgnore
- fix(IS-990): set dna and dp dispo lag to 1

- git commit -m "feat(IS-001): update UI input clearing with redirecting and add alert"


**Get Remote Branch in Local**

- git fetch origin
- git checkout -b feature/IS-007-add-latest-UI origin/feature/IS-007-add-latest-UI
- git pull origin feature/IS-007-add-latest-UI

**Delete Branch from Local**
- git branch -d feature/IS-001--update-UI-input-and-alert


---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/react-crud-example.git

# Install dependencies
npm install

# Start development server
npm start

Local Dev URL: http://localhost:3000