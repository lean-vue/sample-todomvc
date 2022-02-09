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
const allDone = computed(() => !state.todos.some((t) => !t.completed));

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

const syncAllCompletedStates = async (completed) => {
  const todos = state.todos.filter((t) => t.completed !== completed);
  await Promise.all(todos.map((t) => persistence.update(t.id, { completed })));
  todos.forEach((t) => (t.completed = completed));
};

//
// Composition API Method

const useAppState = () => {
  return {
    /* Getters */
    filteredTodos,
    hasTodos,
    allDone,
    /* Actions */
    initialize,
    createTodo,
    toggleTodo,
    syncAllCompletedStates,
  };
};

export default useAppState;
