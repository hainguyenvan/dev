import { Module } from '@nestjs/common';

import { CatsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  controllers: [CatsController],
  providers: [DogsService],
})
export class DogsModule {}
