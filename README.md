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
1) Change `.entity` file schema
2) Run:
```
npm run migration:generate --name="DesribeWhatChanged" 
```
3) Check `src/migrations` folder

To manually create a new empty migration file:
```
npm run migration:create --name="DesribeWhatChanged" 
```

Migration files will be created in `src/migrations` directory.
In database list of applied migrations stored in `migrations` table.
