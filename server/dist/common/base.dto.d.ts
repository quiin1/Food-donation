export declare abstract class BaseDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T;
}
