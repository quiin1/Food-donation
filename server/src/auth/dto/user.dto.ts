import { BaseDto } from "src/common/base.dto";
import { IsNotEmpty } from "@nestjs/class-validator";
import { Expose } from "class-transformer";

export class UserDto extends BaseDto {
    @Expose()
    @IsNotEmpty()
    name: string;
    
    @Expose()
    @IsNotEmpty()
    password: string;
}