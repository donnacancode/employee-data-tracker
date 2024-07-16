// index.js
const inquirer = require("inquirer");
const pool = require("./db");

// mainMenu prompts the user to choose an action and calls the corresponding function based on that choice
async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ],
    },
  ]);

  switch (action) {
    case "View All Employees":
      return viewAllEmployees();
    case "Add Employee":
      return addEmployee();
    case "Update Employee Role":
      return updateEmployeeRole();
    case "View All Roles":
      return viewAllRoles();
    case "Add Role":
      return addRole();
    case "View All Departments":
      return viewAllDepartments();
    case "Add Department":
      return addDepartment();
    case "Quit":
      return process.exit();
  }
}

async function viewAllEmployees() {
  const res = await pool.query("SELECT * FROM employee");
  console.table(res.rows);
  mainMenu();
}

async function addEmployee() {
  const rolesRes = await pool.query("SELECT id, title FROM role");
  const managersRes = await pool.query(
    "SELECT id, first_name, last_name FROM employee"
  );

  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
    { name: "firstName", message: "Employee's first name:" },
    { name: "lastName", message: "Employee's last name:" },
    {
      type: "list",
      name: "roleId",
      message: "Employee's role:",
      choices: rolesRes.rows.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
    {
      type: "list",
      name: "managerId",
      message: "Employee's manager:",
      choices: managersRes.rows
        .map((manager) => ({
          name: `${manager.first_name} ${manager.last_name}`,
          value: manager.id,
        }))
        .concat([{ name: "None", value: null }]),
    },
  ]);

  await pool.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, roleId, managerId]
  );

  console.log("Employee added!");
  mainMenu();
}

async function updateEmployeeRole() {
  const employeesRes = await pool.query(
    "SELECT id, first_name, last_name FROM employee"
  );
  const rolesRes = await pool.query("SELECT id, title FROM role");

  const { employeeId, roleId } = await inquirer.prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Select employee to update:",
      choices: employeesRes.rows.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      })),
    },
    {
      type: "list",
      name: "roleId",
      message: "Select new role:",
      choices: rolesRes.rows.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
  ]);

  await pool.query("UPDATE employee SET role_id = $1 WHERE id = $2", [
    roleId,
    employeeId,
  ]);

  console.log("Employee role updated!");
  mainMenu();
}

async function viewAllRoles() {
  const res = await pool.query("SELECT * FROM role");
  console.table(res.rows);
  mainMenu();
}

async function addRole() {
  const departmentsRes = await pool.query("SELECT id, name FROM department");

  const { title, salary, departmentId } = await inquirer.prompt([
    { name: "title", message: "Role title:" },
    { name: "salary", message: "Role salary:" },
    {
      type: "list",
      name: "departmentId",
      message: "Role department:",
      choices: departmentsRes.rows.map((department) => ({
        name: department.name,
        value: department.id,
      })),
    },
  ]);

  await pool.query(
    "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)",
    [title, salary, departmentId]
  );

  console.log("Role added!");
  mainMenu();
}

async function viewAllDepartments() {
  const res = await pool.query("SELECT * FROM department");
  console.table(res.rows);
  mainMenu();
}

async function addDepartment() {
  const { name } = await inquirer.prompt([
    { name: "name", message: "Department name:" },
  ]);

  await pool.query("INSERT INTO department (name) VALUES ($1)", [name]);

  console.log("Department added!");
  mainMenu();
}

mainMenu();
