var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon_db'
});

function firstPrompt() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        var table = new Table({
            head: ['Id', 'Product', 'Department', 'Price', 'Quantity']
        });
        //   console.log(res);
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(), res[i].stock_quantity]);
        }
        console.log(table.toString());
    })
    inquirer
        .prompt([{
            name: "itemId",
            type: "input",
            message: "Choose the id of the item you want to purchase\n",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, {
            name: "Quantity",
            type: "input",
            message: "Choose the amout you want to purchase\n",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }])
        .then(answers => {
            var quantity = answers.Quantity;
            var id = answers.itemId;
            // console.log(answers);
            purchase(id, quantity);
        });

    function purchase(ID, quantityChosen) {
        connection.query('SELECT * FROM products WHERE item_id = ' + ID, function (err, res) {
            if (err) throw err;
            // console.log(res);
            if (quantityChosen <= res[0].stock_quantity) {
                var totalCost = res[0].price * quantityChosen;
                console.log("Your total cost for " + quantityChosen + " " + res[0].product_name + " is " + totalCost + ". Thank you for your purchase.");
                connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantityChosen + ' WHERE item_id = ' + ID);
            } else {
                console.log("Our apologies. We don't have enough " + res[0].product_name + " to fulfill your order.");
            };
        });
    }
};

firstPrompt();
