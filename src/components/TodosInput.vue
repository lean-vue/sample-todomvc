<template>
  <input
    ref="fld"
    v-model.trim="title"
    class="new-todo"
    placeholder="What needs to be done?"
    @keyup.enter="handleEnter"
  />
</template>

<script setup>
import { onMounted, ref } from 'vue';

const fld = ref(null);
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

onMounted(() => { fld.value.focus(); })
</script>
