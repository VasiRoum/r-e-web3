# PropGoldenStar App Flow

---

## Page Links

1. **Home Page (`/`)**
   - **Overview:**  
     - Introduction to the platform and its key benefits.
     - Featured properties and quick links to major sections.
     - Navigation menu for accessing property listings, dashboard, and support.

2. **Authentication Pages**
   - **Login (`/login`):**  
     - Secure user login with support for OAuth and two-factor authentication.
   - **Signup (`/signup`):**  
     - Registration form for new users with role selection (buyer, seller/agent, tenant).

3. **Property Listings Page (`/properties`)**
   - **Purpose:**  
     - Display a comprehensive list of available properties.
     - Enable filtering (e.g., by price, location, property type) and sorting (e.g., newest, price low-to-high).
     - Quick view options with basic property information.

4. **Property Detail Page (`/properties/:id`)**
   - **Features:**  
     - Detailed view of a selected property including multimedia content (images, descriptions, key metrics).
     - Links to launch an immersive AR/VR experience.
     - Interactive elements like hotspots for additional property insights.

5. **Immersive AR/VR Experience Page (`/properties/:id/immersive`)**
   - **Modes:**  
     - **3D Interactive Mode:**  
       - Full-screen or modal view enabling users to rotate, zoom, and pan the property model.
     - **AR Mode:**  
       - Allow mobile users to project the property into their real-world environment.
     - **VR Mode:**  
       - Provide a fully immersive walkthrough for users with VR headsets.
   - **Interactions:**  
     - Interactive hotspots that reveal further details when clicked or hovered.

6. **User Dashboard (`/dashboard`)**
   - **Overview:**  
     - Personalized area for users based on their roles:
       - **Buyers:** View saved properties, transaction history, and recent searches.
       - **Sellers/Agents:** Manage property listings, view analytics, and handle inquiries.
       - **Tenants:** Manage lease details, payments, and support requests.
   - **Functionality:**  
     - Notifications, account settings, and quick access to support and transaction histories.

7. **Payment Gateway Page (`/payment`)**
   - **Purpose:**  
     - Process secure transactions with integrated payment gateways.
     - Display transaction summaries, digital receipts, and blockchain verification statuses.

8. **Support & Help Page (`/support`)**
   - **Features:**  
     - FAQ, live chat support, and contact forms.
     - Guides and tutorials for using various features of the platform.

---

## Feature Bounds

### In-Scope Features

- **User Authentication & Profile Management:**
  - Secure registration and login.
  - Role-based access control for buyers, sellers/agents, and tenants.
  - Management of personal profiles and account settings.

- **Property Management:**
  - Display and filter comprehensive property listings.
  - Detailed property pages with multimedia content and interactive AR/VR integrations.
  - Support for property staging and interactive hotspots in 3D tours.

- **Immersive AR/VR Experiences:**
  - Integration of high-quality 3D models using Three.js, A-Frame, and WebXR.
  - Support for multiple immersive modes (3D interactive, AR, VR).
  - Asynchronous asset loading and performance optimizations for smooth user experience.

- **Transaction Processing:**
  - Secure payment gateway integration (e.g., Stripe, PayPal).
  - Blockchain-based smart contract functionality for secure, immutable transactions.
  - Real-time updates and digital receipt generation within the payment flow.

- **Responsive Design & Performance:**
  - Optimized UI/UX for desktops, tablets, and mobile devices.
  - Use of CDN and caching strategies for rapid asset delivery.

- **User Dashboard & Analytics:**
  - Role-specific dashboards with tools for managing properties and transactions.
  - Basic analytics and reporting features for sellers/agents and tenants.

### Out-of-Scope Features

- **Native Mobile Applications:**
  - The focus is solely on a responsive web-based platform; native iOS/Android apps are not included.

- **Advanced AI/ML Integrations:**
  - Complex machine learning algorithms for personalized recommendations and analytics are not part of the current scope.

- **IoT Integrations:**
  - Integration with smart home devices or IoT platforms is excluded at this stage.

- **Extensive Third-Party AR/VR Content:**
  - While proprietary AR/VR assets are supported, extensive integrations with third-party content not pre-approved are out-of-scope.

- **Complex Real-Time Customizations:**
  - Real-time modifications of property models beyond basic staging and interactive controls are not included.

---

This document outlines the core application flow and sets clear boundaries for the features to be implemented in the PropGoldenStar platform. It is designed to serve as a guide for both the development and design teams, ensuring clarity on how users will navigate the site and what functionalities are included in this phase of the project.
