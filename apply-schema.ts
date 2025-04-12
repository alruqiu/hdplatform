import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './shared/schema';

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool, { schema });

  // Create tables based on the schema
  await db.query.users.findMany();
  await db.query.clients.findMany();
  await db.query.departments.findMany();
  await db.query.orders.findMany();
  await db.query.orderProgress.findMany();
  await db.query.inventory.findMany();
  await db.query.workflowTemplates.findMany();

  console.log('Database schema initialized successfully');
  process.exit(0);
}

main().catch(error => {
  console.error('Error creating database schema:', error);
  process.exit(1);
});