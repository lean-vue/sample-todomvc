import { computed, ref } from 'vue';
import LocalPersistence from '@/api/local-persistence';
import Todo from '@/model/todo';

const persistence = new LocalPersistence();

const state = {
  todos: ref<Todo[]>([]),
  visibility: ref<'all' | 'active' | 'completed'>('all'),
};

// actions
const createTodo = async (title: string) => {
  const todo = await persistence.create(title);
  state.todos.value = [...state.todos.value, todo];
};

// computed getters
const hasTodos = computed(() => state.todos.value.length > 0);

const useAppStore = () => ({
  // actions
  createTodo,
  // getters
  hasTodos,
});

export default useAppStore;
