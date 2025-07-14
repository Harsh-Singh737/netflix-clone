## 🌐 Live Demo

[🔗 View Live Website]  (https://netflix-clone-git-main-harsh-singhs-projects-776d86c7.vercel.app/login)


# 🎬 Netflix Clone

A simple front-end clone of the Netflix website built using **HTML**, **CSS**, and **JavaScript**, with real movie data fetched from **TMDB API** and user authentication using **Firebase**.

This project is for learning purposes and gives you a real feel of how popular streaming UIs work using modern web technologies.

---

## 📌 Features

- 🔐 Firebase Email/Password Authentication
- 🎞️ Real-time movie data from TMDB API
- 📺 Clickable movie posters with trailer page
- 🖥️ Responsive design for all devices
- 🔍 Search bar UI
- 🧭 Navbar with logo, icons, and user profile

---

## 🛠️ Technologies Used

- **HTML5** – Page structure
- **CSS3** – Styling and responsiveness
- **JavaScript** – DOM manipulation and API logic
- **Firebase** – Authentication (Email/Password)
- **TMDB API** – Fetching trending/popular movies

---

## ▶️ How to Use the Netflix Clone

Follow these steps to run the project on your local machine:

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone

💻 2. Open the Project
1. Option A: Using Live Server (Recommended)
2. Open the project folder in VS Code
3. Right-click on index.html → Open with Live Server

Option B: Manually
Open index.html directly in your browser

🔑 3. Set Up Firebase Authentication
1. Go to Firebase Console
2. Create a new project
3. Enable Email/Password Authentication
4. In the Firebase Project Settings, find your config object
5. Paste it into firebase.js like this:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

4. Then finally run the command on terminal "npm run dev"
