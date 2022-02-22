<script lang="ts" setup>
import Todo from '@/model/todo';
import useAppStore from '@/store/use-app-store';

defineProps<{ todo: Todo }>();

const { toggleTodo } = useAppStore();
</script>

<template>
  <!-- List items should get the class `editing` when editing -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.completed"
        @change="toggleTodo(todo)"
      />
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>
