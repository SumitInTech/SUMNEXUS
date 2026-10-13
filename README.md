<div align="center">
  <img src="/SumNexusLogo.png" alt="SUMNEXUS Logo" width="80" />
  <h1>SUMNEXUS - Full-Stack MERN E-Commerce App</h1>
  <p>A professionally engineered, full-stack E-commerce platform built with React (CRA), Redux Toolkit, Express.js, and MongoDB Atlas.</p>
  <p><strong>Developed by Sumit Kumar</strong></p>
</div>

---

## Features

### User Features
- **Shop Page** — Browse 15+ products across 8 categories with skeleton loading
- **Product Detail** — Full product view with ratings, reviews, and add-to-cart
- **Cart Management** — Add/remove/update items with Redux Toolkit state
- **Checkout Flow** — Address form + Razorpay payment (student bypass for testing)
- **User Profile** — View account details and order history
- **Order Success** — Animated confirmation page after purchase
- **Dark/Light Theme** — Warm dark (#09090b) with orange accent; light cream (#faf8f5) with amber
- **Cart Badge Animation** — Bouncing orange badge on navbar when items added
- **Custom Toast Notifications** — Animated slide-in toasts

### Authentication
- **Login** — Email/password with inline validation
- **Register** — Name, email, password with strength indicator
- **JWT Sessions** — Token-based auth with role-based access control
- **Password Toggle** — Eye icon to show/hide password

### Admin Dashboard
- **Stats Overview** — Total orders, products, users, revenue
- **Manage Products** — Table view with edit/delete, add new products
- **Manage Orders** — View all orders, update status (Pending → Shipped → Delivered)
- **User Directory** — View all users with role badges
- **Product Image Upload** — Cloudinary integration

### UI/UX
- **404 Page** — Custom not-found page
- **Modal System** — Reusable animated modal
- **Image Skeletons** — Shimmer loading placeholders
- **Animated Theme Toggle** — Sun/moon SVG icons
- **About Page** — Tech stack, developer info, social links

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 (CRA), Redux Toolkit, React Router v6 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose ODM) |
| **Authentication** | JWT, bcryptjs |
| **Payments** | Razorpay (test mode with student bypass) |
| **Image Upload** | Cloudinary + Multer |
| **Email** | Nodemailer (Gmail SMTP) |
| **Styling** | Custom CSS with CSS Variables |
| **Font** | Outfit (Google Fonts) |
| **Icons** | Lucide React SVGs |

---

## Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account

### 1. Clone & Install

```bash
git clone https://github.com/SumitInTech/sumnexus.git
cd sumnexus
npm run install-all
```

### 2. Environment Variables

Create `backend/.env` (see `backend/.env.example` for reference):

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Seed Database

```bash
npm run seed
```

Admin: `admin@sumnexus.com` / `password123`

### 4. Run

```bash
npm run dev
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

---

## Project Structure

```
sumnexus/
├── backend/
│   ├── config/db.js           # MongoDB connection
│   ├── controllers/           # Auth, product, order, analytics
│   ├── middleware/auth.js     # JWT verification
│   ├── models/               # User, Product, Order
│   ├── routes/               # Express routes
│   ├── utils/sendEmail.js    # Nodemailer utility
│   ├── seed.js               # Database seeder
│   └── server.js             # Express entry
├── frontend/
│   ├── src/
│   │   ├── admin/            # Admin pages
│   │   ├── components/       # Navbar, Footer, Toast, Modal, ProductCard
│   │   ├── context/          # AuthContext, ThemeContext
│   │   ├── pages/            # Home, Shop, Cart, Login, etc.
│   │   ├── redux/            # Redux store + cart slice
│   │   └── styles/           # CSS files
│   └── public/               # Static assets (logo, dp)
├── SumNexus_Postman_Collection.json
└── package.json              # Root scripts (concurrently)
```

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/users` | Get all users (admin) |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product (admin) |
| PUT | `/api/products/:id` | Update product (admin) |
| DELETE | `/api/products/:id` | Delete product (admin) |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create order |
| GET | `/api/orders` | Get user orders |
| PUT | `/api/orders/:id/status` | Update order status (admin) |

### Analytics
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/analytics` | Get dashboard stats (admin) |

---

## Postman Collection

Import `SumNexus_Postman_Collection.json` into Postman for API testing.

---

## Deployment (Render Free-Tier)

1. Push repo to **GitHub**
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Create **Web Service** → Connect repo
4. Build Command: `npm run build`
5. Start Command: `npm start`
6. Set environment variables with `NODE_ENV=production`
7. Deploy

---

## Author

**Sumit Kumar**
- GitHub: [https://github.com/SumitInTech](https://github.com/SumitInTech)
- LinkedIn: [https://linkedin.com/in/sumit-kumar-86a635349](https://linkedin.com/in/sumit-kumar-86a635349)

---

## License

This project is open source and available under the [MIT License](LICENSE).
