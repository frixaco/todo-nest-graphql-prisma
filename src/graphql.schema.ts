
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTodoInput {
    title: string;
    author: string;
}

export class EditTodoInput {
    title?: string;
    author?: string;
}

export class Todo {
    id: number;
    title: string;
    author: string;
}

export abstract class IQuery {
    abstract todos(): Todo[] | Promise<Todo[]>;

    abstract todo(id: number): Todo | Promise<Todo>;
}

export abstract class IMutation {
    abstract editTodo(id: number, data?: EditTodoInput): Todo | Promise<Todo>;

    abstract createTodo(data?: CreateTodoInput): Todo | Promise<Todo>;

    abstract deleteTodo(id: number): Todo | Promise<Todo>;
}
