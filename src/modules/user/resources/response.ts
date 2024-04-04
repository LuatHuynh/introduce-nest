import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({
    type: String,
    default: '5c9dd130-89a0-4e96-bc55-66b9191869c7',
  })
  id: string;

  @ApiProperty({
    type: String,
    default: 'Junjia',
    description: 'This name of user',
  })
  name: string;

  @ApiProperty({
    type: String,
    default: '0794515902',
    description: 'This phone number of user',
  })
  phoneNumber: string;

  @ApiProperty({
    type: String,
    default: 1081071964,
    description: 'This birthday of user (by timestamp)',
  })
  birthday: number;
}
