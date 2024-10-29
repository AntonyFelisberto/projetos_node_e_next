import {
  IsString,
  IsNumber,
  IsPositive,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class Livro {
  @IsString()
  nome: string;

  @IsString()
  autor: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(3000)
  @IsNotEmpty()
  pags: number;
}
