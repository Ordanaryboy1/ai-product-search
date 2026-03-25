const parseQuery = (q) => {
  q = q.toLowerCase();

  let filters = {};

  if (q.includes("laptop")) filters.category = "laptop";
  if (q.includes("mobile")) filters.category = "mobile";
  if (q.includes("shoes")) filters.category = "shoes";

  const priceMatch = q.match(/\d+/);
  if (priceMatch) filters.max_price = parseInt(priceMatch[0]);

  if (q.includes("red")) filters.color = "red";
  if (q.includes("black")) filters.color = "black";

  if (q.includes("battery")) filters.feature = "battery";

  return filters;
};

module.exports = parseQuery;