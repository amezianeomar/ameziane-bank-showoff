# 🏛️ Ameziane Bank - Showcase Repository

<div align="center">
  <img src="assets/ameziane_logo.png" alt="Ameziane Crest" width="150"/>
  <h3>Generational Wealth, Institutionally Managed.</h3>
</div>

---

## 📌 Overview

This is a **frontend-only showcase repository** designed specifically to demonstrate the architecture, features, and premium design aesthetic of the **Ameziane for Savings and Investments** banking system. 

The original project is a full-stack financial application built natively with PHP, MySQL, and secure server-side session management. Because hosting a full LAMP/LEMP stack for portfolio review can be cumbersome, this repository faithfully recreates the landing page and technical overview using pure HTML/CSS/JS.

It provides a **96% visual match** to the actual locally-hosted application and serves to highlight the system's capabilities for technical recruiters and engineering managers.

---

## 🛠️ The Real Tech Stack (Backend Project)

While this showcase repository is built with HTML/CSS/JS, the **actual Ameziane banking application** is engineered using raw, dependency-free technologies to prioritize granular control and security:

- **Backend:** PHP 8.x
- **Database:** MySQL
- **Data Access:** Native PDO (PHP Data Objects)
- **Security:** Native Password Hashing (`password_hash`), CSRF/XSS Protections, Strict Role-Based Access Control (RBAC)
- **Frontend Architecture:** Semantic HTML5, Vanilla CSS (No large frameworks), Vanilla ES6 JavaScript, Bootstrap 5 (for Grid structural layout only)
- **Deployment Strategy:** LAMP/LEMP Stack Architecture

---

## 🚀 Core Banking System Features Highlights

The actual banking logic encompasses the following critical features:

### 🔒 1. Secure Authentication & RBAC
- Complete separation of concerns between the **Client Portal** and the **Administrative Access Terminal**.
- Secure session hijacking prevention and native password hashing algorithms.

### 💸 2. Transactional Integrity (ACID Compliance)
- Deeply engineered transfer logic that adheres to strict database ACID compliance.
- Complete prevention of race conditions, zero-balance exploits, and unauthorized fund routing.

### 📜 3. Immutable Audit Logging
- A sophisticated, permanent ledger mapping every administrative and financial action across the platform.
- IP tracking, timestamping, and device info logging for all critical state changes.

### 📊 4. Admin Observatory Dashboard
- Centralized administrative panel granting top-level views into system-wide liquidity, total active accounts, and real-time transaction monitoring.

### 🔗 5. Dynamic JSON Receipt Generation
- Transactions are not just recorded but serialized into richly detailed **JSON metadata objects**. This allows the MySQL relational database to emulate scalable NoSQL query features for complex transaction histories.

### 💎 6. Premium Institutional Aesthetic
- A completely bespoke CSS architecture built around a dark navy, gold-accented color palette.
- Glassmorphic interfaces, refined typography (`Inter` & `Playfair Display`), and meticulous spacing to assure clients they are interacting with an elite, Tier-1 institution.

---

## 👨‍💻 Author & Developer

**Omar Ameziane**
- GitHub: [@amezianeomar](https://github.com/amezianeomar)

If you are a recruiter or an engineering manager reviewing this showcase, please feel free to reach out to me to discuss the deeper architectural decisions and security patterns implemented in the actual PHP/MySQL backend repository!
