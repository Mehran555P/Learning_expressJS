import { IsDefined, IsEmail, IsOptional, MinLength, MaxLength, minLength } from "class-validator";

class CreateUserDto {
    @IsDefined()
    @MaxLength(30)
    name: string;

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    age: number;

    @IsDefined()
    @MinLength(5)
    password: string;
}

export default CreateUserDto;