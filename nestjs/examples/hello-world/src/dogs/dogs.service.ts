import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  getAll(payload) {
    return payload;
  }

  create(payload) {
    return new Promise((resolve, reject) => {
      resolve(payload);
    });
  }
}
