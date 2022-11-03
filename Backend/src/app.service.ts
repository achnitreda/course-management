import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "it's 20 after 10 what's happen ??";
  }
}
