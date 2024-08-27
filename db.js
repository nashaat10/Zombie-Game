import pg from "pg";
const { Pool } = pg;

const poolConfig = {};
const pool = new Pool();

export default pool;
