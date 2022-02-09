<template>
  <footer v-if="hasTodos" class="footer">
    <span class="todo-count">
      <strong>{{ activeCount }}</strong>
      {{ activeCount === 1 ? 'item' : 'items' }} left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button v-if="hasCompletedTodos" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>

<script setup>
import useAppState from '@/state/app-state';

const { hasTodos, activeCount, hasCompletedTodos, clearCompleted } = useAppState();
</script>
