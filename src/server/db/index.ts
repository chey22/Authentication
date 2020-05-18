import * as mysql from "mysql";
import config from "../config"; //imports whatever the default export is from the config/index file

//table query imports
import Blogs from "./queries/blogs";
import Users from './queries/users';
import Tokens from './queries/tokens'

//node - mysql connection pool
export const pool = mysql.createPool(config.mysql); //config.mysql object in config/dev file - where the connection (AKA createPool) is created. createPool is easier to scale & deploy to Heroku than createConnection

//reusable query helper method
export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    pool.query(query, values, (err, results) => {
      if (err) reject(err);
      return resolve(results);
    });
  });
};

export default {
  Blogs,
  Users,
  Tokens
};
