import { computed, reactive } from 'vue';

const state = reactive({
  todos: [],
  filter: 'all',
});

const hasTodos = computed(() => state.todos.length > 0);

const useAppState = () => {
  return {
    hasTodos,
  };
};

export default useAppState;
