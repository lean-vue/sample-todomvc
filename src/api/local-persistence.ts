import { useStorage } from '@vueuse/core';
import Persistence from './persistence';
import Todo from '@/model/todo';

const todos = useStorage<Todo[]>('todos', []);
const lastId = useStorage('lastId', 0);

class LocalPersistence implements Persistence {
  async getAll() {
    return [...todos.value];
  }

  async create(title: string) {
    const nextId = lastId.value + 1;
    const todo: Todo = { id: nextId, title, completed: false };

    todos.value.push(todo);
    lastId.value = nextId;

    return todo;
  }

  async update(id: Todo['id'], changes: Partial<Omit<Todo, 'id'>>) {
    const todo: Todo = {
      ...(todos.value.find((t) => t.id === id) as Todo),
      ...changes,
    };
    todos.value = todos.value.map((t) => (t.id === id ? todo : t));
    return todo;
  }

  async destroy(id: Todo['id']) {
    todos.value = todos.value.filter((t) => t.id !== id);
  }
}

export default LocalPersistence;
