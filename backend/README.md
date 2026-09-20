<div align="center">
  <img src="/SumNexusLogo.png" alt="SUMNEXUS Logo" width="60" />
  <h1>SUMNEXUS Backend</h1>
  <p>Express.js REST API with MongoDB, JWT auth, and Razorpay integration</p>
</div>

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB (Mongoose) | Database |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Razorpay | Payment gateway |
| Cloudinary | Image hosting |
| Multer | File upload handling |
| Nodemailer | Email service |

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   ├── authController.js   # Register, login, users
│   ├── productController.js # CRUD products
│   ├── orderController.js  # Create orders, update status
│   └── analyticsController.js # Dashboard stats
├── middleware/
│   └── auth.js             # JWT verification middleware
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── orderRoutes.js
│   └── analyticsRoutes.js
├── utils/
│   └── sendEmail.js        # Nodemailer utility
├── uploads/                # Local file uploads
├── seed.js                 # Database seeder
├── server.js               # Express entry point
├── .env                    # Environment variables
└── package.json
```

## Getting Started

### Prerequisites
- Node.js v16+
- MongoDB Atlas account (or local MongoDB)

### Installation

```bash
npm install
```

### Environment Variables

Create `.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/sumnexus
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

### Seed Database

```bash
npm run seed
```

Creates:
- Admin: `admin@sumnexus.com` / `password123`
- 15+ products across 8 categories

### Development

```bash
npm run dev
```

Server runs at http://localhost:5000.

## API Endpoints

### Auth
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Register user |
| POST | `/api/auth/login` | No | Login user |
| GET | `/api/auth/users` | Admin | Get all users |

### Products
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/products` | No | List products |
| GET | `/api/products/:id` | No | Get product |
| POST | `/api/products` | Admin | Create product |
| PUT | `/api/products/:id` | Admin | Update product |
| DELETE | `/api/products/:id` | Admin | Delete product |

### Orders
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/orders` | User | Create order |
| GET | `/api/orders` | User | Get user orders |
| PUT | `/api/orders/:id/status` | Admin | Update order status |

### Analytics
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/analytics` | Admin | Dashboard stats |

## Scripts

```bash
npm start          # Production start
npm run dev        # Development with nodemon
npm run seed       # Seed database
```
