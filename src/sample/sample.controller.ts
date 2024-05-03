import { Controller, Get, Param } from '@nestjs/common';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {
  constructor(private sampleService: SampleService) { }

  @Get('/:name')
  create(@Param() param: { name: string }): string {
    console.log(param.name);
    if (!param.name) {
      throw new Error('Name not provided');
    }
    const sample = { name: param.name };
    return this.sampleService.create(sample);
  }

  @Get()
  findAll(): string {
    return this.sampleService.findAll();
  }
}
