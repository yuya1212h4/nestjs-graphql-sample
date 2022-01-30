import { Injectable } from '@nestjs/common';
import { Author } from '../graphql.schema';

@Injectable()
export class AuthorsService {
  private readonly authors: Array<Author> = [
    { id: 1, firstName: 'first_1', lastName: 'last_1' },
    { id: 2, firstName: 'first_2', lastName: 'last_2' },
  ];
  findAll(): Author[] {
    return this.authors;
  }

  findOneById(id: number): Author {
    return this.authors.find((author) => author.id == id);
  }
}
