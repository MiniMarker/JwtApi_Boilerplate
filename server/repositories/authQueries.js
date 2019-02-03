
const userTableName = `users`;

const createUserTableQuery = `CREATE TABLE IF NOT EXISTS ${userTableName} (
    id SERIAL,
    username text PRIMARY KEY,
    password text NOT NULL,
    role text NOT NULL
);`;

const getUserByUsernameQuery = `SELECT * FROM ${userTableName} WHERE username = $1;`;
const createUserQuery = `INSERT INTO ${userTableName} (username, password, role) VALUES ($1, $2, $3);`;
const updateUserPasswordQuery = `UPDATE ${userTableName} SET password = $2 WHERE username = $1;`;
const deleteUserQuery = `DELETE FROM ${userTableName} WHERE username = $1;`;

module.exports = {createUserTableQuery, createUserQuery, getUserByUsernameQuery, updateUserPasswordQuery, deleteUserQuery};