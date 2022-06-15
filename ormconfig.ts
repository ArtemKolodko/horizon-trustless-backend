import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv'
import { join } from 'path'

config()

const host = process.env.PG_HOST || 'localhost';
const username = process.env.PG_USER || 'postgres';
const password = process.env.PG_PASSWORD || '';
const database = process.env.PG_DATABASE || '';
const port = parseInt(process.env.PG_PORT) || 5432;

export const connectionSource = new DataSource({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  logging: true,
  synchronize: false,
  entities: [join(__dirname, 'src', '/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, 'src', 'migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations',
} as DataSourceOptions);
