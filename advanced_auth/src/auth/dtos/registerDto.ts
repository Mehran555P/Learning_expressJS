import { IsDefined, IsEmail, IsOptional, MinLength, MaxLength, minLength } from "class-validator";

class RegisterDto {
    @IsDefined()
    @MaxLength(30)
    name: string;

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @MinLength(5)
    password: string;
}

export default RegisterDto;