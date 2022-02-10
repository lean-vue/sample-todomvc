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
import { onMounted, watchEffect } from 'vue';
import { useRoute, useRouter } from "vue-router";

import TodosInput from '@/components/TodosInput.vue';
import TodosMain from '@/components/TodosMain.vue';
import TodosActionbar from '@/components/TodosActionbar.vue';

import useAppState from '@/state/app-state';

// State
const { initialize, createTodo, setVisibility } = useAppState();
onMounted(() => {
  initialize();
});

// Routing
const router = useRouter();
const route = useRoute();
watchEffect(() => {
  const filter = route.params.filter || 'all';
  if (!['all', 'active', 'completed'].includes(filter)) {
    router.replace('/');
    return;
  }
  setVisibility(filter);
});
</script>
