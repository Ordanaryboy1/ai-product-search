
const parseQuery = require("../utils/parseQuery");
const { searchProducts } = require("../models/productModel");

const search = (req, res) => {
  const q = req.query.q;

  if (!q) {
    return res.status(400).json({ message: "Query is required" });
  }

  const filters = parseQuery(q);

  searchProducts(filters, (err, results) => {
    if (err) {
      console.error("Search Error:", err); 
      return res.status(500).json({ 
        message: "Search failed",
        error: err.message 
      });
    }

    if (results.length === 0) {
      return res.json({ message: "No products found", data: [] });
    }

    res.json({ success: true, filters, data: results });
  });
};

module.exports = { search };