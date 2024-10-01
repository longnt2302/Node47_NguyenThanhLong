# tạo cơ sở dữ liệu
CREATE DATABASE node47
USE node47

# tạo table, DATA
# tạo table users
# 3 KIỂU DỮ LIỆU CHÍNH:
# - Numer: INT(integer - số nguyên), FLOAT(số thực)...
# - String: VARCHAR, TEXT,....
# - Datetime (timestamp, day,...)
CREATE TABLE users(
	full_name VARCHAR(100),
	email VARCHAR(255),
	age INT,
	pass_word VARCHAR(255)
)

# tạo data cho table users
INSERT INTO users (full_name, email, age, pass_word) VALUES
('Nguyen Van A', 'nguyenvana@example.com', 25, 'password123'),
('Le Thi B', 'lethib@example.com', 30, 'abc@123!'),
('Tran Van C', 'tranvanc@example.com', 22, 'P@ssw0rd'),
('Pham Thi D', 'phamthid@example.com', 28, '1234abcd'),
('Hoang Van E', 'hoangvane@example.com', 35, 'E!2rfg567'),
('Bui Thi F', 'buithif@example.com', 27, 'my_pass_word'),
('Dang Van G', 'dangvang@example.com', 31, 'Secure$789'),
('Nguyen Thi H', 'nguyenthih@example.com', 29, 'pAssw*rd!'),
('Le Van I', 'levani@example.com', 23, 'qwerty12345'),
('Phan Thi K', 'phanthik@example.com', 32, '1password!'),
('Vu Van L', 'vuvanl@example.com', 33, 'pass2024'),
('Trinh Thi M', 'trinhthim@example.com', 26, 'ilovecode$'),
('Nguyen Van N', 'nguyenvann@example.com', 24, 'nguyenvann_pw'),
('Dang Thi O', 'dangthio@example.com', 28, '0passwOrd#'),
('Hoang Van P', 'hoangvanp@example.com', 40, '2024Secur!ty'),
('Le Thi Q', 'lethiq@example.com', 36, 'Qwerty987@'),
('Nguyen Van R', 'nguyenvanr@example.com', 22, 'RpassW0rd$'),
('Tran Thi S', 'tranthis@example.com', 27, 'sunnyday123'),
('Bui Van T', 'buivant@example.com', 34, 'helloWorld$'),
('Hoang Thi U', 'hoangthiu@example.com', 26, 'sUperSafe321');

# viết câu query để get data
# *: lấy hết tất cả data trong table
# AS: tạo mới tên cột chứa dữ liệu
SELECT * FROM users
SELECT full_name AS 'Họ tên', email FROM users

# lấy những người có tuổi từ 20-30 tuổi
# CÁCH 1:
SELECT * FROM users WHERE 20 <= age AND age <= 30

# 20 <= age <= 30: đây là ngôn ngữ lập trình viết
# 20 <= age and age <= 30: đây là ngôn ngữ MySQL viết

# CÁCH 2:
# between ... and ...
SELECT * FROM users WHERE age BETWEEN 20 AND 25

# lấy những người có tuổi từ 20-25 tuổi và sắp xếp
# tăng dần ( giảm dần )
# ASC/DESC: keyword để sắp xếp data: ASC (tăng dần) - DESC (giảm dần)
# LIMIT: giới hạn số lượng dữ liệu cần lấy
SELECT * FROM users 
WHERE age BETWEEN 20 AND 25 
ORDER BY age ASC 
LIMIT 4

# thêm column address and phone cho table users
# => update table thay vì xoá table và tạo lại
ALTER TABLE users # keyword để update table ( thêm column, đổi tên column, đổi datatype column )
ADD COLUMN address VARCHAR(255)


SELECT * FROM users WHERE age = (
SELECT age FROM users
ORDER BY age DESC
LIMIT 1
)

SELECT * FROM users ORDER BY age DESC


SELECT * FROM users
SELECT * FROM users WHERE user_id = 3
ALTER TABLE users ADD COLUMN `user_id` INT(255) PRIMARY KEY AUTO_INCREMENT

UPDATE users
SET age = '30'
WHERE user_id = 3

DELETE FROM users
WHERE user_id = 3 # bắt buộc phải có ( nếu không là sẽ xoá toàn bộ users )

# query, insert, update, delete



# tạo database cho web app food
# tạo table users, restaurant và food_type
# vì 3 table này không có FK
# tạo table users
CREATE TABLE users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	full_name VARCHAR(255),
	email VARCHAR(100),
	pass_word VARCHAR(100)
)

