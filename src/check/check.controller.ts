import { Controller, Post, Body } from '@nestjs/common';
import { CheckService } from './check.service';

@Controller('api/check')
export class CheckController {
  constructor(private readonly checkService: CheckService) {}

  @Post()
  async check_text(@Body() data: { text: string }) {
    // console.log(data['text']);
    return this.checkService.translate_text(data['text']);
  }

  @Post('/login')
  login(@Body() data: { id: string; pw: string }) {
    console.log(data['id'], data['pw']);
    return this.checkService.login(data['id'], data['pw']);
  }
}
