const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');
const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/categories');
const subCategoryRoutes = require('./routes/subcategories');
const promptRoutes = require('./routes/prompts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/prompts', promptRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});