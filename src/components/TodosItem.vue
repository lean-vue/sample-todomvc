<template>
  <li :class="{ completed: todo.completed, editing: editMode }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)" />
      <label @dblclick="beginEdit">{{ todo.title }}</label>
      <button class="destroy" @click="destroyTodo(todo.id)"></button>
    </div>
    <input v-model="editTitle" class="edit" @keyup.enter="commitEdit" @blur="commitEdit" />
  </li>
</template>

<script setup>
import useAppState from '@/state/app-state';
import { ref } from 'vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});

const { toggleTodo, updateTodoTitle, destroyTodo } = useAppState();

// Editing Feature
const editMode = ref(false);
const editTitle = ref(props.todo.title);

const beginEdit = () => editMode.value = true;
const commitEdit = () => {
  if (editTitle.value.length > 0) {
    updateTodoTitle(props.todo.id, editTitle.value);
  } else {
    destroyTodo(props.todo.id);
  }
  editMode.value = false;
}
</script>
