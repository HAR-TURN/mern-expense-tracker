```markdown
# 💰 MERN Expense Tracker

A full-stack **Expense Tracker Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
It allows users to **register, log in, add, view, and delete expenses** securely with JWT authentication.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT Authentication)
- ➕ Add New Expenses (title, amount, category, date)
- 📋 View Expenses (per user)
- ❌ Delete Expenses
- 🎨 Modern UI using Tailwind CSS
- ⚡ Axios-based API calls
- 🧠 Backend REST APIs with Express.js & MongoDB
- 🧾 Environment variable support using `.env`

---

## 🏗️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React.js, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JSON Web Token (JWT), bcrypt.js |
| **Deployment (optional)** | Render / Railway (Backend), Vercel / Netlify (Frontend) |

---

## 🗂️ Folder Structure

```

expense-tracker/
├── backend/                # Express + MongoDB backend
│   ├── models/             # Mongoose models (User, Expense)
│   ├── routes/             # API routes for users & expenses
│   ├── middleware/         # JWT authentication middleware
│   ├── index.js            # Server entry file
│   └── .env                # Environment variables (not uploaded)
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Login, Register, Dashboard
│   │   └── App.js
│   └── public/
│
├── .gitignore
└── README.md

````

---

## ⚙️ Environment Setup

Create a `.env` file inside the **backend** folder:

```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?appName=Cluster0
JWT_SECRET=mysecretkey1234
PORT=5000
````

---

## 🖥️ Running the Project Locally

### 1️⃣ Start the Backend

```bash
cd backend
npm install
npm run dev
```

Server runs on → **[http://localhost:5000](http://localhost:5000)**

---

### 2️⃣ Start the Frontend

```bash
cd frontend
npm install
npm start
```

App runs on → **[http://localhost:3000](http://localhost:3000)**

---

## 🧪 API Endpoints (Backend)

| Method   | Endpoint              | Description             | Auth Required |
| :------- | :-------------------- | :---------------------- | :------------ |
| `POST`   | `/api/users/register` | Register a new user     | ❌             |
| `POST`   | `/api/users/login`    | Login and get JWT token | ❌             |
| `POST`   | `/api/expenses`       | Add new expense         | ✅             |
| `GET`    | `/api/expenses`       | Get user expenses       | ✅             |
| `DELETE` | `/api/expenses/:id`   | Delete an expense       | ✅             |

---

## 🧰 Dependencies

### Backend

```
express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv, nodemon
```

### Frontend

```
react, react-router-dom, axios, tailwindcss
```

---

## 🪶 Tailwind CSS Setup (CDN method)

If using Tailwind via CDN, add this inside your `frontend/public/index.html` `<head>` tag:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Then you can style directly:

```jsx
<div className="bg-gray-800 text-white p-4 rounded-lg">
  Expense Tracker Dashboard
</div>
```

---

## 🧾 Example Usage Flow

1. Visit `/register` → Create an account.
2. Login → Get redirected to Dashboard.
3. Add expenses using the form.
4. View all your expenses in a table.
5. Delete any record instantly.
6. Logout → Clears JWT token.

---

## 🧑‍💻 Author

**Hardik Pareek**
💼 MERN Stack Developer | 🌐 [GitHub Profile](https://github.com/HAR-TURN)

---

## ⭐ Future Improvements

* Edit/update expenses
* Filter by date/category
* Monthly analytics chart
* Dark mode support

---

## 📝 License

This project is **open-source** and available under the [MIT License](LICENSE).

```

---



```
