# 🛍️ Personal Online Store

A full‑stack e‑commerce application that serves as a personal online store. Users can browse products, manage shopping carts, and complete purchases, while administrators have a dedicated dashboard to manage products, upload images, and oversee the platform.

Product images are securely uploaded to Cloudinary, and all data is handled via backend RESTful APIs, ensuring a scalable, maintainable, and production-ready architecture.

Built with modern technologies and best practices, this project demonstrates clean architecture, role-based access control, API-first development, and realistic business logic.

## 💡 Project Overview

The Personal Online Store is designed to replicate core features found in professional e-commerce platforms:

Browsing catalog of products

User authentication and session-managed shopping cart

Backend APIs serving frontend UI

Persistent database with relational modeling

Clean separation of concerns between client and server

The codebase illustrates how a real production system should be structured — not just a quick demo or tutorial clone.

## ✨ Key Features
### 🔐 Role-Based Access Control & Admin Dashboard

Secure registration and login flows, fully managed by backend APIs.

Clear separation of user roles. Administrators have a dedicated dashboard to manage products, perform CRUD operations, and oversee the platform.

### 🖼️ Cloud-Based Product Management

Admins can upload product images securely to Cloudinary, ensuring scalable and reliable media handling.

### 🛒 Product Catalog & Shopping Experience

Users can browse products through an intuitive, responsive UI, manage their cart, and simulate checkout actions.

### 🔁 API-First Architecture

Frontend communicates exclusively with backend RESTful APIs for all data and state management.

### 📊 Persistent Relational Database

All product, user, and order data is stored in PostgreSQL, ensuring data integrity and reliability.

## 🛠️ Tech Stack
### Backend

- Spring Boot

- Java

- RESTful APIs

- PostgreSQL

- Maven

### Frontend

- React

- TypeScript

- MaterialUI

- CSS

- Vite

## ⚙️ Setup & Installation
### 🧩 Prerequisites

- Java 17+

- Maven

- Node.js ≥ 18

- npm or yarn

- PostgreSQL

### 📌 Backend Setup (Spring Boot)
`cd backend`<br>
`mvn clean install`<br>
- Configure database connection in application.properties
`mvn spring-boot:run`<br>

### 📌 Frontend Setup (React)
`cd frontend`<br>
`npm install`<br>
`npx vite`<br>

Frontend will run on:

http://localhost:3000

And backend API on:

http://localhost:8080

## 🛠️ Future Improvements

- Add payment gateway integration

- Improve order history tracking

- Add unit & integration tests

# 👤 Author

Ioan Robert Scumpu<br>
Software Engineering Master’s Student<br>
Full-Stack Developer Intern @ Technology Reply Romania<br>
