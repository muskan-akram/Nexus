# Nexus – Investor & Entrepreneur Collaboration Platform

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://nexusvercel.vercel.app/login)
[![GitHub stars](https://img.shields.io/github/stars/muskan-akram/Nexus.svg)](https://github.com/muskan-akram/Nexus/stargazers)
[![Last Updated](https://img.shields.io/github/last-commit/muskan-akram/Nexus)](https://github.com/muskan-akram/Nexus/commits/main)

Nexus is a platform designed to facilitate seamless collaboration between investors and entrepreneurs. This forked version includes **advanced frontend enhancements** developed during the **Advanced Frontend Internship**, focusing on improving user interactions, real-time simulation, and platform usability.

---

## 🚀 Enhanced Features Added

### **Week 1 – Meetings & Scheduling**
* **FullCalendar Integration:** Interactive calendar for managing high-stakes meetings.
* **Slot Management:** Ability to add or modify availability slots.
* **RSVP System:** Functionality to accept or decline meeting requests.
* **Dashboard Sync:** Confirmed meetings automatically populate the user dashboard.

### **Week 2 – Video Calling & Document Management**
* **Video Call Interface:** * Start/End meeting controls.
    * Audio/Video toggle functionality.
    * Camera mirroring for realistic demo simulation.
* **Document Chamber:** * Secure upload and preview for PDF/Docs.
    * **E-signature Mockup:** Integrated signature pad for digital signing.
    * **Status Tracking:** Labels for *Draft*, *In Review*, and *Signed*.

### **Week 3 – Wallet & Transactions**
* **Wallet UI:** Modern interface for managing venture capital.
    * Simulated Deposit, Withdraw, and Transfer actions.
    * Dynamic wallet balance display.
* **Transaction History:** Detailed table tracking all simulated financial activity.
* **Role-Based Dashboards:** Distinct layouts and permissions for Investors vs. Entrepreneurs.

---

## 📸 Screenshots

> **Note:** Include actual screenshots in your `/assets` or `/public` folder and link them here for a professional look.

* *Calendar/Meetings Page*
* *Video Call Page*
* *Document Chamber & E-Signature*
* *Wallet & Transaction History*

---

## 🛠️ Getting Started (Local Setup)

Follow these steps to run the project locally for development and testing.

### **Prerequisites**
* **Node.js** v18+
* **npm** or **yarn**
* **Git**

### **Installation Steps**

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/muskan-akram/Nexus.git](https://github.com/muskan-akram/Nexus.git)
    cd Nexus
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the Development Server**
    ```bash
    npm start
    # or
    yarn start
    ```
    The app will be accessible at `http://localhost:3000`.

4.  **Build for Production**
    ```bash
    npm run build
    ```
    Production-ready files will be generated in the `build/` folder.

---

## 💡 Usage

* **Login:** Use existing mock accounts or seeded data to explore different roles.
* **Navigation:** The sidebar adapts dynamically based on whether you are logged in as an **Investor** or **Entrepreneur**.
* **Documents:** Upload a file and try the **E-signature** feature to see the status change to *Signed*.
* **Wallet:** Test the flow by "depositing" funds and checking the transaction log.

---

## 🌐 Deployment

This project is deployed live via **Vercel**:
👉 [**Nexus Live Demo**](https://nexusvercel.vercel.app/login)

*Every push to the main branch of the GitHub repository triggers an automatic deployment to Vercel.*

---

## 🧪 Tech Stack

* **Frontend:** React, TypeScript, Tailwind CSS
* **Components:** FullCalendar, react-signature-canvas
* **Routing:** React Router v6
* **Icons:** Lucide React

---

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is forked for internship and demonstration purposes. All rights remain with the original Nexus project owners.
