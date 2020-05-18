import { Query } from '../index';

const findUserByEmail = async (email: string) => Query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`); //email should be set to unique, but LIMIT 1 prevents it from somehow still returning multiple things

const findUserById = async (id: number) => Query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`);

//if a user enters an email in a registration form, need to find their info in the users table to confirm that's what it is & to get their password

//also verify tokens by user's id

//add other CRUD ops

export default {
    findUserByEmail,
    findUserById
}