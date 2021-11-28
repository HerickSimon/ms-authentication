import { Pool } from "pg";

const connectionString =
  "postgres://ifrdjvxu:4uDi_mOBY5-9z9nuTcQvv_y7J8NsIh4Z@motty.db.elephantsql.com/ifrdjvxu";

const db = new Pool({connectionString});

export default db;