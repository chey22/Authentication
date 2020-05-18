import { Query } from "../index";

//find a particular token associated with that user in that row in the table
//could look it up by the token string, but this helps prevent a possible error of a) if tokens overlap or b) if a particular user has multiple tokens
const findOneByIdAndToken = async (id: number, token: string) => Query(`SELECT * FROM tokens WHERE id = ${id} AND token = '${token}'`); //the AND makes the query meet TWO conditions

//inserts a value into the tokens table with the user who's logging in, then take that inserted id & convert it to a signed token & update that row with the new token
//ex* if the user id is 1, we insert that into the userid column first (that's why the tokens table doesn't currently have any not null criteria).
//So insert who's trying to log in first. Once we confirm that's a valid foreign key to the users table, we get the id of that row to create a unique token & update with the newly signed token
const insert = async (userid: number) => Query(`INSERT INTO tokens (userid) VALUES (${userid})`);

//updates by a row's id and add the newly signed JSON web token into the database
const update = async (id: number, token: string) => Query(`UPDATE tokens SET token = '${token}' WHERE id = ${id}`);

export default {
    findOneByIdAndToken,
    insert,
    update
}