import { IsDefined, IsEmail, IsOptional, MaxLength } from "class-validator";

class CreateUserDto {
    @IsDefined()
    @MaxLength(30)
    name!: string;

    @IsDefined()
    @IsEmail()
    email!: string;

    @IsOptional()
    age!: number;

    @IsDefined()
    password!: string;
}

export default CreateUserDto;