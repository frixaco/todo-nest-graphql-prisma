import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { AppService } from './app.service';
import { CreateTodoInput, EditTodoInput, Todo } from './graphql.schema';

@Resolver('todo')
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query('todos')
  async getAll(): Promise<Todo[]> {
    return this.appService.getTodos();
  }

  @Query('todo')
  async getTodo(@Args('id') id: number): Promise<Todo> {
    return this.appService.getTodo(id);
  }

  @Mutation('createTodo')
  async addTodo(@Args('data') data: CreateTodoInput) {
    return this.appService.addTodo(data);
  }

  @Mutation('editTodo')
  async editTodo(@Args('id') id: number, @Args('data') data: EditTodoInput) {
    return this.appService.editTodo(id, data);
  }

  @Mutation('deleteTodo')
  async deleteTodo(@Args('id') id: number) {
    return this.appService.deleteTodo(id);
  }
}