INSERT INTO users (full_name, email, pass_word) VALUES
('John Doe', 'john.doe@example.com', 'password123'),
('Jane Smith', 'jane.smith@example.com', 'abc12345'),
('Michael Johnson', 'michael.johnson@example.com', 'mikepass2023'),
('Emily Davis', 'emily.davis@example.com', 'emily_securepass'),
('Daniel Brown', 'daniel.brown@example.com', 'browniePass!'),
('Olivia Garcia', 'olivia.garcia@example.com', 'Oliviastrong2024'),
('James Martinez', 'james.martinez@example.com', 'jm2024pass'),
('Sophia Hernandez', 'sophia.hernandez@example.com', 'sofiapass2022'),
('Ethan Moore', 'ethan.moore@example.com', 'ethan2022secure'),
('Mia Anderson', 'mia.anderson@example.com', 'miasecure@123'),
('William Jackson', 'william.jackson@example.com', 'wjackson!321'),
('Isabella Thompson', 'isabella.thompson@example.com', 'isapass987'),
('Alexander White', 'alexander.white@example.com', 'alexstrongPASS'),
('Amelia Lee', 'amelia.lee@example.com', 'ameliapass@2021'),
('Mason Harris', 'mason.harris@example.com', 'mharrissecure'),
('Ava Clark', 'ava.clark@example.com', 'avaStrong!321'),
('Logan Lewis', 'logan.lewis@example.com', 'loganpass789'),
('Charlotte Young', 'charlotte.young@example.com', 'charlotteYP@2020'),
('Lucas King', 'lucas.king@example.com', 'lucaspass123!'),
('Harper Wright', 'harper.wright@example.com', 'harperwright321');

# tạo table restaurant
CREATE TABLE restaurant(
	res_id INT PRIMARY KEY AUTO_INCREMENT,
	res_name VARCHAR(100),
	image VARCHAR(255),
	description VARCHAR(255)
)

INSERT INTO restaurant (res_name, image, description) VALUES
('The Gourmet Spot', 'https://example.com/images/gourmet_spot.jpg', 'Fine dining experience with exotic flavors.'),
('Ocean Breeze', 'https://example.com/images/ocean_breeze.jpg', 'Seafood restaurant by the beach.'),
('Mountain Grill', 'https://example.com/images/mountain_grill.jpg', 'Rustic grill house in the mountains.'),
('City Lights Café', 'https://example.com/images/city_lights_cafe.jpg', 'Trendy café with a view of the skyline.'),
('Sunset Bistro', 'https://example.com/images/sunset_bistro.jpg', 'Perfect spot for a romantic dinner.'),
('Green Garden Eatery', 'https://example.com/images/green_garden.jpg', 'Healthy, organic, farm-to-table dishes.'),
('Spice Hub', 'https://example.com/images/spice_hub.jpg', 'Authentic Indian cuisine with bold spices.'),
('Golden Dragon', 'https://example.com/images/golden_dragon.jpg', 'Traditional Chinese restaurant with a modern twist.'),
('La Dolce Vita', 'https://example.com/images/la_dolce_vita.jpg', 'Classic Italian flavors and homemade pasta.'),
('El Rancho', 'https://example.com/images/el_rancho.jpg', 'Delicious Mexican food with a modern touch.'),
('Burger King', 'https://example.com/images/burger_king.jpg', 'Fast food joint known for its burgers.'),
('Sushi World', 'https://example.com/images/sushi_world.jpg', 'Fresh sushi prepared by expert chefs.'),
('The Steakhouse', 'https://example.com/images/steakhouse.jpg', 'Premium cuts of meat cooked to perfection.'),
('Taco Fiesta', 'https://example.com/images/taco_fiesta.jpg', 'Lively atmosphere and mouth-watering tacos.'),
('Pasta Palace', 'https://example.com/images/pasta_palace.jpg', 'Italian pasta restaurant with variety of sauces.'),
('Vegan Delights', 'https://example.com/images/vegan_delights.jpg', 'Plant-based menu for health-conscious eaters.'),
('Parisian Café', 'https://example.com/images/parisian_cafe.jpg', 'Quaint café with French pastries and coffee.'),
('Grill Master', 'https://example.com/images/grill_master.jpg', 'BBQ joint with famous smoked ribs.'),
('The Breakfast Club', 'https://example.com/images/breakfast_club.jpg', 'All-day breakfast café with a wide variety.'),
('The Wine Cellar', 'https://example.com/images/wine_cellar.jpg', 'Elegant dining with a world-class wine selection.');

# tạo table food_type
CREATE TABLE food_type(
	type_id INT PRIMARY KEY AUTO_INCREMENT,
	type_name VARCHAR(50)
)

INSERT INTO food_type (type_name) VALUES
('Italian'),
('Chinese'),
('Japanese'),
('Mexican'),
('Indian'),
('French'),
('Thai'),
('Greek'),
('American'),
('Spanish'),
('Vietnamese'),
('Korean'),
('Turkish'),
('Brazilian'),
('Lebanese'),
('Moroccan'),
('German'),
('Ethiopian'),
('Caribbean'),
('Mediterranean');

