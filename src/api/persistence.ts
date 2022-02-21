import Todo from '@/model/todo';

/**
 * Base Interface for all persistence implementations.
 * All Methods are asnychronous to resemble real world scenarios.
 */
interface Persistence {
  getAll(): Promise<Todo[]>;
  create(title: string): Promise<Todo>;
  update(id: number, changes: Partial<Omit<Todo, 'id'>>): Promise<Todo>;
  destroy(id: number): Promise<void>;
}

export default Persistence;
