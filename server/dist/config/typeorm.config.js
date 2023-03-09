"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'docker',
    database: process.env.DB_NAME || 'postgres_awe',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false,
};
//# sourceMappingURL=typeorm.config.js.map