export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  base_url: 'http://localhost:3000/api/',
  database: {
    host: process.env.PG_HOST || 'localhost',
    port: parseInt(process.env.PG_PORT, 10) || 5432,
    username: process.env.PG_USERNAME || '',
    password: process.env.PG_PASSWORD || '',
    name: process.env.PG_DATABASE || '',
  }
});
