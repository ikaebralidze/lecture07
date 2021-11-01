interface User {
  id: string;
  name: string;
  age: number;
  role: "admin" | "moderator" | "user";
  occupation: string;
}

// NOTE: use utility types
// NOTE: watch TS: Basics and TS: Advanced Types JS Georgia Talks too

// 1. create type in which all User properties will be optional
// 2. create type from User and remove "age" property from it
// 3. create type in which all the keys will be from User and their types will be boolean
// 4. pick id and name from User into another type and make them readonly
// 5. write new type Replace<T, K, U> which will do the folloing: Replace K from T with U
// example:
// Replace<User, 'occupation', boolean>

//////////////// N1

type PartialUser = Partial<User>;

//////////////// N2

type ageLess = Omit<User, "age">;

//////////////// N3

type boleaned = {
  [Key in keyof User]: boolean;
};

//////////////// N4

type readonly = Readonly<Pick<User, "id" | "name">>;

//////////////// N5

type Replace<T, K extends keyof T, U> = {
  [P in K]: U;
};

type useees = Replace<User, "age", Boolean>;
