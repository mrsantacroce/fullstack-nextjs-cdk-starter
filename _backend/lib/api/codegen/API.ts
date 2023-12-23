/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  title: string,
  description: string,
  isCompleted: boolean,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  title: string,
  description: string,
  isCompleted: boolean,
  owner: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  isCompleted?: boolean | null,
};

export type PaginatedTodos = {
  __typename: "PaginatedTodos",
  todos:  Array<Todo | null >,
  nextToken?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  },
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  },
};

export type DeleteTodoMutationVariables = {
  id: string,
};

export type DeleteTodoMutation = {
  deleteTodo:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  },
};

export type GetTodosQueryVariables = {
  id: string,
};

export type GetTodosQuery = {
  getTodos:  {
    __typename: "Todo",
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
    owner: string,
    createdAt?: string | null,
    updatedAt?: string | null,
  },
};

export type ListTodosQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos:  {
    __typename: "PaginatedTodos",
    todos:  Array< {
      __typename: "Todo",
      id: string,
      title: string,
      description: string,
      isCompleted: boolean,
      owner: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  },
};
