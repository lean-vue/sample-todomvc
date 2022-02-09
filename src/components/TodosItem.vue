<template>
  <li :class="{ completed: todo.completed, editing: editMode }">
    <div v-if="!editMode" class="view">
      <input class="toggle" type="checkbox" :checked="todo.completed" @change="toggleTodo(todo)" />
      <label @dblclick="beginEdit">{{ todo.title }}</label>
      <button class="destroy" @click="destroyTodo(todo.id)"></button>
    </div>
    <input
      v-else
      ref="editElt"
      v-model.trim="editTitle"
      class="edit"
      @keyup.enter="commitEdit"
      @blur="commitEdit"
      @keyup.esc="rollbackEdit"
    />
  </li>
</template>

<script setup>
import useAppState from '@/state/app-state';
import { nextTick, ref } from 'vue';

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
const editElt = ref(null);

const beginEdit = () => {
  editMode.value = true; nextTick(() => {
    editElt.value.focus();
  })
}

const commitEdit = () => {
  if (!editMode.value) return;

  if (editTitle.value.length > 0) {
    updateTodoTitle(props.todo.id, editTitle.value);
  } else {
    destroyTodo(props.todo.id);
  }
  editMode.value = false;
}

const rollbackEdit = () => {
  editTitle.value = props.todo.title;
  editMode.value = false;
}
</script>
