<template>
  <section v-if="hasTodos" class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      :checked="allDone"
      @change="syncAllCompletedStates(!allDone)"
    />
    <label for="toggle-all">Mark all as complete</label>
    <TodosList />
  </section>
</template>

<script setup>
import TodosList from '@/components/TodosList.vue';
import useAppState from '@/state/app-state';
const { hasTodos, allDone, syncAllCompletedStates } = useAppState();
</script>
