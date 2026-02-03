#  EverSoft - Modern Furniture E-Commerce

 A modern e-commerce platform for luxury furniture, built with React and Tailwind CSS.

##  Live Demo
[**View Live Demo**](https://eversoft4.netlify.app/)


##  About
**EverSoft** is a responsive single-page application (SPA) designed to provide a seamless shopping experience for furniture buyers. It features real-time authentication, persistent shopping carts, and a wishlist system, all wrapped in a modern, clean,  aesthetic UI.

##  Key Features

* **Optimized Server-State Management:** Data fetching and caching to minimize network requests and ensure instantaneous filtering.
* **Global State Management:** Centralized data layers to eliminate prop-drilling and maintain consistent state across decoupled components.
* **Mobile-First UI:** Fully responsive interface focusing on mobile optimization and layout stability.
* **Secure Infrastructure:** Secure user sessions and robust role-based data access.
* **Product Details:** Dynamic routing for individual product pages with rich details.

## Tech Stack
* **Frontend:** React (Vite), JavaScript (ES6+), TanStack Query
* **Styling:** Tailwind CSS, DaisyUI, SwiperJS
* **Icons & Motion:** Lucide React, React Icons, Framer Motion
* **Routing:** React Router (v7)
* **Auth:** Firebase 
* **State Management:** React Context API (CartContext, WishlistContext, AuthContext)


## Installation
Follow these steps to run the project locally on your machine.


1.  **Clone the repository**
    ```bash
    git clone https://github.com/kyzercmd/EverSoft.git
    cd EverSoft
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**
    Create a `.env` file in the root directory and add your Firebase config keys:
    ```env
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.com
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    VITE_MEASUREMENT_ID=your_measurement_id
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```


## Project Structure

```bash
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components (Header, Footer, AuthForms)
├── firebase/        # Firebase App initialize
├── helper/          # Helper Components
├── hooks/           # Custom Hooks (Product Fetch, Category Fetch)
├── layouts/         # Layouts (Auth, Cart, Main)
├── pages/           # Page views (Home, Products, Wishlist)
├── providers/       # Context Providers (Auth, Cart, Wishlist)
├── routes/          # All Routes (Login, Products, Home)
├── ui/              # Reusable ui (Product Card)
└── main.jsx         # Entry point
```

## Future Improvements

* Add Payment Gateway integration (Stripe/SSLCommerz).

* Add Admin Dashboard for adding products.

* Own backend REST Api.
