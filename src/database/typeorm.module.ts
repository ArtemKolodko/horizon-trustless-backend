import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {join} from "path";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  @Inject(ConfigService)
  private readonly config: ConfigService;

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.config.get<string>('database.host'),
      port: this.config.get<number>('database.port'),
      database: this.config.get<string>('database.name'),
      username: this.config.get<string>('database.username'),
      password: this.config.get<string>('database.password'),
      entities: [join(__dirname, '..', '/**/*.entity{.ts,.js}')],
      migrations: [join(__dirname, '..', 'migrations/*{.ts,.js}')],
      migrationsTableName: 'migrations',
      logger: 'file',
      synchronize: false,
      migrationsRun: true,
    };
  }
}
