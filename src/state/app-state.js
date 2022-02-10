import { computed, reactive } from 'vue';
import LocalPersistence from '@/api/local-persistence';

// Persistence Layer
const persistence = new LocalPersistence();

const initialState = {
  todos: [],
  filter: 'all',
};

const state = reactive(initialState);

//
// Getters
const hasTodos = computed(() => state.todos.length > 0);
const hasCompletedTodos = computed(() => state.todos.some((t) => t.completed));
const allDone = computed(() => !state.todos.some((t) => !t.completed));
const activeCount = computed(() =>
  state.todos.reduce((count, t) => (t.completed ? count : count + 1), 0)
);

const filter = computed(() => state.filter);
const filteredTodos = computed(() =>
  state.filter === 'all'
    ? state.todos
    : state.todos.filter((t) => t.completed === (state.filter === 'completed'))
);

//
// Actions
const initialize = async () => {
  const todos = await persistence.getAll();
  state.todos = todos;
};

const createTodo = async (title) => {
  const todo = await persistence.create(title);
  state.todos = [...state.todos, todo];
};

const toggleTodo = async (todo) => {
  const updatedTodo = await persistence.update(todo.id, {
    completed: !todo.completed,
  });
  state.todos = state.todos.map((t) => (t.id === todo.id ? updatedTodo : t));
};

const updateTodoTitle = async (id, title) => {
  const updatedTodo = await persistence.update(id, {
    title,
  });
  state.todos = state.todos.map((t) => (t.id === id ? updatedTodo : t));
};

const destroyTodo = async (id) => {
  await persistence.destroy(id);
  state.todos = state.todos.filter((t) => t.id !== id);
};

const syncAllCompletedStates = async (completed) => {
  const todos = state.todos.filter((t) => t.completed !== completed);
  await Promise.all(todos.map((t) => persistence.update(t.id, { completed })));
  todos.forEach((t) => (t.completed = completed));
};

const clearCompleted = async () => {
  await Promise.all(
    state.todos.filter((t) => t.completed).map((t) => persistence.destroy(t.id))
  );
  state.todos = state.todos.filter((t) => !t.completed);
};

const setVisibility = (filter) => {
  state.filter = filter;
};

//
// Composition API Method

const useAppState = () => {
  return {
    /* Getters */
    filter,
    filteredTodos,
    hasTodos,
    hasCompletedTodos,
    allDone,
    activeCount,
    /* Actions */
    initialize,
    createTodo,
    toggleTodo,
    updateTodoTitle,
    destroyTodo,
    syncAllCompletedStates,
    clearCompleted,
    setVisibility,
  };
};

export default useAppState;
