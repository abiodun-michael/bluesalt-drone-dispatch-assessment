# 🚀 Drone Dispatch API

## 📌 Project Overview

The **Drone Dispatch API** is a RESTful service designed to manage a fleet of drones for medical deliveries. It enables clients to register drones, load them with medications, check their battery levels, and monitor available drones for deliveries.

## 🛠️ Tech Stack

- **Language:** Node.js (with TypeScript)
- **Framework:** NestJS
- **Database:** SQLite (for local development, can be replaced with PostgreSQL, MySQL, etc.)
- **ORM:** TypeORM
- **Validation:** Class-validator
- **Task Scheduling:** NestJS Scheduler (for periodic battery checks)

## 📑 Features

- Register a new drone.
- Load a drone with medications.
- Retrieve loaded medications for a specific drone.
- Check available drones for loading.
- Check drone battery levels.
- Periodic task to monitor battery levels and log history.

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/abiodun-michael/bluesalt-drone-dispatch-assessment.git
cd drone-dispatch
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the project root and configure it:

```env
PORT=3000
DATABASE_URL=sqlite://./drone.db
```

### 4️⃣ **Run Migrations** (if using SQLite/PostgreSQL)

```sh
npm run typeorm migration:run
```

### 5️⃣ **Start the Application**

```sh
npm run start:dev  # Development mode
```

The API will be accessible at `http://localhost:3000`

## 🔗 API Endpoints

| Method | Endpoint                  | Description                        |
| ------ | ------------------------- | ---------------------------------- |
| POST   | `/drones/register`        | Register a new drone               |
| POST   | `/drones/:id/load`        | Load a drone with medication       |
| GET    | `/drones/:id/medications` | Get loaded medications for a drone |
| GET    | `/drones/available`       | Get available drones for loading   |
| GET    | `/drones/:id/battery`     | Get battery level of a drone       |

## 🛠️ Running Tests

```sh
npm run test
```

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

🚀 **Developed with NestJS & TypeScript** | Happy Coding! 🎯
