const mongoose = require('mongoose');
const Product = require('./models/product');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/balkan-sports', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  // Call the function to seed the database
  seedDatabase();
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Function to seed the database with sample products
async function seedDatabase() {
  // Sample products data
  const productsData = [
    {
      name: 'Polo shirt',
      category: 'Clothes',
      description: 'black polo shirt',
      price: 10,
      picture: 'https://images.pexels.com/photos/14370670/pexels-photo-14370670.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Nike shoes ',
      category: 'shoes',
      description: 'white nike shoes',
      price: 20,
      picture: 'https://images.pexels.com/photos/12628400/pexels-photo-12628400.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    // Add more sample products as needed
  ];

  try {
    // Insert the sample products into the database
    await Product.insertMany(productsData);
    console.log('Sample products inserted successfully');
  } catch (error) {
    console.error('Error inserting sample products:', error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}
