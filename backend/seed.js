const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);
    
    await User.create({
      name: 'Admin User',
      email: 'admin@sumnexus.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation. Perfect for travel, work, or relaxation with 30-hour battery life.',
        price: 2999,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format',
        ratings: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable addition to any contemporary living room. Ergonomic design with premium cushioning.',
        price: 4999,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format',
        ratings: 4.2,
        numReviews: 12
      },
      {
        name: 'Professional DSLR Camera',
        description: 'Capture stunning moments with high-resolution clarity and speed. 45MP sensor with 4K video recording.',
        price: 89999,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format',
        ratings: 4.9,
        numReviews: 50
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit. Premium leather upper with memory foam insole.',
        price: 2499,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format',
        ratings: 4.5,
        numReviews: 89
      },
      {
        name: 'Smart Fitness Watch',
        description: 'Track your health and fitness with GPS, heart rate monitor, and 7-day battery life. Water resistant up to 50m.',
        price: 3999,
        category: 'Electronics',
        stock: 25,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format',
        ratings: 4.6,
        numReviews: 67
      },
      {
        name: 'Premium Leather Backpack',
        description: 'Handcrafted genuine leather backpack with laptop compartment. Perfect for work or travel.',
        price: 5999,
        category: 'Accessories',
        stock: 20,
        imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format',
        ratings: 4.7,
        numReviews: 34
      },
      {
        name: 'Organic Green Tea Set',
        description: 'Premium Japanese matcha green tea set with ceramic bowl and bamboo whisk. 100% organic leaves.',
        price: 1499,
        category: 'Food & Beverages',
        stock: 40,
        imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&auto=format',
        ratings: 4.4,
        numReviews: 28
      },
      {
        name: 'Bluetooth Portable Speaker',
        description: '360-degree immersive sound with deep bass. IPX7 waterproof, 24-hour playtime, and built-in microphone.',
        price: 1999,
        category: 'Electronics',
        stock: 35,
        imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format',
        ratings: 4.3,
        numReviews: 45
      },
      {
        name: 'Designer Sunglasses',
        description: 'UV400 protection with polarized lenses. Lightweight titanium frame with premium carrying case.',
        price: 3499,
        category: 'Accessories',
        stock: 18,
        imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format',
        ratings: 4.5,
        numReviews: 56
      },
      {
        name: 'Yoga Mat Premium',
        description: 'Extra thick non-slip yoga mat with alignment lines. Eco-friendly TPE material, lightweight and portable.',
        price: 1299,
        category: 'Sports',
        stock: 45,
        imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format',
        ratings: 4.6,
        numReviews: 72
      },
      {
        name: 'Mechanical Gaming Keyboard',
        description: 'RGB backlit mechanical keyboard with blue switches. Programmable keys with anti-ghosting technology.',
        price: 4499,
        category: 'Electronics',
        stock: 22,
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format',
        ratings: 4.8,
        numReviews: 38
      },
      {
        name: 'Stainless Steel Water Bottle',
        description: 'Double-wall vacuum insulated bottle. Keeps drinks cold for 24 hours or hot for 12 hours. BPA free.',
        price: 899,
        category: 'Accessories',
        stock: 60,
        imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format',
        ratings: 4.7,
        numReviews: 91
      },
      {
        name: 'Wireless Charging Pad',
        description: 'Fast 15W wireless charger compatible with all Qi-enabled devices. Slim design with LED indicator.',
        price: 1199,
        category: 'Electronics',
        stock: 40,
        imageUrl: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=500&auto=format',
        ratings: 4.3,
        numReviews: 33
      },
      {
        name: 'Ceramic Coffee Mug Set',
        description: 'Set of 4 handcrafted ceramic mugs in earthy tones. Microwave and dishwasher safe. 350ml each.',
        price: 1699,
        category: 'Home & Kitchen',
        stock: 28,
        imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&auto=format',
        ratings: 4.5,
        numReviews: 41
      },
      {
        name: 'Canvas Running Shoes',
        description: 'Lightweight breathable canvas shoes with cushioned sole. Perfect for everyday wear and light exercise.',
        price: 1899,
        category: 'Clothing',
        stock: 55,
        imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format',
        ratings: 4.4,
        numReviews: 63
      }
    ];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully! 15 products seeded.');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
