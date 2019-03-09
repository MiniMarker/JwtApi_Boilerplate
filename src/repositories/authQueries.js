const userTableName = 'users';

export const createUserTableQuery = `
CREATE TABLE IF NOT EXISTS ${userTableName} (
    id SERIAL,
    username text PRIMARY KEY,
    password text NOT NULL,
    role text NOT NULL
);`;

export const getUserByUsernameQuery = `SELECT * FROM ${userTableName} WHERE username = $1;`;
export const createUserQuery = `INSERT INTO ${userTableName} (username, password, role) VALUES ($1, $2, $3);`;
export const updateUserPasswordQuery = `UPDATE ${userTableName} SET password = $2 WHERE username = $1;`;
export const deleteUserQuery = `DELETE FROM ${userTableName} WHERE username = $1;`;
