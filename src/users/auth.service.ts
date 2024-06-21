import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    const user = await this.usersService.find(email);

    if(email.length){
        throw new BadRequestException('Email in use');
    }
  }

  signin() {}
}
