import { Pool } from "pg";

// PG Connection:
const pool = new Pool({
  user: "postgres",
  password: "Gayathri@161294",
  host: "localhost",
  port: 5432,
  database: "learning",
});

// pool.on("connect", async (client) => {
//   await client.query('SET search_path TO "ContactSchema"');
// });

export default pool;
