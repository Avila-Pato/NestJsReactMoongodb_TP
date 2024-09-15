/* eslint-disable prettier/prettier */
import { IsString, IsBoolean, IsOptional } from "class-validator";


export class UpdateTasDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean;
}