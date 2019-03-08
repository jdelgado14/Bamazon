DROP TABLE IF EXISTS `products`;

USE TABLE `products`;

CREATE TABLE `products` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  PRIMARY KEY (`item_id`)
) 

INSERT INTO `products` VALUES (1,'jeans','clothing',20,500),(2,'jacket','clothing',60,300),(3,'TV','electronics',250,400),(4,'camera','electronics',150,100),(5,'milk','grocery',5,1000),(6,'apples','grocery',2,2000),(7,'water hose','outdoors',20,200),(8,'bike','outdoors',80,98),(9,'antibiotic','pharmacy',30,600),(10,'vitamin','pharmacy',12,400),(11,'shirt','clothing',12,200),(12,'shoes','clothing',120,200),(13,'banana','grocery',4,400),(14,'cereal','grocery',10,400),(15,'hat','clothing',20,150),(16,'allergy medicine','pharmacy',25,400),(17,'headphones','electronics',100,300),(18,'lawn mower','outdoors',200,100);

