import {
  Controller,
  Get,
  Req,
  Res,
  Param,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';

// dto
import { CatsService } from './cats.service';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    res.status(HttpStatus.CREATED).send({
      msg: 'Successfuly',
    });
  }

  @Get(':id')
  getByID(@Req() req: Request, @Res() res: Response, @Param('id') id) {
    res.status(HttpStatus.OK).send({
      msg: 'Successfuly',
    });
  }

  @Post()
  create(@Req() req: Request, @Res() res: Response, @Body() dto: CreateCatDto) {
    console.log('dto: ', dto);
    console.log('headers: ', req.headers);
    dto.name = 'test12';
    const data = this.catsService.create(dto);
    res.status(HttpStatus.OK).send({
      msg: 'Successfuly',
      data: data,
    });
  }
}
