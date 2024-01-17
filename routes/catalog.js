const express = require("express");
const router = express.Router();

// Require controller modules
const item_controller = require("../controllers/itemController");
const category_controller = require("../controllers/categoryController");

// Item routes

// Get catalog home page
router.get("/", item_controller.index);

// Get request for creating an item. This must comes before routes that display item (use id)
router.get("/item/create", item_controller.item_create_get);

// Post request for creating an item.
router.post("/item/create", item_controller.item_create_post);

// Get request for deleting item.
router.get("/item/:id/delete", item_controller.item_delete_get);

// Post request for deeleting item.
router.post("/item/:id/delete", item_controller.item_delete_post);

// Get request for updating item.
router.get("/item/:id/update", item_controller.item_update_get);

// Post request to update item.
router.post("/item/:id/update", item_controller.item_update_post);

// Get request for one item.
router.get("/item/:id", item_controller.item_detail);

// Get request for list of all items.
router.get("/items", item_controller.item_list);

// Category routes

// Get request for creating an category. This must comes before routes that display item (use id)
router.get("/category/create", category_controller.category_create_get);

// Post request for creating an category.
router.post("/category/create", category_controller.category_create_post);

// Get request for deleting category.
router.get("/category/:id/delete", category_controller.category_delete_get);

// Post request for deeleting category.
router.post("/category/:id/delete", category_controller.category_delete_post);

// Get request for updating category.
router.get("/category/:id/update", category_controller.category_update_get);

// Post request to update category.
router.post("/category/:id/update", category_controller.category_update_post);

// Get request for one category.
router.get("/category/:id", category_controller.category_detail);

// Get request for list of all categorys.
router.get("/categories", category_controller.category_list);

module.exports = router;
