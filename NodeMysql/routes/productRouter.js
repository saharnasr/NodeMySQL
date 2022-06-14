const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);
router.get("/allProducts", productController.getAllProducts);
router.get("/:name", productController.getSingleProduct2);
router.get("/:id", productController.getSingleProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;