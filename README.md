## Configuration
Create `.env` file:
```
PORT=3000
NODE_ENV=production
PG_HOST=localhost
PG_PORT=5432
PG_USERNAME=postgres
PG_PASSWORD=
PG_DATABASE=trustless_db
```

## Start application

```
npm run start
```

Swagger is available at [http://localhost:3000/api/](http://localhost:3000/api/)

## Migrations
Before create migrations, check `.env` and `ormconfig.ts` files.

To generate a new migration file:
1) Change any `*.entity` file schema (for example, src/api/user/user.entity.ts)
4) Run
```
npm run migration:generate --name="ChangesDescription" 
```
3) Check `src/migrations` folder

To manually create a new empty migration file:
```
npm run migration:create --name="ChangesDescription" 
```

Migration files will be created in `src/migrations` directory.

In database list of applied migrations stored in `migrations` table.
