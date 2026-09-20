<div align="center">
  <img src="/SumNexusLogo.png" alt="SUMNEXUS Logo" width="60" />
  <h1>SUMNEXUS Frontend</h1>
  <p>React-based e-commerce frontend with Redux Toolkit state management and custom CSS theming</p>
</div>

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 (CRA) | UI framework |
| Redux Toolkit | State management (cart) |
| React Router v6 | Client-side routing |
| Custom CSS | Styling with CSS Variables |
| Lucide React | SVG icons |

## Project Structure

```
src/
├── admin/              # Admin pages
│   ├── AdminDashboard.jsx
│   ├── AdminProducts.jsx
│   ├── AdminOrders.jsx
│   └── AdminUsers.jsx
├── components/         # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── Toast.jsx
│   └── Modal.jsx
├── context/            # React Context providers
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── pages/              # User-facing pages
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   ├── ProductDetail.jsx
│   ├── Checkout.jsx
│   ├── OrderSuccess.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── redux/              # Redux store
│   ├── store.js
│   └── cartSlice.js
├── styles/             # CSS files
│   ├── global.css
│   ├── navbar.css
│   ├── auth.css
│   ├── admin.css
│   ├── toast.css
│   └── modal.css
├── App.jsx
└── index.js
```

## Getting Started

### Prerequisites
- Node.js v16+
- Backend server running on port 5000

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Frontend runs at http://localhost:3000 and proxies API requests to http://localhost:5000.

### Production Build

```bash
npm run build
```

## Features

- **Dark/Light Theme** — Warm dark (#09090b) with orange accent; light cream (#faf8f5) with amber
- **Cart Badge Animation** — Bouncing badge on item add
- **Custom Toast Notifications** — Animated slide-in toasts
- **Image Skeleton Loading** — Shimmer placeholders
- **Password Strength Indicator** — Visual strength bar on register
- **Responsive Design** — Mobile-first layout
- **Protected Routes** — Auth-based route guards
- **Admin Dashboard** — Stats, product/order/user management

## Environment

The frontend uses a proxy to forward `/api` requests to the backend:

```json
{
  "proxy": "http://localhost:5000"
}
```
