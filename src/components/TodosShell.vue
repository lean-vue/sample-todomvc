<script lang="ts" setup>
import TodosInput from '@/components/TodosInput.vue';
import TodosMain from '@/components/TodosMain.vue';
import TodosActionbar from '@/components/TodosActionbar.vue';
import useAppStore from '@/store/use-app-store';

const { createTodo } = useAppStore();
</script>

<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput @create="createTodo" />
    </header>
    <TodosMain />
    <TodosActionbar />
  </section>
</template>
