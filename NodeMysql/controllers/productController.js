const db = require("../models");

// create main model
const Product = db.products;

// create product
const addProduct = async (req, res) => {
  // validate request
  if (error) return res.status(400).send(error.details[0].message);
  return;
  }

  // create a product
  let info = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: req.body.price,
    createdOn: req.body.createdOn,
    lastUpdatedOn: req.body.lastUpdatedOn 
  };

  // save Product in the database
  try {
    const product = await Product.create(info);
    res.status(200).send(product);
    console.log(product);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the Product",
    });
  
};

// get all products
const getAllProducts = async (req, res) => {
  
  let products = await Product.findAll({});
  res.status(200).send(products);
  console.log(products);
};

// get single products using id
const getSingleProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};
// get single products using name
const getSingleProduct2 = async (req, res) => {
  let name = req.params.name;
  let product = await Product.findOne({ where: { name: name } });
  res.status(200).send(product);
};

// update a product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send('Product is Updated');
};

// delete a product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("Product is deleted");
};


module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  getSingleProduct2,
  updateProduct,
  deleteProduct,
};
