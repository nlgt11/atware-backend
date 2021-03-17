require('dotenv').config();
const express = require('express');

// Read environment from .env file
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
