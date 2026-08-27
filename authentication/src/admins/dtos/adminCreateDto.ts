import { IsDefined, MaxLength, MinLength, Min, IsStrongPassword, IsBoolean } from "class-validator";
import { deflate } from "node:zlib";

class CreateAdminDto {
    @IsDefined()
    name: string;

    @IsDefined()
    @IsStrongPassword()
    password: string;

    @IsDefined()
    @IsBoolean()
    isAdmin: boolean;
}

export default CreateAdminDto;