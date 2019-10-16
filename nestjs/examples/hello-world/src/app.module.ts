import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// middleware
import { catsMiddleware, catsMiddlewareByID } from './middleware/cats';
import { dogsMiddleware } from './middleware/dogs';

// module
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

import { DogsController } from './dogs/dogs.controller';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('cats');
    consumer.apply(catsMiddleware).forRoutes(CatsController);
    
    // Not check middleware with /cats/:id
    consumer
      .apply(catsMiddlewareByID)
      .exclude({ path: 'cats/:id', method: RequestMethod.GET })
      .forRoutes(CatsController);
    consumer.apply(dogsMiddleware).forRoutes(DogsController);
  }
}
