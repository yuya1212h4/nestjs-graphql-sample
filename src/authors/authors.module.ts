import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';

@Module({
  imports: [],
  providers: [AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
