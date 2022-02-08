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
import TodosInput from './TodosInput.vue';
import TodosMain from './TodosMain.vue';
import TodosActionbar from './TodosActionbar.vue';

</script>
