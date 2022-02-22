<script lang="ts" setup>
import { ref } from 'vue';
const title = ref('');

const emit = defineEmits<{(e: 'create', title: string): void}>();
const emitTitle = () => title.value && emit('create', title.value);
</script>

<template>
  <input
    v-model.trim="title"
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
    @keyup.enter="emitTitle(); title = ''"
  />
</template>
