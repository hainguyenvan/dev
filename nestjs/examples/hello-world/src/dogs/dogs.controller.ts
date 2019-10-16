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
import { DogsService } from './dogs.service';
import { CatsService } from '../cats/cats.service';
import { CreateDogDto } from './dogs.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    res.status(HttpStatus.CREATED).send({
      msg: 'Successfuly Dog',
    });
  }

  @Get(':id')
  getByID(@Req() req: Request, @Res() res: Response, @Param('id') id) {
    res.status(HttpStatus.OK).send({
      msg: 'Successfuly Dog',
    });
  }

  @Post()
  create(@Req() req: Request, @Res() res: Response, @Body() dto: CreateDogDto) {
    console.log('dto: ', dto);
    console.log('headers: ', req.headers);
    dto.name = 'test12';
    this.dogsService
      .create(dto)
      .then(data => {
        res.status(HttpStatus.OK).send({
          msg: 'Successfuly',
          data: data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
