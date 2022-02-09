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

//
// Composition API Method

const useAppState = () => {
  return {
    /* Getters */
    filteredTodos,
    hasTodos,
    /* Actions */
    initialize,
    createTodo,
  };
};

export default useAppState;
