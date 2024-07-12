-- seeds.sql

INSERT INTO department (name)
VALUES 
('Front of House'),  -- This will have id 1
('Back of House'),   -- This will have id 2
('Administration');  -- This will have id 3

INSERT INTO role (title, salary, department_id)
VALUES 
('General Manager', 75000, 1),   -- Front of House
('Beertender', 25000, 1),        -- Front of House
('Barback', 10000, 1),           -- Front of House
('Master Brewer', 60000, 2),     -- Back of House
('Brewer Assistant', 40000, 2),  -- Back of House
('Operations Manager', 60000, 2),-- Back of House
('HR/Admin Manager', 70000, 3),  -- Administration
('Social Media Coordinator', 50000, 3); -- Administration

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Greyson', 'Riley', 1, NULL),
('Tim', 'Pickler', 2, 1),
('Mike', 'Devito', 2, 1),
('Jackson', 'Hubert', 3, 1),
('Sam', 'Kayata', 4, 6),
('Max', 'Kayata', 5, 6),
('Mike', 'Feaser', 6, NULL),
('Lauren', 'Barry', 7, NULL),
('Lurene', 'Gumina', 8, 7);
