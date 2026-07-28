import { IsDefined, MaxLength, MinLength } from "class-validator";

class CreateProductDto {
    @IsDefined()
    @MinLength(2)
    @MaxLength(45)
    name: string;

    @IsDefined()
    cost: number;

    @IsDefined()
    stock: number;
}

export default CreateProductDto;