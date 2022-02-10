<template>
  <footer v-if="hasTodos" class="footer">
    <span class="todo-count">
      <strong>{{ activeCount }}</strong>
      {{ activeCount === 1 ? 'item' : 'items' }} left
    </span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <RouterLink :class="{ selected: filter === 'all' }" to="/">All</RouterLink>
      </li>
      <li>
        <RouterLink :class="{ selected: filter === 'active' }" to="/active">Active</RouterLink>
      </li>
      <li>
        <RouterLink :class="{ selected: filter === 'completed' }" to="/completed">Completed</RouterLink>
      </li>
    </ul>
    <button v-if="hasCompletedTodos" class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>

<script setup>
import useAppState from '@/state/app-state';

const { hasTodos, activeCount, hasCompletedTodos, clearCompleted, filter } = useAppState();
</script>
