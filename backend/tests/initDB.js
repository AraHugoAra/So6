import { createConnection } from "promise-mysql";

const connectionOptions = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME + "_test",
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
};

export const connection = createConnection(connectionOptions)

export const seedData = async (db, query) => {
  //comments
  await db.query('CREATE TABLE comments (id bigint(20) NOT NULL,body varchar(150) NOT NULL,timestamp datetime DEFAULT CURRENT_TIMESTAMP,post_id bigint(20) NOT NULL,user_id bigint(20) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4')
  await db.query('INSERT INTO comments (id, body, timestamp, post_id, user_id) VALUES (1, "Mdr les gonzess", "2023-02-22 15:45:38", 19, 11)')
  //likes
  await db.query('')
}