import { IsDefined, MaxLength, MinLength, Min, IsStrongPassword } from "class-validator";
import { deflate } from "node:zlib";

class CreateAdminDto {
    @IsDefined()
    name: string;

    @IsDefined()
    @IsStrongPassword()
    password: string;
}

export default CreateAdminDto;