import { IsDefined, IsEmail, IsOptional, MinLength, MaxLength, Min, Max, IsStrongPassword } from "class-validator";

class CreateUserDto {

    @IsDefined()
    @MinLength(5)
    @MaxLength(40)
    name: string;

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @Min(18)
    @Max(125)
    age: number;

    @IsDefined()
    @MaxLength(100)
    userName: string;

    @IsDefined()
    @IsStrongPassword()
    password: string;
}

export default CreateUserDto;