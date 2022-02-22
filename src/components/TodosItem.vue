<script lang="ts" setup>
import Todo from '@/model/todo';

defineProps<{ todo: Todo }>();
</script>

<template>
  <!-- List items should get the class `editing` when editing -->
  <li :class="{ completed: todo.completed }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" />
      <label>{{ todo.title }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>
