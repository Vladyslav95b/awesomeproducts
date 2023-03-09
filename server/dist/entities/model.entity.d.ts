import { BaseEntity } from 'typeorm';
export default abstract class Model extends BaseEntity {
    id: string;
    created_at: Date;
    updated_at: Date;
}
