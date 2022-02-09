<template>
  <input
    v-model.trim="title"
    class="new-todo"
    placeholder="What needs to be done?"
    autofocus
    @keyup.enter="handleEnter"
  />
</template>

<script setup>
import { ref } from 'vue';

const title = ref('');
const emit = defineEmits({
  create(title) { return title.length > 0; }
});

const handleEnter = () => {
  if (title.value.length > 0) {
    emit('create', title.value);
  }
  title.value = '';
}
</script>
