# bamazon
# About bamazon
Bamazon is a Amazon--like storefrot that uses the command line to prompt the user a couple questions:
  * Asks the user to enter the id of the item they would like to purchase
  * Next asks the user the amount they would like to purchase
  * If there isnt enough stock to satisfy the users demand, we notify them we have insufficient stock
# How to use bamazon
1. Open Gitbash or Terminal
1. cd to the folder containing the bamazonCustomer.js file
1. follow prompts as desired
   1. completed purchase
   ![completed purchase screenshot](/screenshots/customer.png)

   1. insufficient stock
   ![insufficient stock screenshot](/screenshots/lowstock.png)

# Technologies Used
 * Node
 * Javascript
 * NPM Packages
   * mysql
   * inquirer
   * cli-table
 * Database
   * mysql