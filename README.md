# employee-data-tracker

## Overview

**This Employee Data Tracker** is a command-line application designed to manage a company's employee database using Node.js, Inquirer, and PostgreSQL. This application provides a simple and efficient way to interact with employee information, including roles, departments, and management hierarchies.

## Features

- View All Employees: Displays a formatted table of all employees, including their IDs, first names, last names, roles, departments, salaries, and managers.
- Add Employee: Prompts the user to enter employee information such as first name, last name, role, and manager, and adds the new employee to the database.
- Update Employee Role: Allows the user to update an existing employee's role.
- View All Roles: Displays a list of all roles within the company.
- Add Role: Prompts the user to enter a new role's title, salary, and department, and adds it to the database.
- View All Departments: Displays a list of all departments.
- Add Department: Prompts the user to enter a new department name and adds it to the database.
- Quit: Exits the application.

## Technologies Used

- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Inquirer.js: A collection of common interactive command-line user interfaces.
- PostgreSQL: A powerful, open-source object-relational database system.
- pg (node-postgres): A collection of Node.js modules for interfacing with PostgreSQL databases.

## Project Structure

- index.js: The main entry point of the application. It includes the interactive menu powered by Inquirer and functions to handle various operations.
- db.js: Handles the connection to the PostgreSQL database using the pg library.
- schema.sql: Contains the SQL commands to create the necessary database and tables.
- seeds.sql: Contains the SQL commands to populate the database with initial data.

![Screenshot](./Develop/public/assets/images/2024-06-28.png)

## Setup and Installation

1. Clone the Repository:<br><br>
   git clone https://github.com/donnacancode/employee-data-tracker.git<br>
   cd employee-data-tracker<br><br>
2. Install Dependencies:<br><br>
   npm install<br><br>
3. Set up the Database:<br><br>
   Ensure PostgreSQL is installed and running. Execute the following commands to create the database and tables, and populate them with initial data:<br><br>
   psql -U postgres -f schema.sql<br>
   psql -U postgres -d employees_db -f seeds.sql<br><br>
4. Configure the database connection:<br><br>
   Update 'db.js' with your PostgreSQL username and password<br><br>
5. Run the application:<br><br>
   node index.js<br><br>

## Usage

Upon running the application, you will be presented with a menu of options. Use the arrow keys to navigate and press Enter to select an option. Follow the prompts to view, add, or update employees, roles, and departments.

## License

This app is licensed with the Unlicense. Please refer to the Unlicense documentation for more information.

## Contributions

Contributions are welcome! If you have suggestions for improvements or want to report bugs, please open an issue or submit a pull request.

## Contact

For questions, please contact Donna Burns: [Github](https://github.com/donnacancode)
