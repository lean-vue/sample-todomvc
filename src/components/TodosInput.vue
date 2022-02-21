<template>
  <input
    v-model.trim="title" class="new-todo" placeholder="What needs to be done?"
    autofocus
    @keyup.enter="handleEnterKey"
  />
</template>

<script lang="ts" setup>
import {ref} from "vue";

const emit = defineEmits<{(e: 'create', title: string): void}>();

const title = ref('');
const handleEnterKey = () => {
  if (title.value) emit('create', title.value);
  title.value = '';
}
</script>
