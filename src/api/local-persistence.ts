import Todo from '@/model/todo';
import Persistence from './persistence';

// Module private helper
const loadTodos = (): Todo[] => JSON.parse(localStorage.todos || '[]');
const saveTodos = (todos: Todo[]) =>
  (localStorage.todos = JSON.stringify(todos));
const generateId = () => {
  const nextId: number = JSON.parse(localStorage.lastId || '0') + 1;
  localStorage.lastId = nextId;
  return nextId;
};

class LocalPersistence implements Persistence {
  async getAll() {
    return loadTodos();
  }

  async create(title: string) {
    const todo: Todo = { id: generateId(), title, completed: false };
    saveTodos([...loadTodos(), todo]);
    return todo;
  }

  async update(id: Todo['id'], changes: Partial<Omit<Todo, 'id'>>) {
    const todos = loadTodos();
    const todo: Todo = {
      ...(todos.find((t) => t.id === id) as Todo),
      ...changes,
    };
    saveTodos(todos.map((t) => (t.id === id ? todo : t)));
    return todo;
  }

  async destroy(id: Todo['id']) {
    const todos = loadTodos();
    saveTodos(todos.filter((t) => t.id !== id));
  }
}

export default LocalPersistence;
