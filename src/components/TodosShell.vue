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

<script setup>
import { onMounted } from 'vue';

import TodosInput from '@/components/TodosInput.vue';
import TodosMain from '@/components/TodosMain.vue';
import TodosActionbar from '@/components/TodosActionbar.vue';

import useAppState from '@/state/app-state';

const { initialize, createTodo } = useAppState();

onMounted(() => {
  initialize();
});

</script>
