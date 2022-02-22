import { computed, ref } from 'vue';
import Todo from '@/model/todo';

const state = {
  todos: ref<Todo[]>([]),
  visibility: ref<'all' | 'active' | 'completed'>('all'),
};

// computed getters
const hasTodos = computed(() => state.todos.value.length > 0);

const useAppStore = () => ({
  // getters
  hasTodos,
});

export default useAppStore;
