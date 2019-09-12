const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for product seletion
function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    res.forEach(row => {
      console.log(
        `Id: ${row.item_id} - Product: ${row.product_name} - Price: $${row.price}\n`
      );
    });
    askQuestions();
  });
}

function askQuestions() {
  inquirer
    .prompt([
      {
        message: "Please select the product id you would like to order.",
        type: "input",
        name: "productId"
      },
      {
        message: "How many units of this product would like to buy?",
        type: "input",
        name: "productQty"
      }
    ])
    .then(function(ans) {
      let productId = ans.productId;
      let productQty = ans.productQty;
      withdrawProd(productId, productQty);
    });
}

function withdrawProd(productId, productQty) {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    let product;
    // console.log(res);
    for (var i = 0; i < res.length; i++) {
      if (res[i].item_id == productId) {
        product = res[i];
      }
    }
    console.log(product, "Product was found");
    if (product.stock_quantity >= productQty) {
      orderComplete(product, productId, productQty);
      connection.end();
    } else {
      console.log(
        "Sorry the order has been canceled, there was insuffecent stock of this product."
      );
      connection.end();
    }
  });
}
function orderComplete(productObj, productId, productQty) {
  let newQuantity = productObj.stock_quantity - productQty;
  let productSales = productObj.price * productQty;
  let queryOne = "UPDATE products SET stock_quantity = ? where ?";
  let queryTwo = "UPDATE products SET product_sales = ? where ?";
  connection.query(
    queryOne,
    [newQuantity, { item_id: productId }],
    function() {}
  );
  connection.query(
    queryTwo,
    [productSales, { item_id: productId }],
    function() {}
  );
}
