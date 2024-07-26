const express = require('express');
const ProductRouter = express.Router();
const ProductController = require('../controller/product');

// Create a new product
ProductRouter.post('/products', ProductController.createProduct);

// Read all products
ProductRouter.get('/products',ProductController.getAllProducts);

// Get a product by ID
ProductRouter.get('/products/:id',ProductController.getProduct );

// Replace a product with a given ID
ProductRouter.put('/products/:id', ProductController.replaceProduct);

// Update a product with a given ID
ProductRouter.patch('/products/:id',ProductController.patchProduct);
;

// Delete a product with a given ID
ProductRouter.delete('/products/:id',ProductController.deleteProduct);

module.exports = ProductRouter; // Export the router correctly
