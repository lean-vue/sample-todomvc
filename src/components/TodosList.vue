<template>
  <ul class="todo-list">
    <TodosItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script setup>
import useAppState from '@/state/app-state';
import TodosItem from '@/components/TodosItem.vue';

const { filteredTodos } = useAppState();

</script>
