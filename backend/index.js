import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';  // Import user routes

// Load environment variables
dotenv.config();

const app = express();

// Function to fetch food nutrients
const fetchFoodNutrients = async (query) => {
  try {
    const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': process.env.NUTRITIONIX_APP_ID,
        'x-app-key': process.env.NUTRITIONIX_API_KEY,
      },
      body: JSON.stringify({ query: query }),  // Example: '1 apple'
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.error('Error fetching data:', response.status);
      throw new Error('Failed to fetch food nutrients');
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

// Function to get daily calorie intake
const getDailyCalorie = async () => {
  const url = 'https://calorie-calculator.p.rapidapi.com/caloriecalculator.php';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4d40e4986cmshac34204ee384edep1d31eejsn96f3e5c88203',
      'x-rapidapi-host': 'calorie-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

// Call the function
getDailyCalorie();

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Connect to MongoDB (local instance)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected locally via Compass'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

// Routes
app.use('/api/users', userRoutes);  // Use the user routes

// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
