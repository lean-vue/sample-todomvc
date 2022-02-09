<template>
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)" />
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<script setup>
import useAppState from '@/state/app-state';

defineProps({
  todo: {
    type: Object,
    required: true
  }
});

const { toggleTodo } = useAppState();
</script>
