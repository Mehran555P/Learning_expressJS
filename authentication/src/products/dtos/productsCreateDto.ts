import { IsDefined, MaxLength, MinLength, Min } from "class-validator";

class CreateProductDto {
    @IsDefined()
    @MinLength(2)
    @MaxLength(45)
    name: string;

    @IsDefined()
    @Min(0)
    cost: number;

    @IsDefined()
    @Min(0)
    stock: number;
}

export default CreateProductDto;