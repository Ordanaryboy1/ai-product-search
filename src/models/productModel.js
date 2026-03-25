const db = require("../config/db");

const searchProducts = (filters, callback) => {
  let sql = `
    SELECT p.* FROM products p
    JOIN categories c ON p.categoryid = c.id
    WHERE 1=1
  `;

  let values = [];

  if (filters.category) {
    sql += " AND c.name = ?";
    values.push(filters.category);
  }

  if (filters.max_price) {
    sql += " AND p.price <= ?";
    values.push(filters.max_price);
  }

  if (filters.color) {
    sql += " AND p.color = ?";
    values.push(filters.color);
  }

  if (filters.feature) {
    sql += " AND p.tags LIKE ?";
    values.push(`%${filters.feature}%`);
  }

  db.query(sql, values, callback);
};

module.exports = { searchProducts };