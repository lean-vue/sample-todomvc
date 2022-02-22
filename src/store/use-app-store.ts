import { computed, ref } from 'vue';
import LocalPersistence from '@/api/local-persistence';
import Todo from '@/model/todo';

const persistence = new LocalPersistence();

const state = {
  todos: ref<Todo[]>([]),
  visibility: ref<'all' | 'active' | 'completed'>('all'),
};

// initializing store asynchronous
persistence.getAll().then((todos) => (state.todos.value = todos));

// helper
const filterTodosByVisibility = () =>
  state.visibility.value === 'all'
    ? state.todos.value
    : state.todos.value.filter(
        (t) => t.completed === (state.visibility.value === 'completed')
      );

// actions
const createTodo = async (title: string) => {
  const todo = await persistence.create(title);
  state.todos.value = [...state.todos.value, todo];
};
const toggleTodo = async (todo: Todo) => {
  const updatedTodo = await persistence.update(todo.id, {
    completed: !todo.completed,
  });
  state.todos.value = state.todos.value.map((t) =>
    t.id === todo.id ? updatedTodo : t
  );
};
const updateTitle = async (todo: Todo, title: string) => {
  const updatedTodo = await persistence.update(todo.id, {
    title,
  });
  state.todos.value = state.todos.value.map((t) =>
    t.id === todo.id ? updatedTodo : t
  );
};
const destroyTodo = async (todo: Todo) => {
  await persistence.destroy(todo.id);
  state.todos.value = state.todos.value.filter((t) => t.id !== todo.id);
};

// computed getters
const filteredTodos = computed(filterTodosByVisibility);
const hasTodos = computed(() => state.todos.value.length > 0);

const useAppStore = () => ({
  // actions
  createTodo,
  toggleTodo,
  updateTitle,
  destroyTodo,
  // getters
  filteredTodos,
  hasTodos,
});

export default useAppStore;
