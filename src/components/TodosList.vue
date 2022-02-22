<script lang="ts" setup>
import TodosItem from '@/components/TodosItem.vue';
import useAppStore from '@/store/use-app-store';

const { filteredTodos } = useAppStore();
</script>

<template>
  <ul class="todo-list">
    <TodosItem v-for="todo in filteredTodos" :key="todo.id" />
  </ul>
</template>
