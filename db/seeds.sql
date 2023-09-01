USE employee_db;

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES 
('Neil', 'Armstrong', 4, 0),
('Edwin', 'Aldrin', 1, 0),
('Michael', 'Collins', 57, 0),
('James', 'Lovell', 35, 0),
('Fred', 'Haise', 58, 3),
('Jack', 'Swigert', 54, 0),
('Pete', 'Conrad', 12, 0);

INSERT INTO department(dept_name)
VALUES 
('Competitor Benchmarking'),
('Information Technology'),
('Computer Engineering'),
('Electrical Engineering'),
('Chemical Engineering'),
('Mechanical Engineering'),
('User Interface Design'),
('Supply Chain Mgmt Logistics'),
('Credit & Finance'),
('Marketing & Sales'),
('Warranty Legal'),
('Intellectual Property'),
('Human Resources');