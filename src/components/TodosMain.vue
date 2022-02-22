<script lang="ts" setup>
import TodosList from '@/components/TodosList.vue';
</script>

<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <TodosList />
  </section>
</template>
