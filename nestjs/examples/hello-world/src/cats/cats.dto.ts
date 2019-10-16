import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  readonly age: string;

  @IsEmail()
  email: string;
}
