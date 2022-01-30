
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    authors(): Nullable<Nullable<Author>[]> | Promise<Nullable<Nullable<Author>[]>>;
    author(id: string): Nullable<Author> | Promise<Nullable<Author>>;
}

export interface Author {
    id?: Nullable<number>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
}

type Nullable<T> = T | null;
