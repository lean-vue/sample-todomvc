import { computed, ref } from 'vue';
import LocalPersistence from '@/api/local-persistence';
import Todo from '@/model/todo';

const persistence = new LocalPersistence();

const state = {
  todos: ref<Todo[]>([]),
  visibility: ref<'all' | 'active' | 'completed'>('all'),
};

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

// computed getters
const filteredTodos = computed(filterTodosByVisibility);
const hasTodos = computed(() => state.todos.value.length > 0);

const useAppStore = () => ({
  // actions
  createTodo,
  // getters
  filteredTodos,
  hasTodos,
});

export default useAppStore;
