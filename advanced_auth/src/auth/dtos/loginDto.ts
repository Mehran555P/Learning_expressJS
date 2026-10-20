import { IsDefined, IsEmail, IsOptional, MinLength, MaxLength, minLength } from "class-validator";

class LoginDto {

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @MinLength(5)
    password: string;
}

export default LoginDto;