import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { EditTodoInput, Todo, CreateTodoInput } from './graphql.schema';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getTodos(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async getTodo(id: number): Promise<Todo> {
    return this.prisma.todo.findOne({ where: { id } });
  }

  async addTodo(data: CreateTodoInput): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }

  async editTodo(id: number, data: EditTodoInput): Promise<Todo | null> {
    return this.prisma.todo.update({ where: { id }, data });
  }

  async deleteTodo(id: number): Promise<Todo | null> {
    return this.prisma.todo.delete({ where: { id } });
  }
}
