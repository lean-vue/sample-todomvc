<script lang="ts" setup>
import TodosList from '@/components/TodosList.vue';
import useAppStore from '@/store/use-app-store';

const { hasTodos } = useAppStore();
</script>

<template>
  <section v-if="hasTodos" class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all">Mark all as complete</label>
    <TodosList />
  </section>
</template>
