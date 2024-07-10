import * as dotenv from 'dotenv'; 
import { DataSource } from 'typeorm';
dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  logging: true,
  synchronize: false,
  ssl: process.env.ENVIRONMENT === 'production' ? true : false,
  extra:
    process.env.ENVIRONMENT === 'production'
      ? {
          ssl: {
            rejectUnauthorized:
              process.env.ENVIRONMENT === 'production' ? false : true,
          },
        }
      : null,
  entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
});

export default dataSource;