# tạo table rate_res
CREATE TABLE rate_res(
	rate_res_id INT PRIMARY KEY AUTO_INCREMENT,
	
	# tạo khoá ngoại user_id và tham chiếu qua khoá chính của table users
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	
	# tạo khoá ngoại res_id và tham chiếu qua khoá chính của table restaurant
	res_id INT,
	FOREIGN KEY(res_id) REFERENCES restaurant(res_id),
	
	amount INT,
	date_rate DATE
	
	
)

INSERT INTO rate_res (user_id, res_id, amount, date_rate) VALUES
(1, 1, 5, '2024-09-01'),
(2, 2, 4, '2024-09-02'),
(3, 3, 3, '2024-09-03'),
(4, 4, 5, '2024-09-04'),
(5, 5, 4, '2024-09-05'),
(6, 6, 5, '2024-09-06'),
(7, 7, 3, '2024-09-07'),
(8, 8, 4, '2024-09-08'),
(9, 9, 2, '2024-09-09'),
(10, 10, 5, '2024-09-10'),
(11, 11, 4, '2024-09-11'),
(12, 12, 5, '2024-09-12'),
(13, 13, 3, '2024-09-13'),
(14, 14, 4, '2024-09-14'),
(15, 15, 5, '2024-09-15'),
(16, 16, 3, '2024-09-16'),
(17, 17, 4, '2024-09-17'),
(18, 18, 5, '2024-09-18'),
(19, 19, 4, '2024-09-19'),
(20, 20, 5, '2024-09-20');

# tạo table like_res
CREATE TABLE like_res(
	like_res_id INT PRIMARY KEY AUTO_INCREMENT,
	
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	
	res_id INT,
	FOREIGN KEY(res_id) REFERENCES restaurant(res_id),
	
	date_like DATE
)

INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 1, '2024-09-01'),
(2, 2, '2024-09-02'),
(3, 3, '2024-09-03'),
(4, 4, '2024-09-04'),
(5, 5, '2024-09-05'),
(6, 6, '2024-09-06'),
(7, 7, '2024-09-07'),
(8, 8, '2024-09-08'),
(9, 9, '2024-09-09'),
(10, 10, '2024-09-10'),
(11, 11, '2024-09-11'),
(12, 12, '2024-09-12'),
(13, 13, '2024-09-13'),
(14, 14, '2024-09-14'),
(15, 15, '2024-09-15'),
(16, 16, '2024-09-16'),
(17, 17, '2024-09-17'),
(18, 18, '2024-09-18'),
(19, 19, '2024-09-19'),
(20, 20, '2024-09-20');

# tạo table foods
CREATE TABLE foods(
	food_id INT PRIMARY KEY AUTO_INCREMENT,
	food_name VARCHAR(100),
	
	type_id int,
	FOREIGN KEY(type_id) REFERENCES food_type(type_id),
	
	price INT,
	image VARCHAR(255),
	description VARCHAR(255)
)

INSERT INTO foods (food_name, type_id, price, image, description) VALUES
('Margherita Pizza', 1, 150, 'https://example.com/images/margherita_pizza.jpg', 'Classic Italian pizza with tomato, mozzarella, and basil.'),
('Kung Pao Chicken', 2, 180, 'https://example.com/images/kung_pao_chicken.jpg', 'Spicy stir-fried Chinese dish with chicken, peanuts, and vegetables.'),
('Sushi Roll', 3, 200, 'https://example.com/images/sushi_roll.jpg', 'Traditional Japanese sushi roll with fresh fish and rice.'),
('Tacos', 4, 120, 'https://example.com/images/tacos.jpg', 'Mexican tacos with beef, cheese, and lettuce.'),
('Butter Chicken', 5, 250, 'https://example.com/images/butter_chicken.jpg', 'Creamy Indian butter chicken with rich spices.'),
('Croissant', 6, 50, 'https://example.com/images/croissant.jpg', 'French buttery and flaky pastry.'),
('Pad Thai', 7, 180, 'https://example.com/images/pad_thai.jpg', 'Popular Thai stir-fried noodle dish.'),
('Greek Salad', 8, 120, 'https://example.com/images/greek_salad.jpg', 'Healthy Greek salad with olives, feta, and cucumbers.'),
('Cheeseburger', 9, 150, 'https://example.com/images/cheeseburger.jpg', 'American-style cheeseburger with beef patty, cheese, and lettuce.'),
('Paella', 10, 300, 'https://example.com/images/paella.jpg', 'Traditional Spanish rice dish with seafood.'),
('Pho', 11, 180, 'https://example.com/images/pho.jpg', 'Vietnamese noodle soup with beef and herbs.'),
('Bibimbap', 12, 200, 'https://example.com/images/bibimbap.jpg', 'Korean mixed rice dish with vegetables and meat.'),
('Kebabs', 13, 170, 'https://example.com/images/kebabs.jpg', 'Turkish grilled meat on skewers.'),
('Feijoada', 14, 220, 'https://example.com/images/feijoada.jpg', 'Brazilian black bean stew with pork.'),
('Shawarma', 15, 140, 'https://example.com/images/shawarma.jpg', 'Lebanese wrap with seasoned meat and vegetables.'),
('Tagine', 16, 250, 'https://example.com/images/tagine.jpg', 'Moroccan slow-cooked stew with meat and vegetables.'),
('Bratwurst', 17, 160, 'https://example.com/images/bratwurst.jpg', 'German sausage served with mustard and bread.'),
('Doro Wat', 18, 220, 'https://example.com/images/doro_wat.jpg', 'Ethiopian chicken stew with hard-boiled eggs.'),
('Jerk Chicken', 19, 230, 'https://example.com/images/jerk_chicken.jpg', 'Spicy Caribbean grilled chicken with jerk seasoning.'),
('Hummus', 20, 100, 'https://example.com/images/hummus.jpg', 'Mediterranean dip made from chickpeas and tahini.');

