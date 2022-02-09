<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodosInput />
    </header>
    <TodosMain />
    <TodosActionbar />
  </section>
</template>

<script setup>
import TodosInput from '@/components/TodosInput.vue';
import TodosMain from '@/components/TodosMain.vue';
import TodosActionbar from '@/components/TodosActionbar.vue';

</script>
