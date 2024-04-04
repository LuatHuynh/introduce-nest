import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    default: 'junjiaclv',
    description: 'This username of user',
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    type: String,
    default: '**********',
    description: 'This password of user',
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    default: 'Junjia',
    description: 'This name of user',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    default: '0794515902',
    description: 'This phone number of user',
  })
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    type: String,
    default: 1081071964,
    description: 'This birthday of user (by timestamp)',
  })
  @IsNotEmpty()
  @IsNumber()
  birthday: number;
}

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['username', 'password']),
) {}
