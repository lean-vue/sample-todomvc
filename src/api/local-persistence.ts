import Persistence from './persistence';

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * @returns {Todo[]}
 */
const loadTodos = () => JSON.parse(localStorage.todos || '[]');
/**
 * @param {Todo[]} todos
 * @returns {void}
 */
const saveTodos = (todos) => (localStorage.todos = JSON.stringify(todos));
/**
 * @returns {number}
 */
const generateId = () => {
  /** @type {number} */
  const nextId = JSON.parse(localStorage.lastId || '0') + 1;
  localStorage.lastId = nextId;
  return nextId;
};

class LocalPersistence extends Persistence {
  /**
   * @returns {Promise<Todo[]>}
   */
  async getAll() {
    return loadTodos();
  }

  /**
   * @param {string} title
   * @returns {Promise<Todo>}
   */
  async create(title) {
    /** @type {Todo} */
    const todo = { id: generateId(), title, completed: false };
    const todos = loadTodos();
    todos.push(todo);
    saveTodos(todos);
    return todo;
  }

  /**
   * @param {number} id
   * @param {Partial<Omit<Todo, 'id'>>} changes
   * @returns {Promise<Todo>}
   */
  async update(id, changes) {
    const todos = loadTodos();
    /** @type {Todo} */
    const todo = { ...todos.find((t) => t.id === id), ...changes };
    saveTodos(todos.map((t) => (t.id === id ? todo : t)));
    return todo;
  }
  /**
   * @param {number} id
   * @returns {Promise<void>}
   */
  async destroy(id) {
    const todos = loadTodos();
    saveTodos(todos.filter((t) => t.id !== id));
  }
}

export default LocalPersistence;
