import { Injectable } from '@nestjs/common';
import { Sample } from '../interfaces/sample.interface';

@Injectable()
export class SampleService {
  private readonly sample: Sample[] = [];

  create(sample: Sample) {
    return `sample is created ${JSON.stringify(sample)}`;
  }

  findAll(): string {
    return 'find all the samples';
  }
}