# tạo table orders
CREATE TABLE orders(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	
	food_id INT,
	FOREIGN KEY(food_id) REFERENCES foods(food_id),
	
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	
	amount INT,
	arr_sub_id VARCHAR(255)
)

INSERT INTO orders (food_id, user_id, amount, arr_sub_id) VALUES
(1, 1, 2, 'SUB123, SUB456'),
(2, 2, 1, 'SUB789'),
(3, 3, 3, 'SUB101, SUB102'),
(4, 4, 2, 'SUB103, SUB104'),
(5, 5, 1, 'SUB105'),
(6, 6, 4, 'SUB106, SUB107'),
(7, 7, 2, 'SUB108'),
(8, 8, 3, 'SUB109, SUB110'),
(9, 9, 1, 'SUB111'),
(10, 10, 2, 'SUB112, SUB113'),
(11, 11, 1, 'SUB114'),
(12, 12, 2, 'SUB115, SUB116'),
(13, 13, 3, 'SUB117'),
(14, 14, 4, 'SUB118, SUB119'),
(15, 15, 1, 'SUB120'),
(16, 16, 3, 'SUB121, SUB122'),
(17, 17, 2, 'SUB123'),
(18, 18, 4, 'SUB124, SUB125'),
(19, 19, 1, 'SUB126'),
(20, 20, 2, 'SUB127, SUB128');

# hiển thị username, tên món ăn của order với user_id = 5
SELECT u.full_name, f.food_name FROM orders o
INNER JOIN users u ON o.user_id = u.user_id
INNER JOIN foods f ON f.food_id = o.food_id
WHERE o.order_id = 5

# table sau keyword from là table bên trái
# table sau keyword join là table bên phải
# left join: lấy tất cả data giao nhau giữa 2 table và phần còn lại của table bên trái
# right join: ngược lại với left join, lấy tất cả data giao nhau giữa 2 table và phần còn lại của table bên phải

# count, max, min, avg -> phải sử dụng group by kèm theo để gom các column mình cần define
# Tìm 5 người đã like nhà hàng nhiều nhất.
SELECT COUNT(u.user_id) AS 'Số Like', u.user_id, u.full_name FROM users u
INNER JOIN like_res l ON u.user_id = l.user_id
GROUP BY u.user_id, u.full_name
# HAVING COUNT(u.user_id) = 1

# Khi tìm điều kiện trên những hàm tổng hợp thì dùng HAVING

ORDER BY COUNT(u.user_id)  DESC
LIMIT 5

# Tìm 2 nhà hàng có lượt like nhiều nhất
SELECT r.res_id, r.res_name, COUNT(lr.res_id) AS 'Số Like'
FROM restaurant r
JOIN like_res lr ON r.res_id = lr.res_id
GROUP BY r.res_id, r.res_name
ORDER BY COUNT(lr.res_id) DESC
LIMIT 2

# Tìm người đã đặt hàng nhiều nhất
SELECT u.full_name, COUNT(o.user_id) FROM users u
INNER JOIN orders o ON u.user_id = o.user_id
GROUP BY u.full_name
ORDER BY COUNT(o.user_id) DESC
LIMIT 1

# Tìm người dùng không hoạt động trong hệ thống
# (không đặt hàng, không like, không đánh giá nhà hàng).
SELECT u.user_id ,u.full_name FROM users u
LEFT JOIN orders o ON o.user_id = u.user_id
LEFT JOIN like_res lr ON lr.user_id = u.user_id
LEFT JOIN rate_res rs ON rs.user_id = u.user_id
WHERE o.user_id IS NULL AND lr.user_id IS NULL AND rs.user_id IS NULL