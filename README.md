# 🏥 MediCare.pk - DevOps Assignment

A simple responsive healthcare website developed using **HTML, CSS, and JavaScript** as part of a **DevOps Assignment**. This project demonstrates Git version control, GitHub collaboration, GitHub Actions CI/CD pipelines, and branch management.

---

## 📌 Project Overview

MediCare.pk is a frontend healthcare website containing a landing page with essential healthcare information. The repository is also configured with automated **Continuous Integration (CI)** and **Continuous Deployment (CD)** workflows using **GitHub Actions**.

---

## ✨ Website Features

* Responsive navigation bar
* Hero section
* Healthcare services section
* Doctors page
* Services page
* Professional footer
* Responsive design for desktop and mobile devices

---

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Git
* GitHub
* GitHub Actions

---

## 📁 Project Structure

```text
medicare-website/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── index.html
├── doctors.html
├── services.html
├── README.md
└── .gitignore
```

---

## 🚀 Git Workflow

### Main Branches

* **main** – Production-ready code
* **develop** – Development branch
* **staging** – Testing branch

### Feature Branches

* `feature/doctors-page`
* `feature/services-page`

Feature branches are merged into the **develop** branch through Pull Requests before being merged into **main**.

---

## 🔀 Git Commands Used

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

git status
git diff
git add .
git commit -m "style: updated color scheme"
git log --oneline
```

---

## ⚙️ Continuous Integration (CI)

The repository includes a GitHub Actions CI workflow that automatically runs on every push and pull request.

### CI Checks

* ✅ Verifies `index.html` exists
* ✅ Validates HTML structure
* ✅ Checks required project files
* ✅ Prevents committing sensitive `.env` files

Workflow File:

```text
.github/workflows/ci.yml
```

---

## 🚀 Continuous Deployment (CD)

A deployment workflow automatically runs after successful verification on the **main** branch.

The deployment pipeline:

* Performs CI verification
* Generates deployment report
* Displays deployment status
* Confirms successful deployment

Workflow File:

```text
.github/workflows/deploy.yml
```

---

## 🧪 Pipeline Testing

The CI pipeline was tested by intentionally introducing an error.

### Failure Test

* Removed `<!DOCTYPE html>` from `index.html`
* GitHub Actions failed as expected

### Fix Test

* Restored `<!DOCTYPE html>`
* Pipeline executed successfully

---

## 📂 Branch Strategy

```text
main
│
├── develop
│     ├── feature/doctors-page
│     └── feature/services-page
│
└── staging
```

---

## ▶️ Running the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/medicare-website.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

Or use the **Live Server** extension in Visual Studio Code.

---

## 📸 Assignment Deliverables

This repository includes:

* Repository setup
* Git commit history
* Branch management
* Pull Requests
* GitHub Actions CI Pipeline
* GitHub Actions CD Pipeline
* Doctors page
* Services page

Screenshots required by the assignment should be included in the project submission.

---

## 📄 License

This project was created for educational purposes as part of a DevOps laboratory assignment.

---

## 👨‍💻 Author

Fatima

DevOps Assignment – MediCare.pk Website
