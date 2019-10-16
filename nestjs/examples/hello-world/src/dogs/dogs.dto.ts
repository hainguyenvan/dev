import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDogDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  readonly age: string;

  @IsEmail()
  email: string;
}
