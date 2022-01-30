import { Args, Resolver, Query } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService, // private postsService: PostsService,
  ) {}

  @Query('authors')
  async getAuthors() {
    console.log('findAll');
    return this.authorsService.findAll();
  }

  @Query('author')
  async author(@Args('id') id: number) {
    console.log('findOneById');
    return this.authorsService.findOneById(id);
  }
}
